/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(14);

	__webpack_require__(15);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	__webpack_require__(21);

	__webpack_require__(22);

	__webpack_require__(23);

	__webpack_require__(24);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Engine/Camera/OrthographicCamera.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(29);

	__webpack_require__(30);

	__webpack_require__(31);

	__webpack_require__(32);

	__webpack_require__(33);

	__webpack_require__(34);

	__webpack_require__(35);

	__webpack_require__(36);

	__webpack_require__(37);

	__webpack_require__(38);

	__webpack_require__(39);

	__webpack_require__(40);

	__webpack_require__(41);

	__webpack_require__(42);

	__webpack_require__(43);

	__webpack_require__(44);

	__webpack_require__(45);

	__webpack_require__(46);

	__webpack_require__(47);

	__webpack_require__(48);

	__webpack_require__(49);

	__webpack_require__(50);

	__webpack_require__(51);

	__webpack_require__(52);

	__webpack_require__(53);

	__webpack_require__(54);

	__webpack_require__(55);

	__webpack_require__(56);

	__webpack_require__(57);

	__webpack_require__(58);

	__webpack_require__(59);

	__webpack_require__(60);

	__webpack_require__(61);

	__webpack_require__(62);

	__webpack_require__(63);

	window["B3D"] = window["Bonnie3D"];
	window["B3D"].Application.run();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	window["Bonnie3D"] = window["Bonnie3D"] || {};

	Bonnie3D.CullFaceNone = 0;
	Bonnie3D.CullFaceBack = 1;
	Bonnie3D.CullFaceFront = 2;
	Bonnie3D.CullFaceFrontBack = 3;
	Bonnie3D.FrontFaceDirectionCW = 0;
	Bonnie3D.FrontFaceDirectionCCW = 1;
	Bonnie3D.BasicShadowMap = 0;
	Bonnie3D.PCFShadowMap = 1;
	Bonnie3D.PCFSoftShadowMap = 2;
	Bonnie3D.FrontSide = 0;
	Bonnie3D.BackSide = 1;
	Bonnie3D.DoubleSide = 2;
	Bonnie3D.FlatShading = 1;
	Bonnie3D.SmoothShading = 2;
	Bonnie3D.NoColors = 0;
	Bonnie3D.FaceColors = 1;
	Bonnie3D.VertexColors = 2;
	Bonnie3D.NoBlending = 0;
	Bonnie3D.NormalBlending = 1;
	Bonnie3D.AdditiveBlending = 2;
	Bonnie3D.SubtractiveBlending = 3;
	Bonnie3D.MultiplyBlending = 4;
	Bonnie3D.CustomBlending = 5;
	Bonnie3D.AddEquation = 100;
	Bonnie3D.SubtractEquation = 101;
	Bonnie3D.ReverseSubtractEquation = 102;
	Bonnie3D.MinEquation = 103;
	Bonnie3D.MaxEquation = 104;
	Bonnie3D.ZeroFactor = 200;
	Bonnie3D.OneFactor = 201;
	Bonnie3D.SrcColorFactor = 202;
	Bonnie3D.OneMinusSrcColorFactor = 203;
	Bonnie3D.SrcAlphaFactor = 204;
	Bonnie3D.OneMinusSrcAlphaFactor = 205;
	Bonnie3D.DstAlphaFactor = 206;
	Bonnie3D.OneMinusDstAlphaFactor = 207;
	Bonnie3D.DstColorFactor = 208;
	Bonnie3D.OneMinusDstColorFactor = 209;
	Bonnie3D.SrcAlphaSaturateFactor = 210;
	Bonnie3D.NeverDepth = 0;
	Bonnie3D.AlwaysDepth = 1;
	Bonnie3D.LessDepth = 2;
	Bonnie3D.LessEqualDepth = 3;
	Bonnie3D.EqualDepth = 4;
	Bonnie3D.GreaterEqualDepth = 5;
	Bonnie3D.GreaterDepth = 6;
	Bonnie3D.NotEqualDepth = 7;
	Bonnie3D.MultiplyOperation = 0;
	Bonnie3D.MixOperation = 1;
	Bonnie3D.AddOperation = 2;
	Bonnie3D.NoToneMapping = 0;
	Bonnie3D.LinearToneMapping = 1;
	Bonnie3D.ReinhardToneMapping = 2;
	Bonnie3D.Uncharted2ToneMapping = 3;
	Bonnie3D.CineonToneMapping = 4;
	Bonnie3D.UVMapping = 300;
	Bonnie3D.CubeReflectionMapping = 301;
	Bonnie3D.CubeRefractionMapping = 302;
	Bonnie3D.EquirectangularReflectionMapping = 303;
	Bonnie3D.EquirectangularRefractionMapping = 304;
	Bonnie3D.SphericalReflectionMapping = 305;
	Bonnie3D.CubeUVReflectionMapping = 306;
	Bonnie3D.CubeUVRefractionMapping = 307;
	Bonnie3D.RepeatWrapping = 1000;
	Bonnie3D.ClampToEdgeWrapping = 1001;
	Bonnie3D.MirroredRepeatWrapping = 1002;
	Bonnie3D.NearestFilter = 1003;
	Bonnie3D.NearestMipMapNearestFilter = 1004;
	Bonnie3D.NearestMipMapLinearFilter = 1005;
	Bonnie3D.LinearFilter = 1006;
	Bonnie3D.LinearMipMapNearestFilter = 1007;
	Bonnie3D.LinearMipMapLinearFilter = 1008;
	Bonnie3D.UnsignedByteType = 1009;
	Bonnie3D.ByteType = 1010;
	Bonnie3D.ShortType = 1011;
	Bonnie3D.UnsignedShortType = 1012;
	Bonnie3D.IntType = 1013;
	Bonnie3D.UnsignedIntType = 1014;
	Bonnie3D.FloatType = 1015;
	Bonnie3D.HalfFloatType = 1016;
	Bonnie3D.UnsignedShort4444Type = 1017;
	Bonnie3D.UnsignedShort5551Type = 1018;
	Bonnie3D.UnsignedShort565Type = 1019;
	Bonnie3D.UnsignedInt248Type = 1020;
	Bonnie3D.AlphaFormat = 1021;
	Bonnie3D.RGBFormat = 1022;
	Bonnie3D.RGBAFormat = 1023;
	Bonnie3D.LuminanceFormat = 1024;
	Bonnie3D.LuminanceAlphaFormat = 1025;
	Bonnie3D.RGBEFormat = Bonnie3D.RGBAFormat;
	Bonnie3D.DepthFormat = 1026;
	Bonnie3D.DepthStencilFormat = 1027;
	Bonnie3D.RGB_S3TC_DXT1_Format = 2001;
	Bonnie3D.RGBA_S3TC_DXT1_Format = 2002;
	Bonnie3D.RGBA_S3TC_DXT3_Format = 2003;
	Bonnie3D.RGBA_S3TC_DXT5_Format = 2004;
	Bonnie3D.RGB_PVRTC_4BPPV1_Format = 2100;
	Bonnie3D.RGB_PVRTC_2BPPV1_Format = 2101;
	Bonnie3D.RGBA_PVRTC_4BPPV1_Format = 2102;
	Bonnie3D.RGBA_PVRTC_2BPPV1_Format = 2103;
	Bonnie3D.RGB_ETC1_Format = 2151;
	Bonnie3D.LoopOnce = 2200;
	Bonnie3D.LoopRepeat = 2201;
	Bonnie3D.LoopPingPong = 2202;
	Bonnie3D.InterpolateDiscrete = 2300;
	Bonnie3D.InterpolateLinear = 2301;
	Bonnie3D.InterpolateSmooth = 2302;
	Bonnie3D.ZeroCurvatureEnding = 2400;
	Bonnie3D.ZeroSlopeEnding = 2401;
	Bonnie3D.WrapAroundEnding = 2402;
	Bonnie3D.TrianglesDrawMode = 0;
	Bonnie3D.TriangleStripDrawMode = 1;
	Bonnie3D.TriangleFanDrawMode = 2;
	Bonnie3D.LinearEncoding = 3000;
	Bonnie3D.sRGBEncoding = 3001;
	Bonnie3D.GammaEncoding = 3007;
	Bonnie3D.RGBEEncoding = 3002;
	Bonnie3D.LogLuvEncoding = 3003;
	Bonnie3D.RGBM7Encoding = 3004;
	Bonnie3D.RGBM16Encoding = 3005;
	Bonnie3D.RGBDEncoding = 3006;
	Bonnie3D.BasicDepthPacking = 3200;
	Bonnie3D.RGBADepthPacking = 3201;

	Bonnie3D.arrayMin = function (array) {

	    if (array.length === 0) return Infinity;

	    var min = array[0];

	    for (var i = 1, l = array.length; i < l; ++i) {

	        if (array[i] < min) min = array[i];
	    }

	    return min;
	};

	Bonnie3D.arrayMax = function (array) {

	    if (array.length === 0) return -Infinity;

	    var max = array[0];

	    for (var i = 1, l = array.length; i < l; ++i) {

	        if (array[i] > max) max = array[i];
	    }

	    return max;
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Log = function () {
	                function Log() {
	                        _classCallCheck(this, Log);
	                }

	                _createClass(Log, null, [{
	                        key: "info",
	                        value: function info() {
	                                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                                        args[_key] = arguments[_key];
	                                }

	                                console.info("[" + new Date().getTime() + "] INFO: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        }
	                }, {
	                        key: "debug",
	                        value: function debug() {
	                                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                                        args[_key2] = arguments[_key2];
	                                }

	                                if (Log.level) console.log("[" + new Date().getTime() + "] DEBUG: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        }
	                }, {
	                        key: "warning",
	                        value: function warning() {
	                                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                                        args[_key3] = arguments[_key3];
	                                }

	                                console.warn("[" + new Date().getTime() + "] WARNING: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        }
	                }, {
	                        key: "error",
	                        value: function error() {
	                                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                                        args[_key4] = arguments[_key4];
	                                }

	                                console.error("[" + new Date().getTime() + "] ERROR: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        }
	                }, {
	                        key: "alert",
	                        value: function (_alert) {
	                                function alert() {
	                                        return _alert.apply(this, arguments);
	                                }

	                                alert.toString = function () {
	                                        return _alert.toString();
	                                };

	                                return alert;
	                        }(function () {
	                                for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                                        args[_key5] = arguments[_key5];
	                                }

	                                console.log("[" + new Date().getTime() + "] ALERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                                alert("[" + new Date().getTime() + "] ALERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        })
	                }, {
	                        key: "trace",
	                        value: function trace() {
	                                for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                                        args[_key6] = arguments[_key6];
	                                }

	                                console.trace("[" + new Date().getTime() + "] TRACE: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                        }
	                }, {
	                        key: "assert",
	                        value: function assert(condition) {

	                                if (condition === false) {
	                                        for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	                                                args[_key7 - 1] = arguments[_key7];
	                                        }

	                                        console.trace("[" + new Date().getTime() + "] ASSERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                                }
	                        }
	                }, {
	                        key: "level",
	                        get: function get() {

	                                return Log._level ? Log._level : Log.INFO;
	                        },
	                        set: function set(l) {

	                                Log._level = l;
	                        }
	                }]);

	                return Log;
	        }();

	        Log.INFO = 0;
	        Log.DEBUG = 1;

	        Bonnie3D.Log = Log;
	})(undefined);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var StringFormat = function () {
	        function StringFormat(string) {
	            _classCallCheck(this, StringFormat);

	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            var _args = args;
	            var _explicit = false;
	            var _idx = 0;
	            var _implicit = false;
	            var _template = string;
	            if (!_template || typeof _template != "string") {
	                this._string = JSON.stringify(_template);
	            } else {
	                this._string = _template.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function (match, literal, key, transformer) {
	                    var value = void 0,
	                        _ref = void 0,
	                        _ref1 = void 0;
	                    if (literal) {
	                        return literal;
	                    }
	                    if (key.length) {
	                        if (_implicit) {
	                            var __hasProp = {}.hasOwnProperty;
	                            var __extends = function __extends(child, parent) {
	                                for (var _key2 in parent) {
	                                    if (__hasProp.call(parent, _key2)) child[_key2] = parent[_key2];
	                                }function ctor() {
	                                    this.constructor = child;
	                                }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	                            };

	                            var ValueError = function (_super) {
	                                __extends(ValueError, _super);

	                                this.message = 'cannot switch from {} to {} numbering';
	                                function ValueError(message) {
	                                    this.message = message;
	                                }

	                                ValueError.prototype.name = 'ValueError';

	                                return ValueError;
	                            }(Error);
	                            throw new ValueError('cannot switch from implicit to explicit numbering');
	                        }
	                        _explicit = true;

	                        var _resolve = function _resolve(object, key) {
	                            var value = void 0;
	                            if (object) {
	                                value = object[key];
	                            }
	                            if (typeof value === 'function') {
	                                return value.call(object);
	                            } else {
	                                return value;
	                            }
	                        };

	                        var _lookup = function _lookup(object, key) {
	                            var match = void 0;
	                            if (!/^(\d+)([.]|$)/.test(key)) {
	                                key = '0.' + key;
	                            }
	                            while (match = /(.+?)[.](.+)/.exec(key)) {
	                                object = _resolve(object, match[1]);
	                                key = match[2];
	                            }
	                            return _resolve(object, key);
	                        };

	                        value = (_ref = _lookup(_args, key)) != null ? _ref : '';
	                    } else {
	                        if (_explicit) {
	                            var _hasProp = {}.hasOwnProperty;
	                            var _extends = function _extends(child, parent) {
	                                for (var _key3 in parent) {
	                                    if (_hasProp.call(parent, _key3)) child[_key3] = parent[_key3];
	                                }function ctor() {
	                                    this.constructor = child;
	                                }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	                            };

	                            var _ValueError = function (_super) {
	                                _extends(ValueError, _super);

	                                this.message = 'cannot switch from {} to {} numbering';
	                                function ValueError(message) {
	                                    this.message = message;
	                                }

	                                ValueError.prototype.name = 'ValueError';

	                                return ValueError;
	                            }(Error);
	                            throw new _ValueError('cannot switch from explicit to implicit numbering');
	                        }
	                        _implicit = true;
	                        value = (_ref1 = _args[_idx++]) != null ? _ref1 : '';
	                    }
	                    return value;
	                });
	            }
	        }

	        _createClass(StringFormat, [{
	            key: 'toString',
	            value: function toString() {

	                return this._string;
	            }
	        }]);

	        return StringFormat;
	    }();

	    Bonnie3D.StringFormat = StringFormat;
	})(undefined);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Color = function () {
	                        function Color(r, g, b) {
	                                    _classCallCheck(this, Color);

	                                    if (g === undefined && b === undefined) {

	                                                // r is Bonnie3D.Color, hex or string
	                                                this.set(r);
	                                    }

	                                    this.setRGB(r, g, b);
	                        }

	                        _createClass(Color, [{
	                                    key: 'set',
	                                    value: function set(value) {

	                                                if (value instanceof Bonnie3D.Color) {

	                                                            this.copy(value);
	                                                } else if (typeof value === 'number') {

	                                                            this.setHex(value);
	                                                } else if (typeof value === 'string') {

	                                                            this.setStyle(value);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setHex',
	                                    value: function setHex(hex) {

	                                                hex = Math.floor(hex);

	                                                this.r = (hex >> 16 & 255) / 255;
	                                                this.g = (hex >> 8 & 255) / 255;
	                                                this.b = (hex & 255) / 255;

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setRGB',
	                                    value: function setRGB(r, g, b) {

	                                                this.r = r;
	                                                this.g = g;
	                                                this.b = b;

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setHSL',
	                                    value: function setHSL(h, s, l) {

	                                                function hue2rgb(p, q, t) {

	                                                            if (t < 0) t += 1;
	                                                            if (t > 1) t -= 1;
	                                                            if (t < 1 / 6) return p + (q - p) * 6 * t;
	                                                            if (t < 1 / 2) return q;
	                                                            if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
	                                                            return p;
	                                                }

	                                                // h,s,l ranges are in 0.0 - 1.0
	                                                h = Bonnie3D.Math.euclideanModulo(h, 1);
	                                                s = Bonnie3D.Math.clamp(s, 0, 1);
	                                                l = Bonnie3D.Math.clamp(l, 0, 1);

	                                                if (s === 0) {

	                                                            this.r = this.g = this.b = l;
	                                                } else {

	                                                            var p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
	                                                            var q = 2 * l - p;

	                                                            this.r = hue2rgb(q, p, h + 1 / 3);
	                                                            this.g = hue2rgb(q, p, h);
	                                                            this.b = hue2rgb(q, p, h - 1 / 3);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setStyle',
	                                    value: function setStyle(style) {

	                                                function handleAlpha(string) {

	                                                            if (string === undefined) return;

	                                                            if (parseFloat(string) < 1) {

	                                                                        Bonnie3D.Log.warning('Bonnie3D.Color: Alpha component of ' + style + ' will be ignored.');
	                                                            }
	                                                }

	                                                var m = void 0;

	                                                if (m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style)) {

	                                                            // rgb / hsl

	                                                            var color = void 0;
	                                                            var name = m[1];
	                                                            var components = m[2];

	                                                            switch (name) {

	                                                                        case 'rgb':
	                                                                        case 'rgba':

	                                                                                    if (color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

	                                                                                                // rgb(255,0,0) rgba(255,0,0,0.5)
	                                                                                                this.r = Math.min(255, parseInt(color[1], 10)) / 255;
	                                                                                                this.g = Math.min(255, parseInt(color[2], 10)) / 255;
	                                                                                                this.b = Math.min(255, parseInt(color[3], 10)) / 255;

	                                                                                                handleAlpha(color[5]);

	                                                                                                return this;
	                                                                                    }

	                                                                                    if (color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

	                                                                                                // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
	                                                                                                this.r = Math.min(100, parseInt(color[1], 10)) / 100;
	                                                                                                this.g = Math.min(100, parseInt(color[2], 10)) / 100;
	                                                                                                this.b = Math.min(100, parseInt(color[3], 10)) / 100;

	                                                                                                handleAlpha(color[5]);

	                                                                                                return this;
	                                                                                    }

	                                                                                    break;

	                                                                        case 'hsl':
	                                                                        case 'hsla':

	                                                                                    if (color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

	                                                                                                // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
	                                                                                                var h = parseFloat(color[1]) / 360;
	                                                                                                var s = parseInt(color[2], 10) / 100;
	                                                                                                var l = parseInt(color[3], 10) / 100;

	                                                                                                handleAlpha(color[5]);

	                                                                                                return this.setHSL(h, s, l);
	                                                                                    }

	                                                                                    break;

	                                                            }
	                                                } else if (m = /^\#([A-Fa-f0-9]+)$/.exec(style)) {

	                                                            // hex color

	                                                            var hex = m[1];
	                                                            var size = hex.length;

	                                                            if (size === 3) {

	                                                                        // #ff0
	                                                                        this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
	                                                                        this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
	                                                                        this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;

	                                                                        return this;
	                                                            } else if (size === 6) {

	                                                                        // #ff0000
	                                                                        this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
	                                                                        this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
	                                                                        this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;

	                                                                        return this;
	                                                            }
	                                                }

	                                                if (style && style.length > 0) {

	                                                            // color keywords
	                                                            var _hex = Bonnie3D.ColorKeywords[style];

	                                                            if (_hex !== undefined) {

	                                                                        // red
	                                                                        this.setHex(_hex);
	                                                            } else {

	                                                                        // unknown color
	                                                                        Bonnie3D.Log.warning('Bonnie3D.Color: Unknown color ' + style);
	                                                            }
	                                                }

	                                                return this;
	                                    }
	                        }]);

	                        return Color;
	            }();

	            Bonnie3D.Color = Color;

	            Bonnie3D.ColorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	                        'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	                        'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	                        'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	                        'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	                        'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	                        'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	                        'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	                        'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	                        'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	                        'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	                        'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	                        'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	                        'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	                        'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	                        'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	                        'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	                        'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	                        'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	                        'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	                        'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	                        'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	                        'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	                        'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };
	})(undefined);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Euler = function () {
	                        function Euler(x, y, z, order) {
	                                    _classCallCheck(this, Euler);

	                                    this._x = x || 0;
	                                    this._y = y || 0;
	                                    this._z = z || 0;
	                                    this._order = order || Euler.DefaultOrder;

	                                    this._onChangeCallback = function () {};
	                        }

	                        _createClass(Euler, [{
	                                    key: 'setFromRotationMatrix',
	                                    value: function setFromRotationMatrix(m, order, update) {

	                                                var clamp = Bonnie3D.Math.clamp;

	                                                // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

	                                                var te = m.elements;
	                                                var m11 = te[0],
	                                                    m12 = te[4],
	                                                    m13 = te[8];
	                                                var m21 = te[1],
	                                                    m22 = te[5],
	                                                    m23 = te[9];
	                                                var m31 = te[2],
	                                                    m32 = te[6],
	                                                    m33 = te[10];

	                                                order = order || this._order;

	                                                if (order === 'XYZ') {

	                                                            this._y = Math.asin(clamp(m13, -1, 1));

	                                                            if (Math.abs(m13) < 0.99999) {

	                                                                        this._x = Math.atan2(-m23, m33);
	                                                                        this._z = Math.atan2(-m12, m11);
	                                                            } else {

	                                                                        this._x = Math.atan2(m32, m22);
	                                                                        this._z = 0;
	                                                            }
	                                                } else if (order === 'YXZ') {

	                                                            this._x = Math.asin(-clamp(m23, -1, 1));

	                                                            if (Math.abs(m23) < 0.99999) {

	                                                                        this._y = Math.atan2(m13, m33);
	                                                                        this._z = Math.atan2(m21, m22);
	                                                            } else {

	                                                                        this._y = Math.atan2(-m31, m11);
	                                                                        this._z = 0;
	                                                            }
	                                                } else if (order === 'ZXY') {

	                                                            this._x = Math.asin(clamp(m32, -1, 1));

	                                                            if (Math.abs(m32) < 0.99999) {

	                                                                        this._y = Math.atan2(-m31, m33);
	                                                                        this._z = Math.atan2(-m12, m22);
	                                                            } else {

	                                                                        this._y = 0;
	                                                                        this._z = Math.atan2(m21, m11);
	                                                            }
	                                                } else if (order === 'ZYX') {

	                                                            this._y = Math.asin(-clamp(m31, -1, 1));

	                                                            if (Math.abs(m31) < 0.99999) {

	                                                                        this._x = Math.atan2(m32, m33);
	                                                                        this._z = Math.atan2(m21, m11);
	                                                            } else {

	                                                                        this._x = 0;
	                                                                        this._z = Math.atan2(-m12, m22);
	                                                            }
	                                                } else if (order === 'YZX') {

	                                                            this._z = Math.asin(clamp(m21, -1, 1));

	                                                            if (Math.abs(m21) < 0.99999) {

	                                                                        this._x = Math.atan2(-m23, m22);
	                                                                        this._y = Math.atan2(-m31, m11);
	                                                            } else {

	                                                                        this._x = 0;
	                                                                        this._y = Math.atan2(m13, m33);
	                                                            }
	                                                } else if (order === 'XZY') {

	                                                            this._z = Math.asin(-clamp(m12, -1, 1));

	                                                            if (Math.abs(m12) < 0.99999) {

	                                                                        this._x = Math.atan2(m32, m22);
	                                                                        this._y = Math.atan2(m13, m11);
	                                                            } else {

	                                                                        this._x = Math.atan2(-m23, m33);
	                                                                        this._y = 0;
	                                                            }
	                                                } else {

	                                                            Bonnie3D.Log.warning('Bonnie3D.Euler: .setFromRotationMatrix() given unsupported order: ' + order);
	                                                }

	                                                this._order = order;

	                                                if (update !== false) this._onChangeCallback();

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setFromQuaternion',
	                                    value: function setFromQuaternion(q, order, update) {

	                                                var matrix = new Bonnie3D.Matrix4();

	                                                matrix.makeRotationFromQuaternion(q);

	                                                this.setFromRotationMatrix(matrix, order, update);

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'onChange',
	                                    value: function onChange(callback) {

	                                                this._onChangeCallback = callback;

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'x',
	                                    get: function get() {

	                                                return this._x;
	                                    }
	                        }, {
	                                    key: 'y',
	                                    get: function get() {

	                                                return this._y;
	                                    }
	                        }, {
	                                    key: 'z',
	                                    get: function get() {

	                                                return this._z;
	                                    }
	                        }, {
	                                    key: 'order',
	                                    get: function get() {

	                                                return this._order;
	                                    }
	                        }]);

	                        return Euler;
	            }();

	            Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
	            Euler.DefaultOrder = 'XYZ';

	            Bonnie3D.Euler = Euler;
	})(undefined);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var Face = function () {
	        function Face(a, b, c, normal, color, materialIndex) {
	            _classCallCheck(this, Face);

	            this._a = a;
	            this._b = b;
	            this._c = c;

	            this._normal = normal instanceof Bonnie3D.Vector3 ? normal : new Bonnie3D.Vector3();
	            this._vertexNormals = normal instanceof Array ? normal : [];

	            this._color = color instanceof Bonnie3D.Color ? color : new Bonnie3D.Color();
	            this._vertexColors = color instanceof Array ? color : [];

	            this._materialIndex = materialIndex !== undefined ? materialIndex : 0;
	        }

	        _createClass(Face, [{
	            key: "vertexNormals",
	            get: function get() {
	                return this._vertexNormals;
	            }
	        }, {
	            key: "vertexColors",
	            get: function get() {
	                return this._vertexColors;
	            }
	        }]);

	        return Face;
	    }();

	    Bonnie3D.Face = Face;
	})(undefined);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Frustum = function () {
	                function Frustum(p0, p1, p2, p3, p4, p5) {
	                        _classCallCheck(this, Frustum);

	                        this.planes = [p0 !== undefined ? p0 : new Bonnie3D.Plane(), p1 !== undefined ? p1 : new Bonnie3D.Plane(), p2 !== undefined ? p2 : new Bonnie3D.Plane(), p3 !== undefined ? p3 : new Bonnie3D.Plane(), p4 !== undefined ? p4 : new Bonnie3D.Plane(), p5 !== undefined ? p5 : new Bonnie3D.Plane()];
	                }

	                _createClass(Frustum, [{
	                        key: "setFromMatrix",
	                        value: function setFromMatrix() {}
	                }]);

	                return Frustum;
	        }();

	        Bonnie3D.Frustum = Frustum;
	})(undefined);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Math = function () {
	                function Math() {
	                        _classCallCheck(this, Math);
	                }

	                _createClass(Math, null, [{
	                        key: 'generateUUID',
	                        value: function generateUUID() {

	                                var r = void 0;

	                                for (var i = 0; i < 36; i++) {

	                                        if (i === 8 || i === 13 || i === 18 || i === 23) {

	                                                Bonnie3D.Math._uuid[i] = '-';
	                                        } else if (i === 14) {

	                                                Bonnie3D.Math._uuid[i] = '4';
	                                        } else {

	                                                if (Bonnie3D.Math._rnd <= 0x02) Bonnie3D.Math._rnd = 0x2000000 + window["Math"].random() * 0x1000000 | 0;
	                                                r = Bonnie3D.Math._rnd & 0xf;
	                                                Bonnie3D.Math._rnd = Bonnie3D.Math._rnd >> 4;
	                                                Bonnie3D.Math._uuid[i] = Bonnie3D.Math._chars[i === 19 ? r & 0x3 | 0x8 : r];
	                                        }
	                                }

	                                return Bonnie3D.Math._uuid.join('');
	                        }
	                }, {
	                        key: 'clamp',
	                        value: function clamp(value, min, max) {

	                                return window.Math.max(min, window.Math.min(max, value));
	                        }

	                        // compute euclidian modulo of m % n
	                        // https://en.wikipedia.org/wiki/Modulo_operation

	                }, {
	                        key: 'euclideanModulo',
	                        value: function euclideanModulo(n, m) {

	                                return (n % m + m) % m;
	                        }
	                }]);

	                return Math;
	        }();

	        Math._chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	        Math._uuid = new Array(36);
	        Math._rnd = 0;

	        Math.DEG2RAD = Math.PI / 180;
	        Math.RAD2DEG = 180 / Math.PI;

	        Bonnie3D.Math = Math;
	})(undefined);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Matrix3 = function () {
	                        function Matrix3(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
	                                    _classCallCheck(this, Matrix3);

	                                    if (n11 instanceof Array) {

	                                                if (n11.length == 3 * 3) {

	                                                            this.elements = n11;
	                                                }
	                                    } else {

	                                                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];

	                                                if (n11 !== undefined && n12 !== undefined && n13 !== undefined && n21 !== undefined && n22 !== undefined && n23 !== undefined && n31 !== undefined && n32 !== undefined && n33 !== undefined) {

	                                                            this.elements[0] = n11;this.elements[3] = n12;this.elements[6] = n13;
	                                                            this.elements[1] = n21;this.elements[4] = n22;this.elements[7] = n23;
	                                                            this.elements[2] = n31;this.elements[5] = n32;this.elements[8] = n33;
	                                                }
	                                    }
	                        }

	                        _createClass(Matrix3, [{
	                                    key: "set",
	                                    value: function set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {

	                                                if (n11 instanceof Array) {

	                                                            if (n11.length == 3 * 3) {

	                                                                        this.elements = n11;
	                                                            }
	                                                } else if (n11 !== undefined && n12 !== undefined && n13 !== undefined && n21 !== undefined && n22 !== undefined && n23 !== undefined && n31 !== undefined && n32 !== undefined && n33 !== undefined) {

	                                                            this.elements[0] = n11;this.elements[3] = n12;this.elements[6] = n13;
	                                                            this.elements[1] = n21;this.elements[4] = n22;this.elements[7] = n23;
	                                                            this.elements[2] = n31;this.elements[5] = n32;this.elements[8] = n33;
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "setFromMatrix4",
	                                    value: function setFromMatrix4(m) {

	                                                var me = m.elements;

	                                                this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);

	                                                return this;
	                                    }
	                        }, {
	                                    key: "getInverse",
	                                    value: function getInverse(matrix, throwOnDegenerate) {

	                                                var me = matrix.elements,
	                                                    te = this.elements,
	                                                    n11 = me[0],
	                                                    n21 = me[1],
	                                                    n31 = me[2],
	                                                    n12 = me[3],
	                                                    n22 = me[4],
	                                                    n32 = me[5],
	                                                    n13 = me[6],
	                                                    n23 = me[7],
	                                                    n33 = me[8],
	                                                    t11 = n33 * n22 - n32 * n23,
	                                                    t12 = n32 * n13 - n33 * n12,
	                                                    t13 = n23 * n12 - n22 * n13,
	                                                    det = n11 * t11 + n21 * t12 + n31 * t13;

	                                                if (det === 0) {

	                                                            var msg = "Bonnie3D.Matrix3.getInverse(): can't invert matrix, determinant is 0";

	                                                            if (throwOnDegenerate === true) {

	                                                                        throw new Error(msg);
	                                                            } else {

	                                                                        Bonnie3D.Log.warning(msg);
	                                                            }

	                                                            return this.identity();
	                                                }

	                                                var detInv = 1 / det;

	                                                te[0] = t11 * detInv;
	                                                te[1] = (n31 * n23 - n33 * n21) * detInv;
	                                                te[2] = (n32 * n21 - n31 * n22) * detInv;

	                                                te[3] = t12 * detInv;
	                                                te[4] = (n33 * n11 - n31 * n13) * detInv;
	                                                te[5] = (n31 * n12 - n32 * n11) * detInv;

	                                                te[6] = t13 * detInv;
	                                                te[7] = (n21 * n13 - n23 * n11) * detInv;
	                                                te[8] = (n22 * n11 - n21 * n12) * detInv;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "transpose",
	                                    value: function transpose() {

	                                                var tmp = void 0,
	                                                    m = this.elements;

	                                                tmp = m[1];m[1] = m[3];m[3] = tmp;
	                                                tmp = m[2];m[2] = m[6];m[6] = tmp;
	                                                tmp = m[5];m[5] = m[7];m[7] = tmp;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "getNormalMatrix",
	                                    value: function getNormalMatrix(matrix4) {

	                                                return this.setFromMatrix4(matrix4).getInverse(this).transpose();
	                                    }
	                        }]);

	                        return Matrix3;
	            }();

	            Bonnie3D.Matrix3 = Matrix3;
	})(undefined);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Matrix4 = function () {
	                        function Matrix4(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	                                    _classCallCheck(this, Matrix4);

	                                    if (n11 instanceof Array) {

	                                                if (n11.length == 4 * 4) {

	                                                            this.elements = n11;
	                                                }
	                                    } else {

	                                                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	                                                if (n11 !== undefined && n12 !== undefined && n13 !== undefined && n14 !== undefined && n21 !== undefined && n22 !== undefined && n23 !== undefined && n24 !== undefined && n31 !== undefined && n32 !== undefined && n33 !== undefined && n34 !== undefined && n41 !== undefined && n42 !== undefined && n43 !== undefined && n44 !== undefined) {

	                                                            this.elements[0] = n11;this.elements[4] = n12;this.elements[8] = n13;this.elements[12] = n14;
	                                                            this.elements[1] = n21;this.elements[5] = n22;this.elements[9] = n23;this.elements[13] = n24;
	                                                            this.elements[2] = n31;this.elements[6] = n32;this.elements[10] = n33;this.elements[14] = n34;
	                                                            this.elements[3] = n41;this.elements[7] = n42;this.elements[11] = n43;this.elements[15] = n44;
	                                                }
	                                    }
	                        }

	                        _createClass(Matrix4, [{
	                                    key: "set",
	                                    value: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

	                                                if (n11 instanceof Array) {

	                                                            if (n11.length == 4 * 4) {

	                                                                        this.elements = n11;
	                                                            }
	                                                } else if (n11 !== undefined && n12 !== undefined && n13 !== undefined && n14 !== undefined && n21 !== undefined && n22 !== undefined && n23 !== undefined && n24 !== undefined && n31 !== undefined && n32 !== undefined && n33 !== undefined && n34 !== undefined && n41 !== undefined && n42 !== undefined && n43 !== undefined && n44 !== undefined) {

	                                                            this.elements[0] = n11;this.elements[4] = n12;this.elements[8] = n13;this.elements[12] = n14;
	                                                            this.elements[1] = n21;this.elements[5] = n22;this.elements[9] = n23;this.elements[13] = n24;
	                                                            this.elements[2] = n31;this.elements[6] = n32;this.elements[10] = n33;this.elements[14] = n34;
	                                                            this.elements[3] = n41;this.elements[7] = n42;this.elements[11] = n43;this.elements[15] = n44;
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "copy",
	                                    value: function copy(m) {

	                                                var te = this.elements;
	                                                var me = m.elements;

	                                                te[0] = me[0];te[1] = me[1];te[2] = me[2];te[3] = me[3];
	                                                te[4] = me[4];te[5] = me[5];te[6] = me[6];te[7] = me[7];
	                                                te[8] = me[8];te[9] = me[9];te[10] = me[10];te[11] = me[11];
	                                                te[12] = me[12];te[13] = me[13];te[14] = me[14];te[15] = me[15];

	                                                return this;
	                                    }
	                        }, {
	                                    key: "makeRotationFromQuaternion",
	                                    value: function makeRotationFromQuaternion(q) {

	                                                var te = this.elements;

	                                                var x = q._x,
	                                                    y = q._y,
	                                                    z = q._z,
	                                                    w = q._w;
	                                                var x2 = x + x,
	                                                    y2 = y + y,
	                                                    z2 = z + z;
	                                                var xx = x * x2,
	                                                    xy = x * y2,
	                                                    xz = x * z2;
	                                                var yy = y * y2,
	                                                    yz = y * z2,
	                                                    zz = z * z2;
	                                                var wx = w * x2,
	                                                    wy = w * y2,
	                                                    wz = w * z2;

	                                                te[0] = 1 - (yy + zz);
	                                                te[4] = xy - wz;
	                                                te[8] = xz + wy;

	                                                te[1] = xy + wz;
	                                                te[5] = 1 - (xx + zz);
	                                                te[9] = yz - wx;

	                                                te[2] = xz - wy;
	                                                te[6] = yz + wx;
	                                                te[10] = 1 - (xx + yy);

	                                                // last column
	                                                te[3] = 0;
	                                                te[7] = 0;
	                                                te[11] = 0;

	                                                // bottom row
	                                                te[12] = 0;
	                                                te[13] = 0;
	                                                te[14] = 0;
	                                                te[15] = 1;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "multiplyMatrices",
	                                    value: function multiplyMatrices(a, b) {

	                                                var ae = a.elements;
	                                                var be = b.elements;
	                                                var te = this.elements;

	                                                var a11 = ae[0],
	                                                    a12 = ae[4],
	                                                    a13 = ae[8],
	                                                    a14 = ae[12];
	                                                var a21 = ae[1],
	                                                    a22 = ae[5],
	                                                    a23 = ae[9],
	                                                    a24 = ae[13];
	                                                var a31 = ae[2],
	                                                    a32 = ae[6],
	                                                    a33 = ae[10],
	                                                    a34 = ae[14];
	                                                var a41 = ae[3],
	                                                    a42 = ae[7],
	                                                    a43 = ae[11],
	                                                    a44 = ae[15];

	                                                var b11 = be[0],
	                                                    b12 = be[4],
	                                                    b13 = be[8],
	                                                    b14 = be[12];
	                                                var b21 = be[1],
	                                                    b22 = be[5],
	                                                    b23 = be[9],
	                                                    b24 = be[13];
	                                                var b31 = be[2],
	                                                    b32 = be[6],
	                                                    b33 = be[10],
	                                                    b34 = be[14];
	                                                var b41 = be[3],
	                                                    b42 = be[7],
	                                                    b43 = be[11],
	                                                    b44 = be[15];

	                                                te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
	                                                te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
	                                                te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
	                                                te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

	                                                te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
	                                                te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
	                                                te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
	                                                te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

	                                                te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
	                                                te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
	                                                te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
	                                                te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

	                                                te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
	                                                te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
	                                                te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
	                                                te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "setPosition",
	                                    value: function setPosition(v) {

	                                                var te = this.elements;

	                                                te[12] = v.x;
	                                                te[13] = v.y;
	                                                te[14] = v.z;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "scale",
	                                    value: function scale(v) {

	                                                var te = this.elements;
	                                                var x = v.x,
	                                                    y = v.y,
	                                                    z = v.z;

	                                                te[0] *= x;te[4] *= y;te[8] *= z;
	                                                te[1] *= x;te[5] *= y;te[9] *= z;
	                                                te[2] *= x;te[6] *= y;te[10] *= z;
	                                                te[3] *= x;te[7] *= y;te[11] *= z;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "compose",
	                                    value: function compose(position, quaternion, scale) {

	                                                this.makeRotationFromQuaternion(quaternion);
	                                                this.scale(scale);
	                                                this.setPosition(position);

	                                                return this;
	                                    }
	                        }, {
	                                    key: "decompose",
	                                    value: function decompose(position, quaternion, scale) {

	                                                var vector = new Bonnie3D.Vector3();
	                                                var matrix = new Bonnie3D.Matrix4();

	                                                var te = this.elements;

	                                                var sx = vector.set(te[0], te[1], te[2]).length();
	                                                var sy = vector.set(te[4], te[5], te[6]).length();
	                                                var sz = vector.set(te[8], te[9], te[10]).length();

	                                                // if determine is negative, we need to invert one scale
	                                                var det = this.determinant();
	                                                if (det < 0) sx = -sx;

	                                                position.x = te[12];
	                                                position.y = te[13];
	                                                position.z = te[14];

	                                                // scale the rotation part
	                                                matrix.copy(this);

	                                                var invSX = 1 / sx;
	                                                var invSY = 1 / sy;
	                                                var invSZ = 1 / sz;

	                                                matrix.elements[0] *= invSX;
	                                                matrix.elements[1] *= invSX;
	                                                matrix.elements[2] *= invSX;

	                                                matrix.elements[4] *= invSY;
	                                                matrix.elements[5] *= invSY;
	                                                matrix.elements[6] *= invSY;

	                                                matrix.elements[8] *= invSZ;
	                                                matrix.elements[9] *= invSZ;
	                                                matrix.elements[10] *= invSZ;

	                                                quaternion.setFromRotationMatrix(matrix);

	                                                scale.x = sx;
	                                                scale.y = sy;
	                                                scale.z = sz;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "extractRotation",
	                                    value: function extractRotation() {}
	                        }, {
	                                    key: "makePerspective",
	                                    value: function makePerspective(left, right, top, bottom, near, far) {

	                                                var x = 2 * near / (right - left);
	                                                var y = 2 * near / (top - bottom);

	                                                var a = (right + left) / (right - left);
	                                                var b = (top + bottom) / (top - bottom);
	                                                var c = -(far + near) / (far - near);
	                                                var d = -2 * far * near / (far - near);

	                                                this.elements[0] = x;this.elements[4] = 0;this.elements[8] = a;this.elements[12] = 0;
	                                                this.elements[1] = 0;this.elements[5] = y;this.elements[9] = b;this.elements[13] = 0;
	                                                this.elements[2] = 0;this.elements[6] = 0;this.elements[10] = c;this.elements[14] = d;
	                                                this.elements[3] = 0;this.elements[7] = 0;this.elements[11] = -1;this.elements[15] = 0;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "determinant",
	                                    value: function determinant() {

	                                                var te = this.elements;

	                                                var n11 = te[0],
	                                                    n12 = te[4],
	                                                    n13 = te[8],
	                                                    n14 = te[12];
	                                                var n21 = te[1],
	                                                    n22 = te[5],
	                                                    n23 = te[9],
	                                                    n24 = te[13];
	                                                var n31 = te[2],
	                                                    n32 = te[6],
	                                                    n33 = te[10],
	                                                    n34 = te[14];
	                                                var n41 = te[3],
	                                                    n42 = te[7],
	                                                    n43 = te[11],
	                                                    n44 = te[15];

	                                                //TODO: make this more efficient
	                                                //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

	                                                return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
	                                    }
	                        }]);

	                        return Matrix4;
	            }();

	            Bonnie3D.Matrix4 = Matrix4;
	})(undefined);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var Plane = function Plane(normal, constant) {
	        _classCallCheck(this, Plane);

	        this.normal = normal !== undefined ? normal : new Bonnie3D.Vector3(1, 0, 0);
	        this.constant = constant !== undefined ? constant : 0;
	    };

	    Bonnie3D.Plane = Plane;
	})(undefined);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Quaternion = function () {
	                        function Quaternion(x, y, z, w) {
	                                    _classCallCheck(this, Quaternion);

	                                    this._x = x || 0;
	                                    this._y = y || 0;
	                                    this._z = z || 0;
	                                    this._w = w !== undefined ? w : 1;

	                                    this._onChangeCallback = function () {};
	                        }

	                        _createClass(Quaternion, [{
	                                    key: 'set',
	                                    value: function set(x, y, z, w) {

	                                                this._x = x;
	                                                this._y = y;
	                                                this._z = z;
	                                                this._w = w;

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'setFromEuler',
	                                    value: function setFromEuler(euler, update) {

	                                                var x = euler.x,
	                                                    y = euler.y,
	                                                    z = euler.z,
	                                                    order = euler.order;

	                                                // http://www.mathworks.com/matlabcentral/fileexchange/
	                                                // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
	                                                //	content/SpinCalc.m

	                                                var cos = Math.cos;
	                                                var sin = Math.sin;

	                                                var c1 = cos(x / 2);
	                                                var c2 = cos(y / 2);
	                                                var c3 = cos(z / 2);

	                                                var s1 = sin(x / 2);
	                                                var s2 = sin(y / 2);
	                                                var s3 = sin(z / 2);

	                                                if (order === 'XYZ') {

	                                                            this._x = s1 * c2 * c3 + c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 - s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 + s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 - s1 * s2 * s3;
	                                                } else if (order === 'YXZ') {

	                                                            this._x = s1 * c2 * c3 + c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 - s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 - s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 + s1 * s2 * s3;
	                                                } else if (order === 'ZXY') {

	                                                            this._x = s1 * c2 * c3 - c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 + s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 + s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 - s1 * s2 * s3;
	                                                } else if (order === 'ZYX') {

	                                                            this._x = s1 * c2 * c3 - c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 + s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 - s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 + s1 * s2 * s3;
	                                                } else if (order === 'YZX') {

	                                                            this._x = s1 * c2 * c3 + c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 + s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 - s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 - s1 * s2 * s3;
	                                                } else if (order === 'XZY') {

	                                                            this._x = s1 * c2 * c3 - c1 * s2 * s3;
	                                                            this._y = c1 * s2 * c3 - s1 * c2 * s3;
	                                                            this._z = c1 * c2 * s3 + s1 * s2 * c3;
	                                                            this._w = c1 * c2 * c3 + s1 * s2 * s3;
	                                                }

	                                                if (update !== false) this._onChangeCallback();

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'onChange',
	                                    value: function onChange(callback) {

	                                                this._onChangeCallback = callback;

	                                                return this;
	                                    }
	                        }]);

	                        return Quaternion;
	            }();

	            Bonnie3D.Quaternion = Quaternion;
	})(undefined);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Vector2 = function () {
	                function Vector2(x, y, z) {
	                        _classCallCheck(this, Vector2);

	                        this.x = x || 0;
	                        this.y = y || 0;
	                }

	                _createClass(Vector2, [{
	                        key: "set",
	                        value: function set(x, y, z) {

	                                this.x = x;
	                                this.y = y;

	                                return this;
	                        }
	                }, {
	                        key: "multiplyScalar",
	                        value: function multiplyScalar(scalar) {

	                                this.x *= scalar;
	                                this.y *= scalar;

	                                return this;
	                        }
	                }, {
	                        key: "divideScalar",
	                        value: function divideScalar(scalar) {

	                                return this.multiplyScalar(1 / scalar);
	                        }
	                }, {
	                        key: "length",
	                        value: function length() {

	                                return Math.sqrt(this.x * this.x + this.y * this.y);
	                        }
	                }, {
	                        key: "normalize",
	                        value: function normalize() {

	                                return this.divideScalar(this.length());
	                        }
	                }]);

	                return Vector2;
	        }();

	        Bonnie3D.Vector2 = Vector2;
	})(undefined);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Vector3 = function () {
	                        function Vector3(x, y, z) {
	                                    _classCallCheck(this, Vector3);

	                                    this.x = x || 0;
	                                    this.y = y || 0;
	                                    this.z = z || 0;
	                        }

	                        _createClass(Vector3, [{
	                                    key: "set",
	                                    value: function set(x, y, z) {

	                                                this.x = x;
	                                                this.y = y;
	                                                this.z = z;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "copy",
	                                    value: function copy(v) {

	                                                this.x = v.x;
	                                                this.y = v.y;
	                                                this.z = v.z;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "clone",
	                                    value: function clone() {

	                                                return new Bonnie3D.Vector3(this.x, this.y, this.z);
	                                    }
	                        }, {
	                                    key: "applyToBufferAttribute",
	                                    value: function applyToBufferAttribute(attribute) {

	                                                var v1 = new Bonnie3D.Vector3();

	                                                for (var i = 0, l = attribute.count; i < l; i++) {

	                                                            v1.x = attribute.getX(i);
	                                                            v1.y = attribute.getY(i);
	                                                            v1.z = attribute.getZ(i);

	                                                            v1.applyMatrix3(this);

	                                                            attribute.setXYZ(i, v1.x, v1.y, v1.z);
	                                                }

	                                                return attribute;
	                                    }
	                        }, {
	                                    key: "applyMatrix3",
	                                    value: function applyMatrix3(m) {

	                                                var x = this.x,
	                                                    y = this.y,
	                                                    z = this.z;
	                                                var e = m.elements;

	                                                this.x = e[0] * x + e[3] * y + e[6] * z;
	                                                this.y = e[1] * x + e[4] * y + e[7] * z;
	                                                this.z = e[2] * x + e[5] * y + e[8] * z;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "applyMatrix4",
	                                    value: function applyMatrix4(m) {

	                                                var x = this.x,
	                                                    y = this.y,
	                                                    z = this.z;
	                                                var e = m.elements;

	                                                this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
	                                                this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
	                                                this.z = e[2] * x + e[6] * y + e[10] * z + e[14];
	                                                var w = e[3] * x + e[7] * y + e[11] * z + e[15];

	                                                return this.divideScalar(w);
	                                    }
	                        }, {
	                                    key: "applyQuaternion",
	                                    value: function applyQuaternion(q) {

	                                                var x = this.x,
	                                                    y = this.y,
	                                                    z = this.z;
	                                                var qx = q.x,
	                                                    qy = q.y,
	                                                    qz = q.z,
	                                                    qw = q.w;

	                                                // calculate quat * vector

	                                                var ix = qw * x + qy * z - qz * y;
	                                                var iy = qw * y + qz * x - qx * z;
	                                                var iz = qw * z + qx * y - qy * x;
	                                                var iw = -qx * x - qy * y - qz * z;

	                                                // calculate result * inverse quat

	                                                this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	                                                this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	                                                this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "setFromMatrixPosition",
	                                    value: function setFromMatrixPosition(m) {

	                                                return this.setFromMatrixColumn(m, 3);
	                                    }
	                        }, {
	                                    key: "setFromMatrixColumn",
	                                    value: function setFromMatrixColumn(m, index) {

	                                                return this.fromArray(m.elements, index * 4);
	                                    }
	                        }, {
	                                    key: "fromArray",
	                                    value: function fromArray(array, offset) {

	                                                if (offset === undefined) offset = 0;

	                                                this.x = array[offset];
	                                                this.y = array[offset + 1];
	                                                this.z = array[offset + 2];

	                                                return this;
	                                    }
	                        }, {
	                                    key: "multiplyScalar",
	                                    value: function multiplyScalar(scalar) {

	                                                this.x *= scalar;
	                                                this.y *= scalar;
	                                                this.z *= scalar;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "divideScalar",
	                                    value: function divideScalar(scalar) {

	                                                return this.multiplyScalar(1 / scalar);
	                                    }
	                        }, {
	                                    key: "length",
	                                    value: function length() {

	                                                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	                                    }
	                        }, {
	                                    key: "normalize",
	                                    value: function normalize() {

	                                                return this.divideScalar(this.length());
	                                    }
	                        }]);

	                        return Vector3;
	            }();

	            Bonnie3D.Vector3 = Vector3;
	})(undefined);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Vector4 = function () {
	                function Vector4(x, y, z, w) {
	                        _classCallCheck(this, Vector4);

	                        this.x = x || 0;
	                        this.y = y || 0;
	                        this.z = z || 0;
	                        this.w = w !== undefined ? w : 1;
	                }

	                _createClass(Vector4, [{
	                        key: "set",
	                        value: function set(x, y, z, w) {

	                                this.x = x;
	                                this.y = y;
	                                this.z = z;
	                                this.w = w;

	                                return this;
	                        }
	                }, {
	                        key: "applyToBufferAttribute",
	                        value: function applyToBufferAttribute(attribute) {

	                                var v1 = new Bonnie3D.Vector3();

	                                for (var i = 0, l = attribute.count; i < l; i++) {

	                                        v1.x = attribute.getX(i);
	                                        v1.y = attribute.getY(i);
	                                        v1.z = attribute.getZ(i);

	                                        v1.applyMatrix4(this);

	                                        attribute.setXYZ(i, v1.x, v1.y, v1.z);
	                                }

	                                return attribute;
	                        }
	                }, {
	                        key: "applyMatrix4",
	                        value: function applyMatrix4(m) {

	                                var x = this.x,
	                                    y = this.y,
	                                    z = this.z,
	                                    w = this.w;
	                                var e = m.elements;

	                                this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
	                                this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
	                                this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
	                                this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;

	                                return this;
	                        }
	                }, {
	                        key: "multiplyScalar",
	                        value: function multiplyScalar(scalar) {

	                                this.x *= scalar;
	                                this.y *= scalar;
	                                this.z *= scalar;
	                                this.w *= scalar;

	                                return this;
	                        }
	                }, {
	                        key: "divideScalar",
	                        value: function divideScalar(scalar) {

	                                return this.multiplyScalar(1 / scalar);
	                        }
	                }, {
	                        key: "length",
	                        value: function length() {

	                                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	                        }
	                }, {
	                        key: "normalize",
	                        value: function normalize() {

	                                return this.divideScalar(this.length());
	                        }
	                }, {
	                        key: "copy",
	                        value: function copy(v) {

	                                this.x = v.x;
	                                this.y = v.y;
	                                this.z = v.z;
	                                this.w = v.w !== undefined ? v.w : 1;

	                                return this;
	                        }
	                }]);

	                return Vector4;
	        }();

	        Bonnie3D.Vector4 = Vector4;
	})(undefined);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Object = function () {
	                        function Object() {
	                                    _classCallCheck(this, Object);

	                                    this._uuid = Bonnie3D.Math.generateUUID();
	                                    this._name = "";
	                        }

	                        _createClass(Object, [{
	                                    key: 'toJSON',
	                                    value: function toJSON(meta) {

	                                                // meta is '' when called from JSON.stringify
	                                                var isRootObject = meta === undefined || meta === '';

	                                                var output = {};

	                                                // meta is a hash used to collect geometries, materials.
	                                                // not providing it implies that this is the root object
	                                                // being serialized.
	                                                if (isRootObject) {

	                                                            // initialize meta obj
	                                                            meta = {
	                                                                        geometries: {},
	                                                                        materials: {},
	                                                                        textures: {},
	                                                                        images: {}
	                                                            };

	                                                            output.metadata = {
	                                                                        version: 4.5,
	                                                                        type: 'Object',
	                                                                        generator: 'Object.toJSON'
	                                                            };
	                                                }

	                                                // standard Object3D serialization

	                                                var object = {};

	                                                object.uuid = this._uuid;

	                                                if (this.name !== '') object.name = this._name;

	                                                output.object = object;

	                                                return output;
	                                    }
	                        }, {
	                                    key: 'id',
	                                    get: function get() {

	                                                return this._uuid;
	                                    }
	                        }, {
	                                    key: 'name',
	                                    set: function set(name) {

	                                                this._name = name;
	                                    },
	                                    get: function get() {

	                                                return this._name;
	                                    }
	                        }]);

	                        return Object;
	            }();

	            Bonnie3D.Object = Object;
	})(undefined);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Application = function () {
	                function Application() {
	                        _classCallCheck(this, Application);

	                        this._paused = true;
	                        this._intervalId = 0;
	                }

	                _createClass(Application, [{
	                        key: "onStart",
	                        value: function onStart() {

	                                this._paused = false;
	                        }
	                }, {
	                        key: "onStop",
	                        value: function onStop() {

	                                this._paused = true;
	                        }
	                }, {
	                        key: "_mainLoop",
	                        value: function _mainLoop() {

	                                var callback = function callback() {

	                                        if (!Application.isPlaying) {

	                                                //do main loop
	                                                if (Bonnie3D.SceneManager.currentScene) {

	                                                        var scene = Bonnie3D.SceneManager.currentScene;
	                                                        scene.update();
	                                                        scene.render();
	                                                }

	                                                var app = Application.getInstance();

	                                                if (app._intervalId) {

	                                                        window.cancelAnimationFrame(app._intervalId);
	                                                }

	                                                app._intervalId = window.requestAnimationFrame(callback);
	                                        }
	                                };

	                                this._intervalId = window.requestAnimationFrame(callback);
	                        }
	                }, {
	                        key: "_stopLoop",
	                        value: function _stopLoop() {

	                                if (this._intervalId) {

	                                        window.cancelAnimationFrame(this._intervalId);
	                                }
	                        }
	                }, {
	                        key: "_isPlaying",
	                        get: function get() {

	                                return this._paused;
	                        }
	                }], [{
	                        key: "getInstance",
	                        value: function getInstance() {

	                                if (!Application._instance) {

	                                        Application._instance = new Application();
	                                }

	                                return Application._instance;
	                        }
	                }, {
	                        key: "run",
	                        value: function run() {

	                                if (Application.isPlaying) {

	                                        Application.getInstance().onStart();
	                                        Application.getInstance()._mainLoop();
	                                }
	                        }
	                }, {
	                        key: "exit",
	                        value: function exit() {

	                                if (!Application.isPlaying) {

	                                        Application.getInstance().onStop();
	                                        Application.getInstance()._stopLoop();
	                                }
	                        }
	                }, {
	                        key: "isPlaying",
	                        get: function get() {

	                                return Application.getInstance()._isPlaying;
	                        }
	                }]);

	                return Application;
	        }();

	        Bonnie3D.Application = Application;
	})(undefined);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var BufferAttribute = function (_Bonnie3D$Object) {
	                _inherits(BufferAttribute, _Bonnie3D$Object);

	                function BufferAttribute(array, itemSize, normalized, arrayType) {
	                        _classCallCheck(this, BufferAttribute);

	                        var _this = _possibleConstructorReturn(this, (BufferAttribute.__proto__ || Object.getPrototypeOf(BufferAttribute)).call(this));

	                        _this._array = arrayType !== undefined ? new arrayType(array) : array;
	                        _this._itemSize = itemSize;
	                        _this._count = array !== undefined ? array.length / itemSize : 0;
	                        _this._normalized = normalized === true;

	                        _this._dynamic = false;
	                        _this._updateRange = { offset: 0, count: -1 };

	                        _this._onUploadCallback = function () {};

	                        return _this;
	                }

	                _createClass(BufferAttribute, [{
	                        key: "getX",
	                        value: function getX(index) {

	                                return this._array[index * this._itemSize];
	                        }
	                }, {
	                        key: "setX",
	                        value: function setX(index, x) {

	                                this._array[index * this._itemSize] = x;

	                                return this;
	                        }
	                }, {
	                        key: "getY",
	                        value: function getY(index) {

	                                return this._array[index * this._itemSize + 1];
	                        }
	                }, {
	                        key: "setY",
	                        value: function setY(index, y) {

	                                this._array[index * this._itemSize + 1] = y;

	                                return this;
	                        }
	                }, {
	                        key: "getZ",
	                        value: function getZ(index) {

	                                return this._array[index * this._itemSize + 2];
	                        }
	                }, {
	                        key: "setZ",
	                        value: function setZ(index, z) {

	                                this._array[index * this._itemSize + 2] = z;

	                                return this;
	                        }
	                }, {
	                        key: "getW",
	                        value: function getW(index) {

	                                return this._array[index * this._itemSize + 3];
	                        }
	                }, {
	                        key: "setW",
	                        value: function setW(index, w) {

	                                this._array[index * this._itemSize + 3] = w;

	                                return this;
	                        }
	                }, {
	                        key: "setXYZ",
	                        value: function setXYZ(index, x, y, z) {

	                                index *= this._itemSize;

	                                this._array[index + 0] = x;
	                                this._array[index + 1] = y;
	                                this._array[index + 2] = z;

	                                return this;
	                        }
	                }]);

	                return BufferAttribute;
	        }(Bonnie3D.Object);

	        Bonnie3D.BufferAttribute = BufferAttribute;
	})(undefined);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var Component = function (_Bonnie3D$Object) {
	                _inherits(Component, _Bonnie3D$Object);

	                function Component() {
	                        _classCallCheck(this, Component);

	                        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

	                        _this._node = null;

	                        return _this;
	                }

	                _createClass(Component, [{
	                        key: "node",
	                        set: function set(node) {

	                                this._node = node;
	                        },
	                        get: function get() {

	                                return this._node;
	                        }
	                }]);

	                return Component;
	        }(Bonnie3D.Object);

	        Bonnie3D.Component = Component;
	})(undefined);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var InstancedBufferAttribute = function (_Bonnie3D$BufferAttri) {
	        _inherits(InstancedBufferAttribute, _Bonnie3D$BufferAttri);

	        function InstancedBufferAttribute(array, itemSize, meshPerAttribute, arrayType) {
	            _classCallCheck(this, InstancedBufferAttribute);

	            var _this = _possibleConstructorReturn(this, (InstancedBufferAttribute.__proto__ || Object.getPrototypeOf(InstancedBufferAttribute)).call(this, array, itemSize, false, arrayType));

	            _this._meshPerAttribute = meshPerAttribute || 1;

	            return _this;
	        }

	        return InstancedBufferAttribute;
	    }(Bonnie3D.BufferAttribute);

	    Bonnie3D.InstancedBufferAttribute = InstancedBufferAttribute;
	})(undefined);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Layers = function (_Bonnie3D$Object) {
	        _inherits(Layers, _Bonnie3D$Object);

	        function Layers() {
	            _classCallCheck(this, Layers);

	            var _this = _possibleConstructorReturn(this, (Layers.__proto__ || Object.getPrototypeOf(Layers)).call(this));

	            _this._mask = 1 | 0;

	            return _this;
	        }

	        return Layers;
	    }(Bonnie3D.Object);

	    Bonnie3D.Layers = Layers;
	})(undefined);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Node = function (_Bonnie3D$Object) {
	                        _inherits(Node, _Bonnie3D$Object);

	                        function Node() {
	                                    _classCallCheck(this, Node);

	                                    var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

	                                    _this._parent = null;
	                                    _this._children = [];
	                                    _this._components = [];

	                                    _this._up = Node.DefaultUp.clone();

	                                    var position = new Bonnie3D.Vector3();
	                                    var rotation = new Bonnie3D.Euler();
	                                    var quaternion = new Bonnie3D.Quaternion();
	                                    var scale = new Bonnie3D.Vector3(1, 1, 1);

	                                    var onRotationChange = function onRotationChange() {

	                                                quaternion.setFromEuler(rotation, false);
	                                    };

	                                    var onQuaternionChange = function onQuaternionChange() {

	                                                rotation.setFromQuaternion(quaternion, undefined, false);
	                                    };

	                                    rotation.onChange(onRotationChange);
	                                    quaternion.onChange(onQuaternionChange);

	                                    _this._position = position;
	                                    _this._rotation = rotation;
	                                    _this._quaternion = quaternion;
	                                    _this._scale = scale;
	                                    _this._modelViewMatrix = new Bonnie3D.Matrix4();
	                                    _this._normalMatrix = new Bonnie3D.Matrix4();

	                                    _this._matrix = new Bonnie3D.Matrix4();
	                                    _this._matrixWorld = new Bonnie3D.Matrix4();

	                                    _this._matrixAutoUpdate = Node.DefaultMatrixAutoUpdate;
	                                    _this._matrixWorldNeedsUpdate = false;

	                                    _this._layers = new Bonnie3D.Layers();
	                                    _this._visible = true;

	                                    _this._castShadow = false;
	                                    _this._receiveShadow = false;

	                                    _this._frustumCulled = true;
	                                    _this._renderOrder = 0;

	                                    _this._userData = {};
	                                    return _this;
	                        }

	                        _createClass(Node, [{
	                                    key: "isEmptyNode",
	                                    value: function isEmptyNode() {
	                                                return false;
	                                    }
	                        }, {
	                                    key: "onBeforeRender",
	                                    value: function onBeforeRender() {}
	                        }, {
	                                    key: "onAfterRender",
	                                    value: function onAfterRender() {}
	                        }, {
	                                    key: "addChild",
	                                    value: function addChild(object) {

	                                                if (object === this) {

	                                                            Bonnie3D.Log.error("Bonnie3D.Node.addChild: node can't be added as a child of itself.", object);
	                                                            return this;
	                                                }

	                                                if (object instanceof Bonnie3D.Node) {

	                                                            if (object._parent !== null) {

	                                                                        object._parent.removeChild(object);
	                                                            }

	                                                            object._parent = this;
	                                                            //object.dispatchEvent( { type: 'added' } );

	                                                            this._children.push(object);
	                                                } else if (object instanceof Bonnie3D.Component) {

	                                                            if (object._node !== null) {

	                                                                        if (object._node._parent !== null) {

	                                                                                    object._node._parent.removeChild(object._node);
	                                                                        }
	                                                            } else {

	                                                                        object._node = new Bonnie3D.Node();
	                                                                        object._node.addComponent(object);
	                                                            }

	                                                            object._node._parent = this;

	                                                            this._children.push(object._node);
	                                                } else {

	                                                            Bonnie3D.Log.error("Bonnie3D.Node.addChild: child not an instance of Bonnie3D.Node or Bonnie3D.Component.", object);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "removeChild",
	                                    value: function removeChild(object) {

	                                                var index = this._children.indexOf(object);

	                                                if (index !== -1) {

	                                                            object._parent = null;

	                                                            this._children.splice(index, 1);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "getObjectById",
	                                    value: function getObjectById(id) {

	                                                return this.getObjectByProperty('id', id);
	                                    }
	                        }, {
	                                    key: "getObjectByName",
	                                    value: function getObjectByName(name) {

	                                                return this.getObjectByProperty('name', name);
	                                    }
	                        }, {
	                                    key: "getObjectByProperty",
	                                    value: function getObjectByProperty(name, value) {}
	                        }, {
	                                    key: "addComponent",
	                                    value: function addComponent(component) {

	                                                if (component instanceof Bonnie3D.Component) {

	                                                            if (component._node !== null) {

	                                                                        component._node.removeComponent(component);
	                                                            }

	                                                            component._node = this;

	                                                            this._components.push(component);
	                                                } else {

	                                                            Bonnie3D.Log.error("Bonnie3D.Node.addComponent: child not an instance of Bonnie3D.Component.", component);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "removeComponent",
	                                    value: function removeComponent(component) {

	                                                var index = this._components.indexOf(component);

	                                                if (index !== -1) {

	                                                            if (component._node.isEmptyNode()) {
	                                                                        component._node._parent.removeChild(component._node);
	                                                            }

	                                                            component._node = null;

	                                                            this._components.splice(index, 1);
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: "getComponentById",
	                                    value: function getComponentById(id) {

	                                                return this.getComponentByProperty('id', id);
	                                    }
	                        }, {
	                                    key: "getComponentByName",
	                                    value: function getComponentByName(name) {

	                                                return this.getComponentByProperty('name', name);
	                                    }
	                        }, {
	                                    key: "getComponentByProperty",
	                                    value: function getComponentByProperty(name, value) {}
	                        }, {
	                                    key: "getWorldPosition",
	                                    value: function getWorldPosition(optionalTarget) {
	                                                var result = optionalTarget || new Bonnie3D.ector3();

	                                                this.updateMatrixWorld(true);

	                                                return result.setFromMatrixPosition(this._matrixWorld);
	                                    }
	                        }, {
	                                    key: "getWorldQuaternion",
	                                    value: function getWorldQuaternion(optionalTarget) {

	                                                var position = new Bonnie3D.Vector3();
	                                                var scale = new Bonnie3D.Vector3();

	                                                var result = optionalTarget || new Bonnie3D.Quaternion();

	                                                this.updateMatrixWorld(true);

	                                                this._matrixWorld.decompose(position, result, scale);

	                                                return result;
	                                    }
	                        }, {
	                                    key: "getWorldRotation",
	                                    value: function getWorldRotation(optionalTarget) {

	                                                var quaternion = new Bonnie3D.Quaternion();

	                                                var result = optionalTarget || new Bonnie3D.Euler();

	                                                this.getWorldQuaternion(quaternion);

	                                                return result.setFromQuaternion(quaternion, this._rotation.order, false);
	                                    }
	                        }, {
	                                    key: "getWorldScale",
	                                    value: function getWorldScale(optionalTarget) {

	                                                var position = new Bonnie3D.Vector3();
	                                                var quaternion = new Bonnie3D.Quaternion();

	                                                var result = optionalTarget || new Bonnie3D.Vector3();

	                                                this.updateMatrixWorld(true);

	                                                this._matrixWorld.decompose(position, quaternion, result);

	                                                return result;
	                                    }
	                        }, {
	                                    key: "getWorldDirection",
	                                    value: function getWorldDirection(optionalTarget) {

	                                                var quaternion = new Bonnie3D.Quaternion();

	                                                var result = optionalTarget || new Bonnie3D.Vector3();

	                                                this.getWorldQuaternion(quaternion);

	                                                return result.set(0, 0, 1).applyQuaternion(quaternion);
	                                    }
	                        }, {
	                                    key: "updateMatrix",
	                                    value: function updateMatrix() {

	                                                this._matrix.compose(this._position, this._quaternion, this._scale);

	                                                this._matrixWorldNeedsUpdate = true;
	                                    }
	                        }, {
	                                    key: "updateMatrixWorld",
	                                    value: function updateMatrixWorld(force) {

	                                                if (this._matrixAutoUpdate) this.updateMatrix();

	                                                if (this._matrixWorldNeedsUpdate || force) {

	                                                            if (this.parent === null) {

	                                                                        this._matrixWorld.copy(this._matrix);
	                                                            } else {

	                                                                        this._matrixWorld.multiplyMatrices(this.parent._matrixWorld, this._matrix);
	                                                            }

	                                                            this._matrixWorldNeedsUpdate = false;

	                                                            force = true;
	                                                }

	                                                // update children

	                                                var children = this._children;

	                                                for (var i = 0, l = children.length; i < l; i++) {

	                                                            children[i].updateMatrixWorld(force);
	                                                }
	                                    }
	                        }, {
	                                    key: "parent",
	                                    get: function get() {
	                                                return this._parent;
	                                    }
	                        }, {
	                                    key: "position",
	                                    get: function get() {

	                                                return this._position;
	                                    }
	                        }, {
	                                    key: "matrixWorld",
	                                    get: function get() {
	                                                return this._matrixWorld;
	                                    }
	                        }, {
	                                    key: "modelViewMatrix",
	                                    get: function get() {
	                                                return this._modelViewMatrix;
	                                    }
	                        }]);

	                        return Node;
	            }(Bonnie3D.Object);

	            Node.DefaultUp = new Bonnie3D.Vector3(0, 1, 0);
	            Node.DefaultMatrixAutoUpdate = true;

	            Bonnie3D.Node = Node;
	})(undefined);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var BasicCamera = function (_Bonnie3D$Component) {
	        _inherits(BasicCamera, _Bonnie3D$Component);

	        function BasicCamera() {
	            _classCallCheck(this, BasicCamera);

	            var _this = _possibleConstructorReturn(this, (BasicCamera.__proto__ || Object.getPrototypeOf(BasicCamera)).call(this));

	            _this.matrixWorldInverse = new Bonnie3D.Matrix4();
	            _this.projectionMatrix = new Bonnie3D.Matrix4();

	            return _this;
	        }

	        return BasicCamera;
	    }(Bonnie3D.Component);

	    Bonnie3D.BasicCamera = BasicCamera;
	})(undefined);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Camera = function (_Bonnie3D$BasicCamera) {
	                        _inherits(Camera, _Bonnie3D$BasicCamera);

	                        function Camera(fov, aspect, near, far) {
	                                    _classCallCheck(this, Camera);

	                                    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

	                                    _this._fov = fov !== undefined ? fov : 50;
	                                    _this._zoom = 1;

	                                    _this._near = near !== undefined ? near : 0.1;
	                                    _this._far = far !== undefined ? far : 2000;
	                                    _this._focus = 10;

	                                    _this._aspect = aspect !== undefined ? aspect : 1;
	                                    _this._view = null;

	                                    _this._filmGauge = 35; // width of the film (default in millimeters)
	                                    _this._filmOffset = 0; // horizontal film offset (same unit as gauge)

	                                    _this.updateProjectionMatrix();

	                                    return _this;
	                        }

	                        _createClass(Camera, [{
	                                    key: "getEffectiveFOV",
	                                    value: function getEffectiveFOV() {

	                                                return Bonnie3D.Math.RAD2DEG * 2 * Math.atan(Math.tan(Bonnie3D.Math.DEG2RAD * 0.5 * this._fov) / this._zoom);
	                                    }
	                        }, {
	                                    key: "setViewOffset",


	                                    /**
	                                     * Sets an offset in a larger frustum. This is useful for multi-window or
	                                     * multi-monitor/multi-machine setups.
	                                     *
	                                     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	                                     * the monitors are in grid like this
	                                     *
	                                     *   +---+---+---+
	                                     *   | A | B | C |
	                                     *   +---+---+---+
	                                     *   | D | E | F |
	                                     *   +---+---+---+
	                                     *
	                                     * then for each monitor you would call it like this
	                                     *
	                                     *   let w = 1920;
	                                     *   let h = 1080;
	                                     *   let fullWidth = w * 3;
	                                     *   let fullHeight = h * 2;
	                                     *
	                                     *   --A--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	                                     *   --B--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	                                     *   --C--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	                                     *   --D--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	                                     *   --E--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	                                     *   --F--
	                                     *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	                                     *
	                                     *   Note there is no reason monitors have to be the same size or in a grid.
	                                     */
	                                    value: function setViewOffset(fullWidth, fullHeight, x, y, width, height) {

	                                                this._aspect = fullWidth / fullHeight;

	                                                this._view = {
	                                                            fullWidth: fullWidth,
	                                                            fullHeight: fullHeight,
	                                                            offsetX: x,
	                                                            offsetY: y,
	                                                            width: width,
	                                                            height: height
	                                                };

	                                                this.updateProjectionMatrix();
	                                    }
	                        }, {
	                                    key: "clearViewOffset",
	                                    value: function clearViewOffset() {

	                                                this._view = null;
	                                                this.updateProjectionMatrix();
	                                    }
	                        }, {
	                                    key: "updateProjectionMatrix",
	                                    value: function updateProjectionMatrix() {
	                                                var near = this._near,
	                                                    top = near * Math.tan(Bonnie3D.Math.DEG2RAD * 0.5 * this._fov) / this._zoom,
	                                                    height = 2 * top,
	                                                    width = this._aspect * height,
	                                                    left = -0.5 * width,
	                                                    view = this._view;

	                                                if (view !== null) {

	                                                            var fullWidth = view.fullWidth,
	                                                                fullHeight = view.fullHeight;

	                                                            left += view.offsetX * width / fullWidth;
	                                                            top -= view.offsetY * height / fullHeight;
	                                                            width *= view.width / fullWidth;
	                                                            height *= view.height / fullHeight;
	                                                }

	                                                var skew = this._filmOffset;
	                                                if (skew !== 0) left += near * skew / this.filmWidth;

	                                                this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this._far);
	                                    }
	                        }, {
	                                    key: "focalLength",
	                                    set: function set(focalLength) {

	                                                // see http://www.bobatkins.com/photography/technical/field_of_view.html
	                                                var vExtentSlope = 0.5 * this.filmHeight / focalLength;

	                                                this._fov = Bonnie3D.Math.RAD2DEG * 2 * Math.atan(vExtentSlope);
	                                                this.updateProjectionMatrix();
	                                    },
	                                    get: function get() {

	                                                var vExtentSlope = Math.tan(Bonnie3D.Math.DEG2RAD * 0.5 * this._fov);

	                                                return 0.5 * this.filmHeight / vExtentSlope;
	                                    }
	                        }, {
	                                    key: "filmWidth",
	                                    get: function get() {

	                                                // film not completely covered in portrait format (aspect < 1)
	                                                return this._filmGauge * Math.min(this._aspect, 1);
	                                    }
	                        }, {
	                                    key: "filmHeight",
	                                    get: function get() {

	                                                // film not completely covered in landscape format (aspect > 1)
	                                                return this._filmGauge / Math.max(this._aspect, 1);
	                                    }
	                        }]);

	                        return Camera;
	            }(Bonnie3D.BasicCamera);

	            Bonnie3D.Camera = Camera;
	})(undefined);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var ArrayCamera = function (_Bonnie3D$Camera) {
	        _inherits(ArrayCamera, _Bonnie3D$Camera);

	        function ArrayCamera() {
	            _classCallCheck(this, ArrayCamera);

	            return _possibleConstructorReturn(this, (ArrayCamera.__proto__ || Object.getPrototypeOf(ArrayCamera)).call(this));
	        }

	        return ArrayCamera;
	    }(Bonnie3D.Camera);

	    Bonnie3D.ArrayCamera = ArrayCamera;
	})(undefined);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Geometry = function (_Bonnie3D$Object) {
	                        _inherits(Geometry, _Bonnie3D$Object);

	                        function Geometry() {
	                                    _classCallCheck(this, Geometry);

	                                    var _this = _possibleConstructorReturn(this, (Geometry.__proto__ || Object.getPrototypeOf(Geometry)).call(this));

	                                    _this._id = Bonnie3D.Geometry.countId++;

	                                    _this._vertices = [];
	                                    _this._colors = [];
	                                    _this._faces = [];
	                                    _this._faceVertexUvs = [[]];

	                                    _this._morphTargets = [];
	                                    _this._morphNormals = [];

	                                    _this._skinWeights = [];
	                                    _this._skinIndices = [];

	                                    _this._lineDistances = [];

	                                    _this._boundingBox = null;
	                                    _this._boundingSphere = null;

	                                    // update flags

	                                    _this._elementsNeedUpdate = false;
	                                    _this._verticesNeedUpdate = false;
	                                    _this._uvsNeedUpdate = false;
	                                    _this._normalsNeedUpdate = false;
	                                    _this._colorsNeedUpdate = false;
	                                    _this._lineDistancesNeedUpdate = false;
	                                    _this._groupsNeedUpdate = false;
	                                    return _this;
	                        }

	                        _createClass(Geometry, [{
	                                    key: "applyMatrix",
	                                    value: function applyMatrix(matrix) {

	                                                var normalMatrix = new Bonnie3D.Matrix3().getNormalMatrix(matrix);

	                                                for (var _i = 0, _il = this._vertices.length; _i < _il; _i++) {

	                                                            var vertex = this._vertices[_i];
	                                                            vertex.applyMatrix4(matrix);
	                                                }

	                                                for (var i = 0, il = this._faces.length; i < il; i++) {

	                                                            var face = this._faces[i];
	                                                            face.normal.applyMatrix3(normalMatrix).normalize();

	                                                            for (var j = 0, jl = face.vertexNormals.length; j < jl; j++) {

	                                                                        face.vertexNormals[j].applyMatrix3(normalMatrix).normalize();
	                                                            }
	                                                }

	                                                if (this._boundingBox !== null) {

	                                                            this.computeBoundingBox();
	                                                }

	                                                if (this._boundingSphere !== null) {

	                                                            this.computeBoundingSphere();
	                                                }

	                                                this._verticesNeedUpdate = true;
	                                                this._normalsNeedUpdate = true;

	                                                return this;
	                                    }
	                        }, {
	                                    key: "computeBoundingBox",
	                                    value: function computeBoundingBox() {}
	                        }, {
	                                    key: "computeBoundingSphere",
	                                    value: function computeBoundingSphere() {}
	                        }]);

	                        return Geometry;
	            }(Bonnie3D.Object);

	            Geometry.countId = 0;

	            Bonnie3D.Geometry = Geometry;
	})(undefined);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var BoxGeometry = function (_Bonnie3D$Geometry) {
	        _inherits(BoxGeometry, _Bonnie3D$Geometry);

	        function BoxGeometry() {
	            _classCallCheck(this, BoxGeometry);

	            return _possibleConstructorReturn(this, (BoxGeometry.__proto__ || Object.getPrototypeOf(BoxGeometry)).apply(this, arguments));
	        }

	        return BoxGeometry;
	    }(Bonnie3D.Geometry);

	    Bonnie3D.BoxGeometry = BoxGeometry;
	})(undefined);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var BufferGeometry = function (_Bonnie3D$Object) {
	                        _inherits(BufferGeometry, _Bonnie3D$Object);

	                        function BufferGeometry() {
	                                    _classCallCheck(this, BufferGeometry);

	                                    var _this = _possibleConstructorReturn(this, (BufferGeometry.__proto__ || Object.getPrototypeOf(BufferGeometry)).call(this));

	                                    _this._index = null;
	                                    _this._attributes = {};

	                                    _this._morphAttributes = {};

	                                    _this._groups = [];

	                                    _this._boundingBox = null;
	                                    _this._boundingSphere = null;

	                                    _this._drawRange = { start: 0, count: Infinity };
	                                    return _this;
	                        }

	                        _createClass(BufferGeometry, [{
	                                    key: 'addAttribute',
	                                    value: function addAttribute(name) {
	                                                for (var _len = arguments.length, attribute = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                                                            attribute[_key - 1] = arguments[_key];
	                                                }

	                                                if (!(attribute[0] instanceof Bonnie3D.BufferAttribute) && !(attribute[0] instanceof Bonnie3D.InterleavedBufferAttribute)) {

	                                                            Bonnie3D.Log.warning('Bonnie3D.BufferGeometry: .addAttribute() now expects ( name, attribute ).');

	                                                            this.addAttribute(name, new (Function.prototype.bind.apply(Bonnie3D.BufferAttribute, [null].concat(attribute)))());

	                                                            return;
	                                                }

	                                                if (name === 'index') {

	                                                            Bonnie3D.Log.warning('Bonnie3D.BufferGeometry.addAttribute: Use .set index() for index attribute.');
	                                                            this.index = attribute[0];

	                                                            return;
	                                                }

	                                                this._attributes[name] = attribute[0];

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'getAttribute',
	                                    value: function getAttribute(name) {

	                                                return this._attributes[name];
	                                    }
	                        }, {
	                                    key: 'removeAttribute',
	                                    value: function removeAttribute(name) {

	                                                delete this._attributes[name];

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'addGroup',
	                                    value: function addGroup(start, count, materialIndex) {

	                                                this._groups.push({

	                                                            start: start,
	                                                            count: count,
	                                                            materialIndex: materialIndex !== undefined ? materialIndex : 0

	                                                });
	                                    }
	                        }, {
	                                    key: 'clearGroups',
	                                    value: function clearGroups() {

	                                                this.groups = [];
	                                    }
	                        }, {
	                                    key: 'setDrawRange',
	                                    value: function setDrawRange(start, count) {

	                                                this._drawRange.start = start;
	                                                this._drawRange.count = count;
	                                    }
	                        }, {
	                                    key: 'applyMatrix',
	                                    value: function applyMatrix(matrix) {

	                                                var position = this._attributes.position;

	                                                if (position !== undefined) {

	                                                            matrix.applyToBufferAttribute(position);
	                                                            position.needsUpdate = true;
	                                                }

	                                                var normal = this._attributes.normal;

	                                                if (normal !== undefined) {

	                                                            var normalMatrix = new Bonnie3D.Matrix3().getNormalMatrix(matrix);

	                                                            normalMatrix.applyToBufferAttribute(normal);
	                                                            normal.needsUpdate = true;
	                                                }

	                                                if (this._boundingBox !== null) {

	                                                            this.computeBoundingBox();
	                                                }

	                                                if (this._boundingSphere !== null) {

	                                                            this.computeBoundingSphere();
	                                                }

	                                                return this;
	                                    }
	                        }, {
	                                    key: 'computeBoundingBox',
	                                    value: function computeBoundingBox() {}
	                        }, {
	                                    key: 'computeBoundingSphere',
	                                    value: function computeBoundingSphere() {}
	                        }, {
	                                    key: 'index',
	                                    get: function get() {

	                                                return this._index;
	                                    },
	                                    set: function set(index) {

	                                                if (index instanceof Array) {

	                                                            if (Bonnie3D.arrayMax(index) > 65535) {

	                                                                        this._index = new Bonnie3D.BufferAttribute(index, 1, false, Uint32Array);
	                                                            } else {

	                                                                        this._index = new Bonnie3D.BufferAttribute(index, 1, false, Uint16Array);
	                                                            }
	                                                } else {

	                                                            this._index = index;
	                                                }
	                                    }
	                        }]);

	                        return BufferGeometry;
	            }(Bonnie3D.Object);

	            BufferGeometry.MaxIndex = 65535;

	            Bonnie3D.BufferGeometry = BufferGeometry;
	})(undefined);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	                var BoxBufferGeometry = function (_Bonnie3D$BufferGeome) {
	                                _inherits(BoxBufferGeometry, _Bonnie3D$BufferGeome);

	                                function BoxBufferGeometry(width, height, depth, widthSegments, heightSegments, depthSegments) {
	                                                _classCallCheck(this, BoxBufferGeometry);

	                                                var _this = _possibleConstructorReturn(this, (BoxBufferGeometry.__proto__ || Object.getPrototypeOf(BoxBufferGeometry)).call(this));

	                                                var scope = _this;

	                                                // segments

	                                                widthSegments = Math.floor(widthSegments) || 1;
	                                                heightSegments = Math.floor(heightSegments) || 1;
	                                                depthSegments = Math.floor(depthSegments) || 1;

	                                                // buffers

	                                                var indices = [];
	                                                var vertices = [];
	                                                var normals = [];
	                                                var uvs = [];

	                                                // helper variables

	                                                var numberOfVertices = 0;
	                                                var groupStart = 0;

	                                                // build each side of the box geometry

	                                                var buildPlane = function buildPlane(u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex) {

	                                                                var segmentWidth = width / gridX;
	                                                                var segmentHeight = height / gridY;

	                                                                var widthHalf = width / 2;
	                                                                var heightHalf = height / 2;
	                                                                var depthHalf = depth / 2;

	                                                                var gridX1 = gridX + 1;
	                                                                var gridY1 = gridY + 1;

	                                                                var vertexCounter = 0;
	                                                                var groupCount = 0;

	                                                                var ix = void 0,
	                                                                    iy = void 0;

	                                                                var vector = new Bonnie3D.Vector3();

	                                                                // generate vertices, normals and uvs

	                                                                for (iy = 0; iy < gridY1; iy++) {

	                                                                                var y = iy * segmentHeight - heightHalf;

	                                                                                for (ix = 0; ix < gridX1; ix++) {

	                                                                                                var x = ix * segmentWidth - widthHalf;

	                                                                                                // set values to correct vector component

	                                                                                                vector[u] = x * udir;
	                                                                                                vector[v] = y * vdir;
	                                                                                                vector[w] = depthHalf;

	                                                                                                // now apply vector to vertex buffer

	                                                                                                vertices.push(vector.x, vector.y, vector.z);

	                                                                                                // set values to correct vector component

	                                                                                                vector[u] = 0;
	                                                                                                vector[v] = 0;
	                                                                                                vector[w] = depth > 0 ? 1 : -1;

	                                                                                                // now apply vector to normal buffer

	                                                                                                normals.push(vector.x, vector.y, vector.z);

	                                                                                                // uvs

	                                                                                                uvs.push(ix / gridX);
	                                                                                                uvs.push(1 - iy / gridY);

	                                                                                                // counters

	                                                                                                vertexCounter += 1;
	                                                                                }
	                                                                }

	                                                                // indices

	                                                                // 1. you need three indices to draw a single face
	                                                                // 2. a single segment consists of two faces
	                                                                // 3. so we need to generate six (2*3) indices per segment

	                                                                for (iy = 0; iy < gridY; iy++) {

	                                                                                for (ix = 0; ix < gridX; ix++) {

	                                                                                                var a = numberOfVertices + ix + gridX1 * iy;
	                                                                                                var b = numberOfVertices + ix + gridX1 * (iy + 1);
	                                                                                                var c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
	                                                                                                var d = numberOfVertices + (ix + 1) + gridX1 * iy;

	                                                                                                // faces

	                                                                                                indices.push(a, b, d);
	                                                                                                indices.push(b, c, d);

	                                                                                                // increase counter

	                                                                                                groupCount += 6;
	                                                                                }
	                                                                }

	                                                                // add a group to the geometry. this will ensure multi material support

	                                                                scope.addGroup(groupStart, groupCount, materialIndex);

	                                                                // calculate new start value for groups

	                                                                groupStart += groupCount;

	                                                                // update total number of vertices

	                                                                numberOfVertices += vertexCounter;
	                                                };

	                                                buildPlane('z', 'y', 'x', -1, -1, depth, height, width, depthSegments, heightSegments, 0); // px
	                                                buildPlane('z', 'y', 'x', 1, -1, depth, height, -width, depthSegments, heightSegments, 1); // nx
	                                                buildPlane('x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2); // py
	                                                buildPlane('x', 'z', 'y', 1, -1, width, depth, -height, widthSegments, depthSegments, 3); // ny
	                                                buildPlane('x', 'y', 'z', 1, -1, width, height, depth, widthSegments, heightSegments, 4); // pz
	                                                buildPlane('x', 'y', 'z', -1, -1, width, height, -depth, widthSegments, heightSegments, 5); // nz

	                                                // build geometry

	                                                _this.index = indices;
	                                                _this.addAttribute('position', new Bonnie3D.BufferAttribute(vertices, 3, false, Float32Array));
	                                                _this.addAttribute('normal', new Bonnie3D.BufferAttribute(normals, 3, false, Float32Array));
	                                                _this.addAttribute('uv', new Bonnie3D.BufferAttribute(uvs, 2, false, Float32Array));

	                                                return _this;
	                                }

	                                return BoxBufferGeometry;
	                }(Bonnie3D.BufferGeometry);

	                Bonnie3D.BoxBufferGeometry = BoxBufferGeometry;
	})(undefined);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var PlaneBufferGeometry = function (_Bonnie3D$Geometry) {
	        _inherits(PlaneBufferGeometry, _Bonnie3D$Geometry);

	        function PlaneBufferGeometry() {
	            _classCallCheck(this, PlaneBufferGeometry);

	            return _possibleConstructorReturn(this, (PlaneBufferGeometry.__proto__ || Object.getPrototypeOf(PlaneBufferGeometry)).call(this));
	        }

	        return PlaneBufferGeometry;
	    }(Bonnie3D.Geometry);

	    Bonnie3D.PlaneBufferGeometry = PlaneBufferGeometry;
	})(undefined);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Cache = function () {
	                        function Cache() {
	                                    _classCallCheck(this, Cache);
	                        }

	                        _createClass(Cache, null, [{
	                                    key: 'add',
	                                    value: function add(key, file) {

	                                                if (Cache.enabled === false) return;

	                                                Bonnie3D.Log.debug('[Cache]', 'Adding key:', key);

	                                                Cache.files[key] = file;
	                                    }
	                        }, {
	                                    key: 'get',
	                                    value: function get(key) {

	                                                if (Cache.enabled === false) return;

	                                                Bonnie3D.Log.debug('[Cache]', 'Checking key:', key);

	                                                return Cache.files[key];
	                                    }
	                        }, {
	                                    key: 'remove',
	                                    value: function remove(key) {

	                                                delete Cache.files[key];
	                                    }
	                        }, {
	                                    key: 'clear',
	                                    value: function clear() {

	                                                Cache.files = {};
	                                    }
	                        }]);

	                        return Cache;
	            }();

	            Cache.enabled = false;
	            Cache.files = {};

	            Bonnie3D.Cache = Cache;
	})(undefined);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var ImageLoader = function () {
	                        function ImageLoader() {
	                                    _classCallCheck(this, ImageLoader);
	                        }

	                        _createClass(ImageLoader, null, [{
	                                    key: 'load',
	                                    value: function load(url, onLoad, onError) {

	                                                if (url === undefined) url = '';

	                                                if (ImageLoader.path !== undefined) url = ImageLoader.path + url;

	                                                var cached = Bonnie3D.Cache.get(url);

	                                                if (cached !== undefined) {

	                                                            Bonnie3D.LoadingManager.getInstance().itemStart(url);

	                                                            setTimeout(function () {

	                                                                        if (onLoad) onLoad(cached);

	                                                                        Bonnie3D.LoadingManager.getInstance().itemEnd(url);
	                                                            }, 0);

	                                                            return cached;
	                                                }

	                                                var image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');

	                                                image.addEventListener('load', function () {

	                                                            Bonnie3D.Cache.add(url, this);

	                                                            if (onLoad) onLoad(this);

	                                                            Bonnie3D.LoadingManager.getInstance().itemEnd(url);
	                                                }, false);

	                                                image.addEventListener('error', function (event) {

	                                                            if (onError) onError(event);

	                                                            Bonnie3D.LoadingManager.getInstance().itemEnd(url);
	                                                            Bonnie3D.LoadingManager.getInstance().itemError(url);
	                                                }, false);

	                                                if (url.substr(0, 5) !== 'data:') {

	                                                            if (ImageLoader.crossOrigin !== undefined) image.crossOrigin = ImageLoader.crossOrigin;
	                                                }

	                                                Bonnie3D.LoadingManager.getInstance().itemStart(url);

	                                                image.src = url;

	                                                return image;
	                                    }
	                        }]);

	                        return ImageLoader;
	            }();

	            Bonnie3D.ImageLoader = ImageLoader;
	})(undefined);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var LoadingManager = function () {
	                        function LoadingManager(onLoad, onProgress, onError) {
	                                    _classCallCheck(this, LoadingManager);

	                                    this._isLoading = false;
	                                    this._itemsLoaded = 0;
	                                    this._itemsTotal = 0;

	                                    this._onStart = undefined;
	                                    this._onLoad = onLoad;
	                                    this._onProgress = onProgress;
	                                    this._onError = onError;
	                        }

	                        _createClass(LoadingManager, [{
	                                    key: "itemStart",
	                                    value: function itemStart(url) {

	                                                this._itemsTotal++;

	                                                if (this._isLoading === false) {

	                                                            if (this._onStart !== undefined) {

	                                                                        this._onStart(url, this._itemsLoaded, this._itemsTotal);
	                                                            }
	                                                }

	                                                this._isLoading = true;
	                                    }
	                        }, {
	                                    key: "itemEnd",
	                                    value: function itemEnd(url) {

	                                                this._itemsLoaded++;

	                                                if (this._onProgress !== undefined) {

	                                                            this._onProgress(url, this._itemsLoaded, this._itemsTotal);
	                                                }

	                                                if (this._itemsLoaded === this._itemsTotal) {

	                                                            this._isLoading = false;

	                                                            if (this._onLoad !== undefined) {

	                                                                        this._onLoad();
	                                                            }
	                                                }
	                                    }
	                        }, {
	                                    key: "itemError",
	                                    value: function itemError(url) {

	                                                if (this._onError !== undefined) {

	                                                            this._onError(url);
	                                                }
	                                    }
	                        }], [{
	                                    key: "getInstance",
	                                    value: function getInstance() {

	                                                if (!LoadingManager._instance) {

	                                                            LoadingManager._instance = new LoadingManager();
	                                                }

	                                                return LoadingManager._instance;
	                                    }
	                        }]);

	                        return LoadingManager;
	            }();

	            Bonnie3D.LoadingManager = LoadingManager;
	})(undefined);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	                var TextureLoader = function () {
	                                function TextureLoader() {
	                                                _classCallCheck(this, TextureLoader);
	                                }

	                                _createClass(TextureLoader, null, [{
	                                                key: "load",
	                                                value: function load(url, onLoad, onProgress, onError) {
	                                                                Bonnie3D.ImageLoader.crossOrigin = TextureLoader.crossOrigin;
	                                                                Bonnie3D.ImageLoader.path = TextureLoader.path;

	                                                                var texture = new Bonnie3D.Texture();
	                                                                texture.image = Bonnie3D.ImageLoader.load(url, function () {

	                                                                                // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
	                                                                                var isJPEG = url.search(/\.(jpg|jpeg)$/) > 0 || url.search(/^data\:image\/jpeg/) === 0;

	                                                                                texture.format = isJPEG ? Bonnie3D.RGBFormat : Bonnie3D.RGBAFormat;
	                                                                                texture.needsUpdate = true;

	                                                                                if (onLoad !== undefined) {

	                                                                                                onLoad(texture);
	                                                                                }
	                                                                }, onProgress, onError);

	                                                                return texture;
	                                                }
	                                }]);

	                                return TextureLoader;
	                }();

	                Bonnie3D.TextureLoader = TextureLoader;
	})(undefined);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Material = function (_Bonnie3D$Object) {
	                        _inherits(Material, _Bonnie3D$Object);

	                        function Material() {
	                                    _classCallCheck(this, Material);

	                                    var _this = _possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).call(this));

	                                    _this._id = Bonnie3D.Material.materialId++;

	                                    _this._fog = true;
	                                    _this._lights = true;

	                                    _this._blending = Bonnie3D.NormalBlending;
	                                    _this._side = Bonnie3D.FrontSide;
	                                    _this._shading = Bonnie3D.SmoothShading; // Bonnie3D.FlatShading, Bonnie3D.SmoothShading
	                                    _this._vertexColors = Bonnie3D.NoColors; // Bonnie3D.NoColors, Bonnie3D.VertexColors, Bonnie3D.FaceColors

	                                    _this._opacity = 1;
	                                    _this._transparent = false;

	                                    _this._blendSrc = Bonnie3D.SrcAlphaFactor;
	                                    _this._blendDst = Bonnie3D.OneMinusSrcAlphaFactor;
	                                    _this._blendEquation = Bonnie3D.AddEquation;
	                                    _this._blendSrcAlpha = null;
	                                    _this._blendDstAlpha = null;
	                                    _this._blendEquationAlpha = null;

	                                    _this._depthFunc = Bonnie3D.LessEqualDepth;
	                                    _this._depthTest = true;
	                                    _this._depthWrite = true;

	                                    _this._clippingPlanes = null;
	                                    _this._clipIntersection = false;
	                                    _this._clipShadows = false;

	                                    _this._colorWrite = true;

	                                    _this._precision = null; // override the renderer's default precision for this material

	                                    _this._polygonOffset = false;
	                                    _this._polygonOffsetFactor = 0;
	                                    _this._polygonOffsetUnits = 0;

	                                    _this._dithering = false;

	                                    _this._alphaTest = 0;
	                                    _this._premultipliedAlpha = false;

	                                    _this._overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

	                                    _this._visible = true;

	                                    _this._needsUpdate = true;

	                                    return _this;
	                        }

	                        _createClass(Material, [{
	                                    key: "setValues",
	                                    value: function setValues(values) {

	                                                if (values === undefined) return;

	                                                for (var key in values) {

	                                                            var newValue = values[key];

	                                                            if (newValue === undefined) {

	                                                                        Bonnie3D.Log.warning("Bonnie3D.Material: '" + key + "' parameter is undefined.");
	                                                                        continue;
	                                                            }

	                                                            var currentValue = this["_" + key];

	                                                            if (currentValue === undefined) {

	                                                                        Bonnie3D.Log.warning("Bonnie3D." + this.type + ": '" + key + "' is not a property of this material.");
	                                                                        continue;
	                                                            }

	                                                            if (currentValue instanceof Bonnie3D.Color) {

	                                                                        currentValue.set(newValue);
	                                                            } else if (currentValue instanceof Bonnie3D.Vector3 && newValue instanceof Bonnie3D.Vector3) {

	                                                                        currentValue.copy(newValue);
	                                                            } else if (key === 'overdraw') {

	                                                                        // ensure overdraw is backwards-compatible with legacy boolean type
	                                                                        this["_" + key] = Number(newValue);
	                                                            } else {

	                                                                        this["_" + key] = newValue;
	                                                            }
	                                                }
	                                    }
	                        }]);

	                        return Material;
	            }(Bonnie3D.Object);

	            Material.materialId = 0;

	            Bonnie3D.Material = Material;
	})(undefined);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var MeshBasicMaterial = function (_Bonnie3D$Material) {
	                        _inherits(MeshBasicMaterial, _Bonnie3D$Material);

	                        function MeshBasicMaterial(parameters) {
	                                    _classCallCheck(this, MeshBasicMaterial);

	                                    var _this = _possibleConstructorReturn(this, (MeshBasicMaterial.__proto__ || Object.getPrototypeOf(MeshBasicMaterial)).call(this));

	                                    _this._color = new Bonnie3D.Color(0xffffff); // emissive

	                                    _this._map = null;

	                                    _this._lightMap = null;
	                                    _this._lightMapIntensity = 1.0;

	                                    _this._aoMap = null;
	                                    _this._aoMapIntensity = 1.0;

	                                    _this._specularMap = null;

	                                    _this._alphaMap = null;

	                                    _this._envMap = null;
	                                    _this._combine = Bonnie3D.MultiplyOperation;
	                                    _this._reflectivity = 1;
	                                    _this._refractionRatio = 0.98;

	                                    _this._wireframe = false;
	                                    _this._wireframeLinewidth = 1;
	                                    _this._wireframeLinecap = 'round';
	                                    _this._wireframeLinejoin = 'round';

	                                    _this._skinning = false;
	                                    _this._morphTargets = false;

	                                    _this._lights = false;

	                                    _this.setValues(parameters);

	                                    return _this;
	                        }

	                        return MeshBasicMaterial;
	            }(Bonnie3D.Material);

	            Bonnie3D.MeshBasicMaterial = MeshBasicMaterial;
	})(undefined);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var ShaderMaterial = function ShaderMaterial() {
	        _classCallCheck(this, ShaderMaterial);
	    };

	    Bonnie3D.ShaderMaterial = ShaderMaterial;
	})(undefined);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var Mesh = function (_Bonnie3D$Component) {
	                _inherits(Mesh, _Bonnie3D$Component);

	                function Mesh(geometry, material) {
	                        _classCallCheck(this, Mesh);

	                        var _this = _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this));

	                        _this._geometry = geometry !== undefined ? geometry : new Bonnie3D.BufferGeometry();
	                        _this._material = material !== undefined ? material : new Bonnie3D.MeshBasicMaterial({ color: Math.random() * 0xffffff });

	                        _this._drawMode = Bonnie3D.TrianglesDrawMode;

	                        _this.updateMorphTargets();

	                        return _this;
	                }

	                _createClass(Mesh, [{
	                        key: "updateMorphTargets",
	                        value: function updateMorphTargets() {}
	                }, {
	                        key: "geometry",
	                        get: function get() {
	                                return this._geometry;
	                        }
	                }, {
	                        key: "material",
	                        get: function get() {
	                                return this._material;
	                        }
	                }]);

	                return Mesh;
	        }(Bonnie3D.Component);

	        Bonnie3D.Mesh = Mesh;
	})(undefined);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var ShaderChunk = function ShaderChunk() {
	        _classCallCheck(this, ShaderChunk);
	    };

	    ShaderChunk.cube_frag = "";
	    ShaderChunk.cube_vert = "";

	    Bonnie3D.ShaderChunk = ShaderChunk;
	})(undefined);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var ShaderLib = function ShaderLib() {
	        _classCallCheck(this, ShaderLib);
	    };

	    ShaderLib.cube = {

	        uniforms: {
	            tCube: { value: null },
	            tFlip: { value: -1 },
	            opacity: { value: 1.0 }
	        },

	        vertexShader: Bonnie3D.ShaderChunk.cube_vert,
	        fragmentShader: Bonnie3D.ShaderChunk.cube_frag

	    }, Bonnie3D.ShaderLib = ShaderLib;
	})(undefined);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var LensFlarePlugin = function () {
	                function LensFlarePlugin() {
	                        _classCallCheck(this, LensFlarePlugin);
	                }

	                _createClass(LensFlarePlugin, [{
	                        key: "render",
	                        value: function render(scene, camera, viewport) {}
	                }]);

	                return LensFlarePlugin;
	        }();

	        Bonnie3D.LensFlarePlugin = LensFlarePlugin;
	})(undefined);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var SpritePlugin = function () {
	                function SpritePlugin() {
	                        _classCallCheck(this, SpritePlugin);
	                }

	                _createClass(SpritePlugin, [{
	                        key: "render",
	                        value: function render(scene, camera) {}
	                }]);

	                return SpritePlugin;
	        }();

	        Bonnie3D.SpritePlugin = SpritePlugin;
	})(undefined);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLAttributes = function WebGLAttributes() {
	        _classCallCheck(this, WebGLAttributes);
	    };

	    Bonnie3D.WebGLAttributes = WebGLAttributes;
	})(undefined);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLBufferRenderer = function WebGLBufferRenderer() {
	        _classCallCheck(this, WebGLBufferRenderer);
	    };

	    Bonnie3D.WebGLBufferRenderer = WebGLBufferRenderer;
	})(undefined);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLCapabilities = function WebGLCapabilities() {
	        _classCallCheck(this, WebGLCapabilities);
	    };

	    Bonnie3D.WebGLCapabilities = WebGLCapabilities;
	})(undefined);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var WebGLClipping = function () {
	                function WebGLClipping() {
	                        _classCallCheck(this, WebGLClipping);
	                }

	                _createClass(WebGLClipping, [{
	                        key: "init",
	                        value: function init() {}
	                }, {
	                        key: "beginShadows",
	                        value: function beginShadows() {}
	                }, {
	                        key: "endShadows",
	                        value: function endShadows() {}
	                }]);

	                return WebGLClipping;
	        }();

	        Bonnie3D.WebGLClipping = WebGLClipping;
	})(undefined);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var WebGLExtensions = function () {
	                        function WebGLExtensions(gl) {
	                                    _classCallCheck(this, WebGLExtensions);

	                                    this.gl = gl;
	                                    this.extensions = {};
	                        }

	                        _createClass(WebGLExtensions, [{
	                                    key: 'get',
	                                    value: function get(name) {

	                                                if (this.extensions[name] !== undefined) {

	                                                            return this.extensions[name];
	                                                }

	                                                var extension = void 0;

	                                                switch (name) {

	                                                            case 'WEBGL_depth_texture':
	                                                                        extension = this.gl.getExtension('WEBGL_depth_texture') || this.gl.getExtension('MOZ_WEBGL_depth_texture') || this.gl.getExtension('WEBKIT_WEBGL_depth_texture');
	                                                                        break;

	                                                            case 'EXT_texture_filter_anisotropic':
	                                                                        extension = this.gl.getExtension('EXT_texture_filter_anisotropic') || this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic') || this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
	                                                                        break;

	                                                            case 'WEBGL_compressed_texture_s3tc':
	                                                                        extension = this.gl.getExtension('WEBGL_compressed_texture_s3tc') || this.gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || this.gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
	                                                                        break;

	                                                            case 'WEBGL_compressed_texture_pvrtc':
	                                                                        extension = this.gl.getExtension('WEBGL_compressed_texture_pvrtc') || this.gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
	                                                                        break;

	                                                            case 'WEBGL_compressed_texture_etc1':
	                                                                        extension = this.gl.getExtension('WEBGL_compressed_texture_etc1');
	                                                                        break;

	                                                            default:
	                                                                        extension = this.gl.getExtension(name);

	                                                }

	                                                if (extension === null) {

	                                                            Bonnie3D.Log.warning('THREE.WebGLRenderer: ' + name + ' extension not supported.');
	                                                }

	                                                this.extensions[name] = extension;

	                                                return extension;
	                                    }
	                        }]);

	                        return WebGLExtensions;
	            }();

	            Bonnie3D.WebGLExtensions = WebGLExtensions;
	})(undefined);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLGeometries = function WebGLGeometries() {
	        _classCallCheck(this, WebGLGeometries);
	    };

	    Bonnie3D.WebGLGeometries = WebGLGeometries;
	})(undefined);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLIndexedBufferRenderer = function WebGLIndexedBufferRenderer() {
	        _classCallCheck(this, WebGLIndexedBufferRenderer);
	    };

	    Bonnie3D.WebGLIndexedBufferRenderer = WebGLIndexedBufferRenderer;
	})(undefined);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLLights = function WebGLLights() {
	        _classCallCheck(this, WebGLLights);
	    };

	    Bonnie3D.WebGLLights = WebGLLights;
	})(undefined);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLObjects = function WebGLObjects() {
	        _classCallCheck(this, WebGLObjects);
	    };

	    Bonnie3D.WebGLObjects = WebGLObjects;
	})(undefined);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLPrograms = function WebGLPrograms() {
	        _classCallCheck(this, WebGLPrograms);
	    };

	    Bonnie3D.WebGLPrograms = WebGLPrograms;
	})(undefined);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLProperties = function WebGLProperties() {
	        _classCallCheck(this, WebGLProperties);
	    };

	    Bonnie3D.WebGLProperties = WebGLProperties;
	})(undefined);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var WebGLRenderList = function () {
	                function WebGLRenderList() {
	                        _classCallCheck(this, WebGLRenderList);

	                        this.opaque = [];
	                        this.transparent = [];
	                }

	                _createClass(WebGLRenderList, [{
	                        key: 'init',
	                        value: function init() {}
	                }, {
	                        key: 'finish',
	                        value: function finish() {}
	                }, {
	                        key: 'sort',
	                        value: function sort() {}
	                }]);

	                return WebGLRenderList;
	        }();

	        var WebGLRenderLists = function () {
	                function WebGLRenderLists() {
	                        _classCallCheck(this, WebGLRenderLists);

	                        this.lists = {};
	                }

	                _createClass(WebGLRenderLists, [{
	                        key: 'get',
	                        value: function get(scene, camera) {

	                                var hash = scene.id + ',' + camera.id;
	                                var list = this.lists[hash];

	                                if (list === undefined) {

	                                        // console.log( 'THREE.WebGLRenderLists:', hash );

	                                        list = new WebGLRenderList();
	                                        this.lists[hash] = list;
	                                }

	                                return list;
	                        }
	                }, {
	                        key: 'dispose',
	                        value: function dispose() {

	                                this.lists = {};
	                        }
	                }]);

	                return WebGLRenderLists;
	        }();

	        Bonnie3D.WebGLRenderList = WebGLRenderList;
	        Bonnie3D.WebGLRenderLists = WebGLRenderLists;
	})(undefined);

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var WebGLShadowMap = function () {
	                function WebGLShadowMap() {
	                        _classCallCheck(this, WebGLShadowMap);
	                }

	                _createClass(WebGLShadowMap, [{
	                        key: "render",
	                        value: function render(scene, camera) {}
	                }]);

	                return WebGLShadowMap;
	        }();

	        Bonnie3D.WebGLShadowMap = WebGLShadowMap;
	})(undefined);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var ColorBuffer = function () {
	        function ColorBuffer() {
	            _classCallCheck(this, ColorBuffer);
	        }

	        _createClass(ColorBuffer, [{
	            key: "setClear",
	            value: function setClear(r, g, b, a, premultipliedAlpha) {}
	        }]);

	        return ColorBuffer;
	    }();

	    var DepthBuffer = function () {
	        function DepthBuffer() {
	            _classCallCheck(this, DepthBuffer);
	        }

	        _createClass(DepthBuffer, [{
	            key: "setClear",
	            value: function setClear(depth) {}
	        }]);

	        return DepthBuffer;
	    }();

	    var StencilBuffer = function () {
	        function StencilBuffer() {
	            _classCallCheck(this, StencilBuffer);
	        }

	        _createClass(StencilBuffer, [{
	            key: "setClear",
	            value: function setClear(stencil) {}
	        }]);

	        return StencilBuffer;
	    }();

	    var WebGLState = function () {
	        function WebGLState(gl, extensions, paramToGL) {
	            _classCallCheck(this, WebGLState);

	            this.buffers = {
	                color: new ColorBuffer(),
	                depth: new DepthBuffer(),
	                stencil: new StencilBuffer()
	            };
	        }

	        _createClass(WebGLState, [{
	            key: "viewport",
	            value: function viewport(_viewport) {}
	        }]);

	        return WebGLState;
	    }();

	    Bonnie3D.WebGLState = WebGLState;
	    Bonnie3D.WebGLState.ColorBuffer = ColorBuffer;
	    Bonnie3D.WebGLState.DepthBuffer = DepthBuffer;
	    Bonnie3D.WebGLState.StencilBuffer = StencilBuffer;
	})(undefined);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var WebGLTextures = function () {
	                function WebGLTextures() {
	                        _classCallCheck(this, WebGLTextures);
	                }

	                _createClass(WebGLTextures, [{
	                        key: "updateRenderTargetMipmap",
	                        value: function updateRenderTargetMipmap(renderTarget) {}
	                }]);

	                return WebGLTextures;
	        }();

	        Bonnie3D.WebGLTextures = WebGLTextures;
	})(undefined);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var WebGL2Renderer = function () {
	                        function WebGL2Renderer(params) {
	                                    _classCallCheck(this, WebGL2Renderer);

	                                    var parameters = params || {};

	                                    this._canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
	                                    this._context = parameters.context !== undefined ? parameters.context : null;

	                                    this._alpha = parameters.alpha !== undefined ? parameters.alpha : false;
	                                    this._depth = parameters.depth !== undefined ? parameters.depth : true;
	                                    this._stencil = parameters.stencil !== undefined ? parameters.stencil : true;
	                                    this._antialias = parameters.antialias !== undefined ? parameters.antialias : false;
	                                    this._premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true;
	                                    this._preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false;

	                                    // initialize gl

	                                    try {

	                                                var attributes = {
	                                                            alpha: this._alpha,
	                                                            depth: this._depth,
	                                                            stencil: this._stencil,
	                                                            antialias: this._antialias,
	                                                            premultipliedAlpha: this._premultipliedAlpha,
	                                                            preserveDrawingBuffer: this._preserveDrawingBuffer
	                                                };

	                                                this._gl = this._context || this._canvas.getContext('webgl2', attributes);

	                                                if (this._gl === null) {

	                                                            if (this._canvas.getContext('webgl2') !== null) {

	                                                                        throw 'Error creating WebGL2 context with your selected attributes.';
	                                                            } else {

	                                                                        throw 'Error creating WebGL2 context.';
	                                                            }
	                                                }

	                                                this._canvas.addEventListener('webglcontextlost', this.onContextLost, false);
	                                    } catch (error) {

	                                                Log.error('WebGL2Renderer: ' + error);
	                                    }

	                                    //

	                                    this._autoClear = true;
	                                    this._autoClearColor = true;
	                                    this._autoClearDepth = true;
	                                    this._autoClearStencil = true;

	                                    this._clearColor = new Bonnie3D.Color(0x000000);
	                                    this._clearAlpha = 0;

	                                    this._width = this._canvas.width;
	                                    this._height = this._canvas.height;

	                                    this._pixelRatio = 1;

	                                    this._viewport = new Bonnie3D.Vector4(0, 0, this._width, this._height);

	                                    var extensions = new Bonnie3D.WebGLExtensions(this._gl);
	                                    this._state = new Bonnie3D.WebGLState(this._gl, extensions, function () {});

	                                    this.setSize(window.innerWidth, window.innerHeight);
	                                    document.body.appendChild(this._canvas);
	                        }

	                        _createClass(WebGL2Renderer, [{
	                                    key: 'clear',
	                                    value: function clear(color, depth, stencil) {

	                                                var bits = 0;

	                                                if (color === undefined || color) bits |= this._gl.COLOR_BUFFER_BIT;
	                                                if (depth === undefined || depth) bits |= this._gl.DEPTH_BUFFER_BIT;
	                                                if (stencil === undefined || stencil) bits |= this._gl.STENCIL_BUFFER_BIT;

	                                                this._gl.clear(bits);
	                                    }
	                        }, {
	                                    key: 'setPixelRatio',
	                                    value: function setPixelRatio(value) {

	                                                if (value === undefined) return;

	                                                this._pixelRatio = value;

	                                                this.setSize(this._viewport.z, this._viewport.w, false);
	                                    }
	                        }, {
	                                    key: 'setSize',
	                                    value: function setSize(width, height, updateStyle) {

	                                                this._width = width;
	                                                this._height = height;

	                                                this._canvas.width = width * this._pixelRatio;
	                                                this._canvas.height = height * this._pixelRatio;

	                                                if (updateStyle !== false) {

	                                                            this._canvas.style.width = width + 'px';
	                                                            this._canvas.style.height = height + 'px';
	                                                }

	                                                this.setViewport(0, 0, width, height);
	                                    }
	                        }, {
	                                    key: 'setViewport',
	                                    value: function setViewport(x, y, width, height) {

	                                                this._state.viewport(this._viewport.set(x, y, width, height));
	                                    }
	                        }, {
	                                    key: 'render',
	                                    value: function render() {

	                                                var scene = Bonnie3D.SceneManager.currentScene;
	                                                if (scene) {
	                                                            var background = scene.background;
	                                                            var forceClear = false;

	                                                            if (background instanceof Bonnie3D.Color) {

	                                                                        this._state.buffers.color.setClear(background.r, background.g, background.b, 1, this._premultipliedAlpha);
	                                                                        forceClear = true;
	                                                            } else {

	                                                                        this._state.buffers.color.setClear(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha, this._premultipliedAlpha);
	                                                            }

	                                                            if (this._autoClear || forceClear) {

	                                                                        this.clear(this._autoClearColor, this._autoClearDepth, this._autoClearStencil);
	                                                            }
	                                                }
	                                    }
	                        }, {
	                                    key: 'onContextLost',
	                                    value: function onContextLost(event) {

	                                                event.preventDefault();
	                                    }
	                        }], [{
	                                    key: 'getInstance',
	                                    value: function getInstance() {
	                                                if (!WebGL2Renderer._instance) {
	                                                            WebGL2Renderer._instance = new WebGL2Renderer();
	                                                }
	                                                return WebGL2Renderer._instance;
	                                    }
	                        }]);

	                        return WebGL2Renderer;
	            }();

	            Bonnie3D.WebGL2Renderer = WebGL2Renderer;
	})(undefined);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var WebGLRenderer = function () {
	                        function WebGLRenderer(params) {
	                                    _classCallCheck(this, WebGLRenderer);

	                                    var parameters = params || {};

	                                    this._canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
	                                    this._context = parameters.context !== undefined ? parameters.context : null;

	                                    this._alpha = parameters.alpha !== undefined ? parameters.alpha : false;
	                                    this._depth = parameters.depth !== undefined ? parameters.depth : true;
	                                    this._stencil = parameters.stencil !== undefined ? parameters.stencil : true;
	                                    this._antialias = parameters.antialias !== undefined ? parameters.antialias : false;
	                                    this._premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true;
	                                    this._preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false;

	                                    this.lights = [];

	                                    this.currentRenderList = null;

	                                    this.morphInfluences = new Float32Array(8);

	                                    this.sprites = [];
	                                    this.lensFlares = [];

	                                    // public properties

	                                    this.domElement = this._canvas;
	                                    this.context = null;

	                                    // clearing

	                                    this.autoClear = true;
	                                    this.autoClearColor = true;
	                                    this.autoClearDepth = true;
	                                    this.autoClearStencil = true;

	                                    // scene graph

	                                    this.sortObjects = true;

	                                    // user-defined clipping

	                                    this.clippingPlanes = [];
	                                    this.localClippingEnabled = false;

	                                    // physically based shading

	                                    this.gammaFactor = 2.0; // for backwards compatibility
	                                    this.gammaInput = false;
	                                    this.gammaOutput = false;

	                                    // physical lights

	                                    this.physicallyCorrectLights = false;

	                                    // tone mapping

	                                    this.toneMapping = Bonnie3D.LinearToneMapping;
	                                    this.toneMappingExposure = 1.0;
	                                    this.toneMappingWhitePoint = 1.0;

	                                    // morphs

	                                    this.maxMorphTargets = 8;
	                                    this.maxMorphNormals = 4;

	                                    // internal state cache

	                                    this._currentProgram = null;
	                                    this._currentRenderTarget = null;
	                                    this._currentFramebuffer = null;
	                                    this._currentMaterialId = -1;
	                                    this._currentGeometryProgram = '';
	                                    this._currentCamera = null;

	                                    this._currentScissor = new Bonnie3D.Vector4();
	                                    this._currentScissorTest = null;

	                                    this._currentViewport = new Bonnie3D.Vector4();

	                                    //

	                                    this._usedTextureUnits = 0;

	                                    //

	                                    this._clearColor = new Bonnie3D.Color(0x000000);
	                                    this._clearAlpha = 0;

	                                    this._width = this._canvas.width;
	                                    this._height = this._canvas.height;

	                                    this._pixelRatio = 1;

	                                    this._scissor = new Bonnie3D.Vector4(0, 0, this._width, this._height);
	                                    this._scissorTest = false;

	                                    this._viewport = new Bonnie3D.Vector4(0, 0, this._width, this._height);

	                                    // frustum

	                                    this._frustum = new Bonnie3D.Frustum();

	                                    // clipping

	                                    this._clipping = new Bonnie3D.WebGLClipping();
	                                    this._clippingEnabled = false;
	                                    this._localClippingEnabled = false;

	                                    // camera matrices cache

	                                    this._projScreenMatrix = new Bonnie3D.Matrix4();

	                                    this._vector3 = new Bonnie3D.Vector3();
	                                    this._matrix4 = new Bonnie3D.Matrix4();
	                                    this._matrix42 = new Bonnie3D.Matrix4();

	                                    // light arrays cache

	                                    this._lights = {

	                                                hash: '',

	                                                ambient: [0, 0, 0],
	                                                directional: [],
	                                                directionalShadowMap: [],
	                                                directionalShadowMatrix: [],
	                                                spot: [],
	                                                spotShadowMap: [],
	                                                spotShadowMatrix: [],
	                                                rectArea: [],
	                                                point: [],
	                                                pointShadowMap: [],
	                                                pointShadowMatrix: [],
	                                                hemi: [],

	                                                shadows: []

	                                    };

	                                    // info

	                                    this._infoMemory = {
	                                                geometries: 0,
	                                                textures: 0
	                                    };

	                                    this._infoRender = {

	                                                frame: 0,
	                                                calls: 0,
	                                                vertices: 0,
	                                                faces: 0,
	                                                points: 0

	                                    };

	                                    this.info = {

	                                                render: this._infoRender,
	                                                memory: this._infoMemory,
	                                                programs: null

	                                    };

	                                    // initialize gl

	                                    try {

	                                                var contextAttributes = {
	                                                            alpha: this._alpha,
	                                                            depth: this._depth,
	                                                            stencil: this._stencil,
	                                                            antialias: this._antialias,
	                                                            premultipliedAlpha: this._premultipliedAlpha,
	                                                            preserveDrawingBuffer: this._preserveDrawingBuffer
	                                                };

	                                                this._gl = this._context || this._canvas.getContext('webgl', contextAttributes) || this._canvas.getContext('experimental-webgl', contextAttributes);;

	                                                if (this._gl === null) {

	                                                            if (this._canvas.getContext('webgl') !== null) {

	                                                                        throw 'Error creating WebGL context with your selected attributes.';
	                                                            } else {

	                                                                        throw 'Error creating WebGL context.';
	                                                            }
	                                                }

	                                                // Some experimental-webgl implementations do not have getShaderPrecisionFormat

	                                                if (this._gl.getShaderPrecisionFormat === undefined) {

	                                                            this._gl.getShaderPrecisionFormat = function () {

	                                                                        return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };
	                                                            };
	                                                }

	                                                this._canvas.addEventListener('webglcontextlost', this.onContextLost, false);
	                                    } catch (error) {

	                                                Log.error('WebGLRenderer: ' + error);
	                                    }

	                                    //

	                                    var extensions = new Bonnie3D.WebGLExtensions(this._gl);
	                                    extensions.get('WEBGL_depth_texture');
	                                    extensions.get('OES_texture_float');
	                                    extensions.get('OES_texture_float_linear');
	                                    extensions.get('OES_texture_half_float');
	                                    extensions.get('OES_texture_half_float_linear');
	                                    extensions.get('OES_standard_derivatives');
	                                    extensions.get('ANGLE_instanced_arrays');

	                                    if (extensions.get('OES_element_index_uint')) {

	                                                Bonnie3D.BufferGeometry.MaxIndex = 4294967296;
	                                    }
	                                    this.extensions = extensions;

	                                    this.capabilities = new Bonnie3D.WebGLCapabilities(this._gl, extensions, parameters);

	                                    this.state = new Bonnie3D.WebGLState(this._gl, extensions, this.paramToGL);

	                                    this.properties = new Bonnie3D.WebGLProperties();
	                                    this.textures = new Bonnie3D.WebGLTextures(this._gl, extensions, this.state, this.properties, this.capabilities, this.paramToGL, this._infoMemory);
	                                    this.attributes = new Bonnie3D.WebGLAttributes(this._gl);
	                                    this.geometries = new Bonnie3D.WebGLGeometries(this._gl, this.attributes, this._infoMemory);
	                                    this.objects = new Bonnie3D.WebGLObjects(this._gl, this.geometries, this._infoRender);
	                                    this.programCache = new Bonnie3D.WebGLPrograms(this, this.capabilities);
	                                    this.lightCache = new Bonnie3D.WebGLLights();
	                                    this.renderLists = new Bonnie3D.WebGLRenderLists();
	                                    //this.vr = new Bonnie3D.WebVRManager( this );

	                                    this.info.programs = this.programCache.programs;

	                                    this.bufferRenderer = new Bonnie3D.WebGLBufferRenderer(this._gl, extensions, this._infoRender);
	                                    this.indexedBufferRenderer = new Bonnie3D.WebGLIndexedBufferRenderer(this._gl, extensions, this._infoRender);

	                                    //

	                                    this.backgroundPlaneCamera;
	                                    this.backgroundPlaneMesh;
	                                    this.backgroundBoxCamera;
	                                    this.backgroundBoxMesh;

	                                    // shadow map

	                                    this.shadowMap = new Bonnie3D.WebGLShadowMap(this, this._lights, this.objects, this.capabilities);

	                                    // Plugins

	                                    this.spritePlugin = new Bonnie3D.SpritePlugin(this, this.sprites);
	                                    this.lensFlarePlugin = new Bonnie3D.LensFlarePlugin(this, this.lensFlares);

	                                    this.setSize(window.innerWidth, window.innerHeight);
	                                    document.body.appendChild(this._canvas);
	                        }

	                        _createClass(WebGLRenderer, [{
	                                    key: 'clear',
	                                    value: function clear(color, depth, stencil) {

	                                                var bits = 0;

	                                                if (color === undefined || color) bits |= this._gl.COLOR_BUFFER_BIT;
	                                                if (depth === undefined || depth) bits |= this._gl.DEPTH_BUFFER_BIT;
	                                                if (stencil === undefined || stencil) bits |= this._gl.STENCIL_BUFFER_BIT;

	                                                this._gl.clear(bits);
	                                    }
	                        }, {
	                                    key: 'setPixelRatio',
	                                    value: function setPixelRatio(value) {

	                                                if (value === undefined) return;

	                                                this._pixelRatio = value;

	                                                this.setSize(this._width, this._height, false);
	                                    }
	                        }, {
	                                    key: 'setSize',
	                                    value: function setSize(width, height, updateStyle) {

	                                                this._width = width;
	                                                this._height = height;

	                                                this._canvas.width = width * this._pixelRatio;
	                                                this._canvas.height = height * this._pixelRatio;

	                                                if (updateStyle !== false) {

	                                                            this._canvas.style.width = width + 'px';
	                                                            this._canvas.style.height = height + 'px';
	                                                }

	                                                this.setViewport(0, 0, width, height);
	                                    }
	                        }, {
	                                    key: 'setViewport',
	                                    value: function setViewport(x, y, width, height) {

	                                                this._viewport.set(x, this._height - y - height, width, height);
	                                                this.state.viewport(this._currentViewport.copy(this._viewport).multiplyScalar(this._pixelRatio));
	                                    }
	                        }, {
	                                    key: 'render',
	                                    value: function render(renderTarget, forceClear) {

	                                                var scene = Bonnie3D.SceneManager.currentScene;
	                                                if (scene) {

	                                                            // reset caching for this frame

	                                                            this._currentGeometryProgram = '';
	                                                            this._currentMaterialId = -1;
	                                                            this._currentCamera = null;

	                                                            // update scene graph

	                                                            if (scene.autoUpdate === true) scene.updateMatrixWorld();

	                                                            // update camera matrices and frustum

	                                                            camera.node.onBeforeRender(this);

	                                                            if (camera.node.parent === null) camera.node.updateMatrixWorld();

	                                                            // if ( vr.enabled ) {
	                                                            //
	                                                            //     camera = vr.getCamera( camera );
	                                                            //
	                                                            // }

	                                                            this._projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
	                                                            this._frustum.setFromMatrix(this._projScreenMatrix);

	                                                            this.lights.length = 0;
	                                                            this.sprites.length = 0;
	                                                            this.lensFlares.length = 0;

	                                                            this._localClippingEnabled = this.localClippingEnabled;
	                                                            this._clippingEnabled = this._clipping.init(this.clippingPlanes, this._localClippingEnabled, camera);

	                                                            this.currentRenderList = this.renderLists.get(scene, camera);
	                                                            this.currentRenderList.init();

	                                                            this.projectObject(scene, camera, this.sortObjects);

	                                                            this.currentRenderList.finish();

	                                                            if (this.sortObjects === true) {

	                                                                        this.currentRenderList.sort();
	                                                            }

	                                                            //

	                                                            if (this._clippingEnabled) this._clipping.beginShadows();

	                                                            this.setupShadows(this.lights);

	                                                            this.shadowMap.render(scene, camera);

	                                                            this.setupLights(this.lights, camera);

	                                                            if (this._clippingEnabled) this._clipping.endShadows();

	                                                            //

	                                                            this._infoRender.frame++;
	                                                            this._infoRender.calls = 0;
	                                                            this._infoRender.vertices = 0;
	                                                            this._infoRender.faces = 0;
	                                                            this._infoRender.points = 0;

	                                                            if (renderTarget === undefined) {

	                                                                        renderTarget = null;
	                                                            }

	                                                            this.setRenderTarget(renderTarget);

	                                                            //

	                                                            var background = scene.background;

	                                                            if (background === null) {

	                                                                        this.state.buffers.color.setClear(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha, this._premultipliedAlpha);
	                                                            } else if (background instanceof Bonnie3D.Color) {

	                                                                        this.state.buffers.color.setClear(background.r, background.g, background.b, 1, this._premultipliedAlpha);
	                                                                        forceClear = true;
	                                                            }

	                                                            if (this.autoClear || forceClear) {

	                                                                        this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
	                                                            }

	                                                            if (background instanceof Bonnie3D.CubeTexture) {

	                                                                        if (this.backgroundBoxCamera === undefined) {

	                                                                                    this.backgroundBoxCamera = new Bonnie3D.Camera();

	                                                                                    this.backgroundBoxMesh = new Bonnie3D.Mesh(new Bonnie3D.BoxBufferGeometry(5, 5, 5), new Bonnie3D.ShaderMaterial({
	                                                                                                uniforms: Bonnie3D.ShaderLib.cube.uniforms,
	                                                                                                vertexShader: Bonnie3D.ShaderLib.cube.vertexShader,
	                                                                                                fragmentShader: Bonnie3D.ShaderLib.cube.fragmentShader,
	                                                                                                side: Bonnie3D.BackSide,
	                                                                                                depthTest: false,
	                                                                                                depthWrite: false,
	                                                                                                fog: false
	                                                                                    }));
	                                                                        }

	                                                                        this.backgroundBoxCamera.projectionMatrix.copy(camera.projectionMatrix);

	                                                                        this.backgroundBoxCamera.node.matrixWorld.extractRotation(camera.node.matrixWorld);
	                                                                        this.backgroundBoxCamera.matrixWorldInverse.getInverse(this.backgroundBoxCamera.node.matrixWorld);

	                                                                        this.backgroundBoxMesh.material.uniforms["tCube"].value = background;
	                                                                        this.backgroundBoxMesh.node.modelViewMatrix.multiplyMatrices(this.backgroundBoxCamera.matrixWorldInverse, this.backgroundBoxMesh.node.matrixWorld);

	                                                                        this.objects.update(this.backgroundBoxMesh);

	                                                                        this.renderBufferDirect(this.backgroundBoxCamera, null, this.backgroundBoxMesh.geometry, this.backgroundBoxMesh.material, this.backgroundBoxMesh, null);
	                                                            } else if (background instanceof Bonnie3D.Texture) {

	                                                                        if (this.backgroundPlaneCamera === undefined) {

	                                                                                    this.backgroundPlaneCamera = new Bonnie3D.OrthographicCamera(-1, 1, 1, -1, 0, 1);

	                                                                                    this.backgroundPlaneMesh = new Bonnie3D.Mesh(new Bonnie3D.PlaneBufferGeometry(2, 2), new Bonnie3D.MeshBasicMaterial({ depthTest: false, depthWrite: false, fog: false }));
	                                                                        }

	                                                                        this.backgroundPlaneMesh.material.map = background;

	                                                                        this.objects.update(this.backgroundPlaneMesh);

	                                                                        this.renderBufferDirect(this.backgroundPlaneCamera, null, this.backgroundPlaneMesh.geometry, this.backgroundPlaneMesh.material, this.backgroundPlaneMesh, null);
	                                                            }

	                                                            //

	                                                            var opaqueObjects = this.currentRenderList.opaque;
	                                                            var transparentObjects = this.currentRenderList.transparent;

	                                                            if (scene.overrideMaterial) {

	                                                                        var overrideMaterial = scene.overrideMaterial;

	                                                                        if (opaqueObjects.length) this.renderObjects(opaqueObjects, scene, camera, overrideMaterial);
	                                                                        if (transparentObjects.length) this.renderObjects(transparentObjects, scene, camera, overrideMaterial);
	                                                            } else {

	                                                                        // opaque pass (front-to-back order)

	                                                                        if (opaqueObjects.length) this.renderObjects(opaqueObjects, scene, camera);

	                                                                        // transparent pass (back-to-front order)

	                                                                        if (transparentObjects.length) this.renderObjects(transparentObjects, scene, camera);
	                                                            }

	                                                            // custom render plugins (post pass)

	                                                            this.spritePlugin.render(scene, camera);
	                                                            this.lensFlarePlugin.render(scene, camera, this._currentViewport);

	                                                            // Generate mipmap if we're using any kind of mipmap filtering

	                                                            if (renderTarget) {

	                                                                        this.textures.updateRenderTargetMipmap(renderTarget);
	                                                            }

	                                                            // Ensure depth buffer writing is enabled so it can be cleared on next render

	                                                            // this.state.buffers.depth.setTest( true );
	                                                            // this.state.buffers.depth.setMask( true );
	                                                            // this.state.buffers.color.setMask( true );

	                                                            if (camera instanceof Bonnie3D.ArrayCamera) {

	                                                                        this.setScissorTest(false);
	                                                            }

	                                                            camera.node.onAfterRender(this);
	                                                }
	                                    }
	                        }, {
	                                    key: 'setScissorTest',
	                                    value: function setScissorTest(boolean) {}
	                        }, {
	                                    key: 'renderObjects',
	                                    value: function renderObjects(renderList, scene, camera, overrideMaterial) {}
	                        }, {
	                                    key: 'renderBufferDirect',
	                                    value: function renderBufferDirect(camera, fog, geometry, material, object, group) {}
	                        }, {
	                                    key: 'projectObject',
	                                    value: function projectObject(object, camera, sortObjects) {}
	                        }, {
	                                    key: 'setupShadows',
	                                    value: function setupShadows(lights) {}
	                        }, {
	                                    key: 'setupLights',
	                                    value: function setupLights(lights, camera) {}
	                        }, {
	                                    key: 'setRenderTarget',
	                                    value: function setRenderTarget(renderTarget) {}
	                        }, {
	                                    key: 'resetGLState',
	                                    value: function resetGLState() {}
	                        }, {
	                                    key: 'setDefaultGLState',
	                                    value: function setDefaultGLState() {}
	                        }, {
	                                    key: 'onContextLost',
	                                    value: function onContextLost(event) {

	                                                event.preventDefault();

	                                                this.resetGLState();
	                                                this.setDefaultGLState();

	                                                this.properties.clear();
	                                                this.objects.clear();
	                                    }
	                        }, {
	                                    key: 'paramToGL',
	                                    value: function paramToGL(p) {

	                                                var extension = void 0;

	                                                if (p === Bonnie3D.RepeatWrapping) return this._gl.REPEAT;
	                                                if (p === Bonnie3D.ClampToEdgeWrapping) return this._gl.CLAMP_TO_EDGE;
	                                                if (p === Bonnie3D.MirroredRepeatWrapping) return this._gl.MIRRORED_REPEAT;

	                                                if (p === Bonnie3D.NearestFilter) return this._gl.NEAREST;
	                                                if (p === Bonnie3D.NearestMipMapNearestFilter) return this._gl.NEAREST_MIPMAP_NEAREST;
	                                                if (p === Bonnie3D.NearestMipMapLinearFilter) return this._gl.NEAREST_MIPMAP_LINEAR;

	                                                if (p === Bonnie3D.LinearFilter) return this._gl.LINEAR;
	                                                if (p === Bonnie3D.LinearMipMapNearestFilter) return this._gl.LINEAR_MIPMAP_NEAREST;
	                                                if (p === Bonnie3D.LinearMipMapLinearFilter) return this._gl.LINEAR_MIPMAP_LINEAR;

	                                                if (p === Bonnie3D.UnsignedByteType) return this._gl.UNSIGNED_BYTE;
	                                                if (p === Bonnie3D.UnsignedShort4444Type) return this._gl.UNSIGNED_SHORT_4_4_4_4;
	                                                if (p === Bonnie3D.UnsignedShort5551Type) return this._gl.UNSIGNED_SHORT_5_5_5_1;
	                                                if (p === Bonnie3D.UnsignedShort565Type) return this._gl.UNSIGNED_SHORT_5_6_5;

	                                                if (p === Bonnie3D.ByteType) return this._gl.BYTE;
	                                                if (p === Bonnie3D.ShortType) return this._gl.SHORT;
	                                                if (p === Bonnie3D.UnsignedShortType) return this._gl.UNSIGNED_SHORT;
	                                                if (p === Bonnie3D.IntType) return this._gl.INT;
	                                                if (p === Bonnie3D.UnsignedIntType) return this._gl.UNSIGNED_INT;
	                                                if (p === Bonnie3D.FloatType) return this._gl.FLOAT;

	                                                if (p === Bonnie3D.HalfFloatType) {

	                                                            extension = this.extensions.get('OES_texture_half_float');

	                                                            if (extension !== null) return extension.HALF_FLOAT_OES;
	                                                }

	                                                if (p === Bonnie3D.AlphaFormat) return this._gl.ALPHA;
	                                                if (p === Bonnie3D.RGBFormat) return this._gl.RGB;
	                                                if (p === Bonnie3D.RGBAFormat) return this._gl.RGBA;
	                                                if (p === Bonnie3D.LuminanceFormat) return this._gl.LUMINANCE;
	                                                if (p === Bonnie3D.LuminanceAlphaFormat) return this._gl.LUMINANCE_ALPHA;
	                                                if (p === Bonnie3D.DepthFormat) return this._gl.DEPTH_COMPONENT;
	                                                if (p === Bonnie3D.DepthStencilFormat) return this._gl.DEPTH_STENCIL;

	                                                if (p === Bonnie3D.AddEquation) return this._gl.FUNC_ADD;
	                                                if (p === Bonnie3D.SubtractEquation) return this._gl.FUNC_SUBTRACT;
	                                                if (p === Bonnie3D.ReverseSubtractEquation) return this._gl.FUNC_REVERSE_SUBTRACT;

	                                                if (p === Bonnie3D.ZeroFactor) return this._gl.ZERO;
	                                                if (p === Bonnie3D.OneFactor) return this._gl.ONE;
	                                                if (p === Bonnie3D.SrcColorFactor) return this._gl.SRC_COLOR;
	                                                if (p === Bonnie3D.OneMinusSrcColorFactor) return this._gl.ONE_MINUS_SRC_COLOR;
	                                                if (p === Bonnie3D.SrcAlphaFactor) return this._gl.SRC_ALPHA;
	                                                if (p === Bonnie3D.OneMinusSrcAlphaFactor) return this._gl.ONE_MINUS_SRC_ALPHA;
	                                                if (p === Bonnie3D.DstAlphaFactor) return this._gl.DST_ALPHA;
	                                                if (p === Bonnie3D.OneMinusDstAlphaFactor) return this._gl.ONE_MINUS_DST_ALPHA;

	                                                if (p === Bonnie3D.DstColorFactor) return this._gl.DST_COLOR;
	                                                if (p === Bonnie3D.OneMinusDstColorFactor) return this._gl.ONE_MINUS_DST_COLOR;
	                                                if (p === Bonnie3D.SrcAlphaSaturateFactor) return _this.gl.SRC_ALPHA_SATURATE;

	                                                if (p === Bonnie3D.RGB_S3TC_DXT1_Format || p === Bonnie3D.RGBA_S3TC_DXT1_Format || p === Bonnie3D.RGBA_S3TC_DXT3_Format || p === Bonnie3D.RGBA_S3TC_DXT5_Format) {

	                                                            extension = this.extensions.get('WEBGL_compressed_texture_s3tc');

	                                                            if (extension !== null) {

	                                                                        if (p === Bonnie3D.RGB_S3TC_DXT1_Format) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
	                                                                        if (p === Bonnie3D.RGBA_S3TC_DXT1_Format) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
	                                                                        if (p === Bonnie3D.RGBA_S3TC_DXT3_Format) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
	                                                                        if (p === Bonnie3D.RGBA_S3TC_DXT5_Format) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
	                                                            }
	                                                }

	                                                if (p === Bonnie3D.RGB_PVRTC_4BPPV1_Format || p === Bonnie3D.RGB_PVRTC_2BPPV1_Format || p === Bonnie3D.RGBA_PVRTC_4BPPV1_Format || p === Bonnie3D.RGBA_PVRTC_2BPPV1_Format) {

	                                                            extension = this.extensions.get('WEBGL_compressed_texture_pvrtc');

	                                                            if (extension !== null) {

	                                                                        if (p === Bonnie3D.RGB_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
	                                                                        if (p === Bonnie3D.RGB_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
	                                                                        if (p === Bonnie3D.RGBA_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
	                                                                        if (p === Bonnie3D.RGBA_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
	                                                            }
	                                                }

	                                                if (p === Bonnie3D.RGB_ETC1_Format) {

	                                                            extension = this.extensions.get('WEBGL_compressed_texture_etc1');

	                                                            if (extension !== null) return extension.COMPRESSED_RGB_ETC1_WEBGL;
	                                                }

	                                                if (p === Bonnie3D.MinEquation || p === Bonnie3D.MaxEquation) {

	                                                            extension = this.extensions.get('EXT_blend_minmax');

	                                                            if (extension !== null) {

	                                                                        if (p === Bonnie3D.MinEquation) return extension.MIN_EXT;
	                                                                        if (p === Bonnie3D.MaxEquation) return extension.MAX_EXT;
	                                                            }
	                                                }

	                                                if (p === Bonnie3D.UnsignedInt248Type) {

	                                                            extension = this.extensions.get('WEBGL_depth_texture');

	                                                            if (extension !== null) return extension.UNSIGNED_INT_24_8_WEBGL;
	                                                }

	                                                return 0;
	                                    }
	                        }], [{
	                                    key: 'getInstance',
	                                    value: function getInstance() {
	                                                if (!WebGLRenderer._instance) {
	                                                            WebGLRenderer._instance = new WebGLRenderer();
	                                                }
	                                                return WebGLRenderer._instance;
	                                    }
	                        }]);

	                        return WebGLRenderer;
	            }();

	            Bonnie3D.WebGLRenderer = WebGLRenderer;
	})(undefined);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {

	        var Log = Bonnie3D.Log;

	        var Scene = function (_Bonnie3D$Node) {
	                _inherits(Scene, _Bonnie3D$Node);

	                function Scene() {
	                        _classCallCheck(this, Scene);

	                        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

	                        _this._valid = false;
	                        _this._renderer = Bonnie3D.WebGLRenderer.getInstance();

	                        _this.background = null;
	                        _this.fog = null;
	                        _this.overrideMaterial = null;

	                        _this.autoUpdate = true; // checked by the renderer

	                        return _this;
	                }

	                _createClass(Scene, [{
	                        key: "onEnter",
	                        value: function onEnter() {

	                                Log.debug("Scene [" + this._name + "] onEnter");
	                                this._valid = true;
	                        }
	                }, {
	                        key: "onExit",
	                        value: function onExit() {

	                                Log.debug("Scene [" + this._name + "] onExit");
	                                this._valid = false;
	                        }
	                }, {
	                        key: "update",
	                        value: function update() {

	                                if (this._valid) {
	                                        Log.debug("Scene [" + this._name + "] update");
	                                }
	                        }
	                }, {
	                        key: "render",
	                        value: function render() {

	                                if (this._valid) {
	                                        Log.debug("Scene [" + this._name + "] render");
	                                        this._renderer.render();
	                                }
	                        }
	                }, {
	                        key: "isValid",
	                        get: function get() {

	                                return this._valid;
	                        }
	                }]);

	                return Scene;
	        }(Bonnie3D.Node);

	        Bonnie3D.Scene = Scene;
	})(undefined);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var SceneManager = function () {
	                function SceneManager() {
	                        _classCallCheck(this, SceneManager);

	                        this._current = null;
	                }

	                _createClass(SceneManager, [{
	                        key: "_loadScene",
	                        value: function _loadScene(scene) {

	                                if (this._current) {
	                                        this._current.onExit();
	                                }
	                                if (typeof scene === "string") {
	                                        this._current = new Bonnie3D.Scene(scene);
	                                } else {
	                                        this._current = scene;
	                                }
	                                if (this._current) {
	                                        this._current.onEnter();
	                                }
	                        }
	                }, {
	                        key: "_currentScene",
	                        get: function get() {

	                                return this._current;
	                        }
	                }], [{
	                        key: "getInstance",
	                        value: function getInstance() {

	                                if (!SceneManager._instance) {
	                                        SceneManager._instance = new SceneManager();
	                                }
	                                return SceneManager._instance;
	                        }
	                }, {
	                        key: "loadScene",
	                        value: function loadScene(scene) {

	                                SceneManager.getInstance()._loadScene(scene);
	                        }
	                }, {
	                        key: "currentScene",
	                        get: function get() {

	                                return SceneManager.getInstance()._currentScene;
	                        }
	                }]);

	                return SceneManager;
	        }();

	        Bonnie3D.SceneManager = SceneManager;
	})(undefined);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Texture = function (_Bonnie3D$Object) {
	                        _inherits(Texture, _Bonnie3D$Object);

	                        function Texture(image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {
	                                    _classCallCheck(this, Texture);

	                                    var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this));

	                                    _this._id = Bonnie3D.Texture.textureId++;
	                                    _this._image = image !== undefined ? image : Texture.DEFAULT_IMAGE;
	                                    _this._mipmaps = [];

	                                    _this._mapping = mapping !== undefined ? mapping : Texture.DEFAULT_MAPPING;

	                                    _this._wrapS = wrapS !== undefined ? wrapS : Bonnie3D.ClampToEdgeWrapping;
	                                    _this._wrapT = wrapT !== undefined ? wrapT : Bonnie3D.ClampToEdgeWrapping;

	                                    _this._magFilter = magFilter !== undefined ? magFilter : Bonnie3D.LinearFilter;
	                                    _this._minFilter = minFilter !== undefined ? minFilter : Bonnie3D.LinearMipMapLinearFilter;

	                                    _this._anisotropy = anisotropy !== undefined ? anisotropy : 1;

	                                    _this._format = format !== undefined ? format : Bonnie3D.RGBAFormat;
	                                    _this._type = type !== undefined ? type : Bonnie3D.UnsignedByteType;

	                                    _this._offset = new Bonnie3D.Vector2(0, 0);
	                                    _this._repeat = new Bonnie3D.Vector2(1, 1);

	                                    _this._generateMipmaps = true;
	                                    _this._premultiplyAlpha = false;
	                                    _this._flipY = true;
	                                    _this._unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

	                                    // Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
	                                    //
	                                    // Also changing the encoding after already used by a Material will not automatically make the Material
	                                    // update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
	                                    _this._encoding = encoding !== undefined ? encoding : Bonnie3D.LinearEncoding;

	                                    _this._version = 0;
	                                    _this._onUpdate = null;
	                                    return _this;
	                        }

	                        _createClass(Texture, [{
	                                    key: "image",
	                                    get: function get() {
	                                                return this._image;
	                                    },
	                                    set: function set(img) {
	                                                this._image = img;
	                                    }
	                        }]);

	                        return Texture;
	            }(Bonnie3D.Object);

	            Texture.textureId = 0;
	            Texture.DEFAULT_IMAGE = undefined;
	            Texture.DEFAULT_MAPPING = Bonnie3D.UVMapping;

	            Bonnie3D.Texture = Texture;
	})(undefined);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var CubeTexture = function (_Bonnie3D$Texture) {
	                        _inherits(CubeTexture, _Bonnie3D$Texture);

	                        function CubeTexture(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {
	                                    _classCallCheck(this, CubeTexture);

	                                    var _this = _possibleConstructorReturn(this, (CubeTexture.__proto__ || Object.getPrototypeOf(CubeTexture)).call(this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding));

	                                    _this.images = images !== undefined ? images : [];
	                                    _this.mapping = mapping !== undefined ? mapping : Bonnie3D.CubeReflectionMapping;

	                                    _this.flipY = false;

	                                    return _this;
	                        }

	                        return CubeTexture;
	            }(Bonnie3D.Texture);

	            Bonnie3D.CubeTexture = CubeTexture;
	})(undefined);

/***/ })
/******/ ]);