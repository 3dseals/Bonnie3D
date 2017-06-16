/**
 * build.js - compile Bonnie3D engine from source into single javascript library
 * This uses the Closure Compiler which requires java to be installed
 * Example usage:
 *
 * // regular release build
 * node build.js -l 0 -o output/bonnie3d.js
 * // production minified build
 * node build.js -l 1 -o output/bonnie3d.min.js
 * // include extra debug code
 * node build.js -l 0 -d -o output/bonnie3d.dbg.js
 */

var path = require("path");
var cp = require("child_process");

try {
    var fs = require("fs-extra");
} catch (e) {
    console.error("Missing dependency: 'npm install fs-extra'");
    process.exit(1);
}
try {
    var ClosureCompiler = require("google-closure-compiler").compiler;
} catch (e) {
    console.error("Missing dependency: 'npm install google-closure-compiler'");
    process.exit(1);
}
try {
    var Preprocessor = require("preprocessor");
} catch (e) {
    console.error("Missing dependency: 'npm install preprocessor'");
    process.exit(1);
}

var DEFAULT_OUTPUT = "output/bonnie3d.js";
var DEFAULT_TEMP = "_tmp";
var SRC_DIR_RELATIVE = "../";
var SRC_DIR = "src";

var DEFAULT_PACKAGE = {
    "author": "Bonnie3D <lional.king@gmail.com>",
    "description": "Bonnie3D WebGL Engine.",
    "files": [
        "build/output/bonnie3d.js"
    ],
    "main": "build/output/bonnie3d.js",
    "name": "Bonnie3D",
    "repository": "https://github.com/3dseals/Bonnie3D",
    "version": ""
};

var COMPILER_LEVEL = [
    'WHITESPACE_ONLY',
    'SIMPLE',
    'ADVANCED'
];

var debug = false;
var outputPath = DEFAULT_OUTPUT;
var tempPath = DEFAULT_TEMP;
var compilerLevel = COMPILER_LEVEL[0];

// LIB FUNCTIONS
function directoryExists(path) {
    try {
        return fs.statSync(path).isDirectory();
    }
    catch (err) {
        return false;
    }
}

var replaceAll = function(target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
};
// END LIB FUNCTIONS

// get git revision
var getRevision = function (callback) {
    var command = "git rev-parse --short HEAD";

    cp.exec(command, function (err, stdout, stderr) {
        if (err) {
            callback(err, '-');
            return;
        }
        callback(null, stdout.trim());
    });
};

// get version from VERSION file
var getVersion = function (callback) {
    fs.readFile('../VERSION', function (err, buffer) {
        if (err) {
            callback(err, "__CURRENT_SDK_VERSION__");
        }
        callback(null, buffer.toString().trim());
    });
};

var getDirFiles = function (dirname) {
    var fileList = [];
    var listFile = function(file_path) {
        if(fs.statSync(file_path).isDirectory()){
            var dirList = fs.readdirSync(file_path);
            dirList.forEach(function(item){
                if(fs.statSync(file_path + path.sep + item).isDirectory()){
                    listFile(file_path + path.sep + item);
                }else{
                    fileList.push(file_path + path.sep + item);
                }
            });
        }else{
            fileList.push(file_path);
        }
    }
    listFile(dirname);
    return fileList;
};

var generateDependencies = function (fullpath) {
    var fileList = getDirFiles(path.join(SRC_DIR_RELATIVE, SRC_DIR));
    var fileListString = "";
    var srcList = [];
    fileList.forEach(function (filepath) {
        fileListString += filepath + "\n";
        srcList.push(filepath.replace(new RegExp('[\\\\]', 'g'), "/"));
    });
    var pp = new Preprocessor(fileListString);
    var src = pp.process({
        DEBUG: debug
    });
    fs.writeFileSync(fullpath, src);

    //fs.writeFileSync(path.join(SRC_DIR_RELATIVE + "test/dependencies.js"), DEFAULT_TEST_DEPEND[0] + JSON.stringify(srcList) + DEFAULT_TEST_DEPEND[1]);
};

// load dependencies.txt
var loadDependencies = function (fullpath, callback) {
    generateDependencies(fullpath);
    fs.readFile(fullpath, function (err, data) {
        if (err) callback(err);
        callback(data.toString().trim().split(new RegExp("[\\r\\n]+", 'g')));
    });
};

