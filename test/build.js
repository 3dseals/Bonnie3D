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

var fs = require("fs");
var path = require("path");
var cp = require("child_process");

var DEFAULT_OUTPUT = "dependencies.js";
var SRC_DIR_RELATIVE = "../";
var SRC_DIR = "src";

var DEFAULT_TEST_DEPEND = [
'let _loadBonnie3D = function (requirePath, callbackName) {\n\
    let g_resources = ',
';\n    let require = function (path) {\n\
        var files = typeof path == "string" ? [path] : path;\n\
        for (var i = 0; i < files.length; i++) {\n\
            var name = files[i].replace(new RegExp("[\\\\\\\\]", "g"), "/");\n\
            var tag = "script";\n\
            var attr = "text/javascript";\n\
            var link = (requirePath?requirePath:"") + name;\n\
            var element=document.createElement(tag);\n\
            element.setAttribute("type",attr);\n\
            element.setAttribute("src", link);\n\
            document.getElementsByTagName("body")[0].appendChild(element);\n\
        }\n\
        var element=document.createElement(tag);\n\
        element.setAttribute("type",attr);\n\
        element.appendChild(document.createTextNode("setTimeout(function(){if(" + callbackName + "&& typeof " + callbackName + " === \\\"function\\\")" + callbackName + "();}, 100);"));\n\
        document.body.appendChild(element);\n\
    };\n\
    require(g_resources);\n\
}',
];

var DEPENDENCIES = [
    "../src/Engine/core/Boot.js",
    "../src/Engine/core/Log.js",
    "../src/Engine/base/Object.js",
    "../src/Engine/base/Component.js",
];

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

var generateDependencies = function () {
    var fileList = getDirFiles(path.join(SRC_DIR_RELATIVE, SRC_DIR));
    fileList = DEPENDENCIES.concat(fileList);
    var fileListString = "";
    var fileList2 = [];
    var srcList = [];
    fileList.forEach(function (filepath) {
        if(fileList2.indexOf(filepath.replace(new RegExp('[\\\\]', 'g'), "/")) == -1) {
            fileList2.push(filepath);
            console.log(filepath.replace(new RegExp('[\\\\]', 'g'), "/"));
        }
    });
    fileList2.forEach(function (filepath) {
        fileListString += filepath + "\n";
        srcList.push(filepath.replace(new RegExp('[\\\\]', 'g'), "/"));
    });

    fs.writeFileSync(DEFAULT_OUTPUT, DEFAULT_TEST_DEPEND[0] + JSON.stringify(srcList) + DEFAULT_TEST_DEPEND[1]);
};

var run = function () {
    generateDependencies();
};

// parse arguments
var arguments = function () {
    process.argv.forEach(function (arg) {
        if (arg === '-h') {
            console.log("Build Test Dependencies for Bonnie3D Engine\n");
            console.log("Usage: node build.js\n");
            console.log("Arguments:");
            console.log("-h: show this help");
            process.exit();
        }
    });
};

// only run from build directory
var cwd = process.cwd();
if (!fs.existsSync(cwd + '/build.js')) {
    console.error("run build test dependencies from test directory");
    process.exit(1);
}

arguments();
run();