// run all dependencies through
// preprocesor (for #ifdef's etc)
// output to temp directory
// and return list of paths
var preprocess = function (dependencies) {
    // make temp dir and clear
    if (directoryExists(tempPath)) {
        fs.removeSync(tempPath);
    }

    var dependenciesOut = [];
    dependencies.forEach(function (filepath) {
        var relpath = path.relative(SRC_DIR_RELATIVE, filepath);
        var _out = path.join(tempPath, relpath);

        var buffer = fs.readFileSync(filepath);

        var pp = new Preprocessor(buffer.toString());
        var src = pp.process({
            DEBUG: debug
        });

        var dir = path.dirname(_out);
        fs.ensureDirSync(dir);

        fs.writeFileSync(_out, src);

        dependenciesOut.push(_out);
    });

    return dependenciesOut;
};

// insert version and revision into output source file
var insertVersions = function (filepath, callback) {
    getRevision(function (err, rev) {
        getVersion(function (err, ver) {
            fs.readFile(filepath, function (err, buffer) {
                if (err) {
                    callback(err);
                }

                var content = buffer.toString();

                content = replaceAll(content, "__CURRENT_SDK_VERSION__", ver);
                content = replaceAll(content, "__REVISION__", rev);

                fs.writeFile(filepath, content, function (err) {
                    callback(err, ver);
                });
            });
        });
    });
};

// write package.json needed for a nodejs package
var packageJson = function (version) {
    var json = DEFAULT_PACKAGE;
    json.version = version;
    fs.writeFileSync("package.json", JSON.stringify(json, null, 4));
};

// remove temporary files
var cleanup = function () {
    if (directoryExists(tempPath)) {
        fs.removeSync(tempPath);
    }
};

var run = function () {
    var start = new Date().getTime();

    loadDependencies("./dependencies.txt", function (lines) {
        // preprocess and get new dependency list
        var files = preprocess(lines);

        // set compiler options
        var options = {
            js: files,
            compilation_level: compilerLevel,
            language_in: "ECMASCRIPT6",
            js_output_file: outputPath,
            manage_closure_dependencies: true,
            jscomp_off: [
                "nonStandardJsDocs",  // docs warnings
                "checkTypes", // array types and other missing types
                "misplacedTypeAnnotation", // temp: hide docs using @type on defineProperty
                "globalThis", // temp: remove this again
                "suspiciousCode" // temp: remove this again
            ],
            warning_level: "VERBOSE"
        };

        if (compilerLevel === "WHITESPACE_ONLY") {
            options.formatting = "pretty_print";
        }
        var closureCompiler = new ClosureCompiler(options);

        // compile
        var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {

            if (exitCode) {
                console.error(stdErr);
                process.exit(exitCode);
            } else {
                if (stdErr) console.error(stdErr);
                // print compiler output
                if (stdOut) console.log(stdOut);

                insertVersions(outputPath, function (err, version) {
                    if (err) {
                        console.error(err);
                        process.exit();
                    }

                    packageJson(version);
                    cleanup();

                    // done
                    var time = (new Date().getTime() - start) / 1000;
                    console.log("Build completed in " + time + " seconds!");
                    process.exit(0);

                });
            }
        });

    });
};

// parse arguments
var arguments = function () {
    var _last = null;
    process.argv.forEach(function (arg) {
        if (arg === '-h') {
            console.log("Build Script for Bonnie3D Engine\n");
            console.log("Usage: node build.js -l [COMPILER_LEVEL] -o [OUTPUT_PATH]\n");
            console.log("Arguments:");
            console.log("-h: show this help");
            console.log("-l COMPILER_LEVEL: Set compiler level");
            console.log("\t0: WHITESPACE_ONLY [default]");
            console.log("\t1: SIMPLE");
            console.log("\t2: ADVANCED OPTIMIZATIONS");
            console.log("-o PATH: output file path [output/playcanvas-latest.js]");
            console.log("-d: build debug engine configuration");
            process.exit();
        }

        if (arg === '-d') {
            debug = true;
        }

        if (_last === '-l') {
            var level = parseInt(arg, 10);
            if (!(level >= 0 && level <= 2)) {
                console.error("Invalid compiler level (-l) should be: 0, 1 or 2.");
                process.exit(1);
            }
            compilerLevel = COMPILER_LEVEL[level];
        }

        if (_last === '-o') {
            outputPath = arg;
        }

        _last = arg;
    });
};

// only run from build directory
var cwd = process.cwd();
if (!fs.existsSync(cwd + '/build.js')) {
    console.error("run build script from build directory");
    process.exit(1);
}

arguments();
run();