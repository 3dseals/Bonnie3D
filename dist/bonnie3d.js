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

	window["B3D"] = window["Bonnie3D"];
	window["B3D"].Application.run();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	window["Bonnie3D"] = window["Bonnie3D"] || {};

	Bonnie3D.UVMapping = 300;
	Bonnie3D.ClampToEdgeWrapping = 1001;
	Bonnie3D.LinearFilter = 1006;
	Bonnie3D.LinearMipMapLinearFilter = 1008;
	Bonnie3D.UnsignedByteType = 1009;
	Bonnie3D.RGBFormat = 1022;
	Bonnie3D.RGBAFormat = 1023;
	Bonnie3D.LinearEncoding = 3000;

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

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var Color = function Color(r, g, b) {
	        _classCallCheck(this, Color);
	    };

	    Bonnie3D.Color = Color;
	})(undefined);

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
	                        }]);

	                        return Matrix4;
	            }();

	            Bonnie3D.Matrix4 = Matrix4;
	})(undefined);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	        var Quaternion = function () {
	                function Quaternion(x, y, z, w) {
	                        _classCallCheck(this, Quaternion);

	                        this.x = x || 0;
	                        this.y = y || 0;
	                        this.z = z || 0;
	                        this.w = w !== undefined ? w : 1;
	                }

	                _createClass(Quaternion, [{
	                        key: "set",
	                        value: function set(x, y, z, w) {

	                                this.x = x;
	                                this.y = y;
	                                this.z = z;
	                                this.w = w;

	                                return this;
	                        }
	                }]);

	                return Quaternion;
	        }();

	        Bonnie3D.Quaternion = Quaternion;
	})(undefined);

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
	                }]);

	                return Vector4;
	        }();

	        Bonnie3D.Vector4 = Vector4;
	})(undefined);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	            var Object = function () {
	                        function Object(name) {
	                                    _classCallCheck(this, Object);

	                                    this._uuid = Bonnie3D.Math.generateUUID();
	                                    this._name = name || "";
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
	                                    key: 'name',
	                                    get: function get() {

	                                                return this._name;
	                                    }
	                        }]);

	                        return Object;
	            }();

	            Bonnie3D.Object = Object;
	})(undefined);

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var BufferAttribute = function (_Bonnie3D$Object) {
	                _inherits(BufferAttribute, _Bonnie3D$Object);

	                function BufferAttribute(array, itemSize, normalized, arrayType) {
	                        _classCallCheck(this, BufferAttribute);

	                        var _this = _possibleConstructorReturn(this, (BufferAttribute.__proto__ || Object.getPrototypeOf(BufferAttribute)).call(this, 'BufferAttribute'));

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
	                        key: 'getX',
	                        value: function getX(index) {

	                                return this._array[index * this._itemSize];
	                        }
	                }, {
	                        key: 'setX',
	                        value: function setX(index, x) {

	                                this._array[index * this._itemSize] = x;

	                                return this;
	                        }
	                }, {
	                        key: 'getY',
	                        value: function getY(index) {

	                                return this._array[index * this._itemSize + 1];
	                        }
	                }, {
	                        key: 'setY',
	                        value: function setY(index, y) {

	                                this._array[index * this._itemSize + 1] = y;

	                                return this;
	                        }
	                }, {
	                        key: 'getZ',
	                        value: function getZ(index) {

	                                return this._array[index * this._itemSize + 2];
	                        }
	                }, {
	                        key: 'setZ',
	                        value: function setZ(index, z) {

	                                this._array[index * this._itemSize + 2] = z;

	                                return this;
	                        }
	                }, {
	                        key: 'getW',
	                        value: function getW(index) {

	                                return this._array[index * this._itemSize + 3];
	                        }
	                }, {
	                        key: 'setW',
	                        value: function setW(index, w) {

	                                this._array[index * this._itemSize + 3] = w;

	                                return this;
	                        }
	                }, {
	                        key: 'setXYZ',
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
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var Component = function (_Bonnie3D$Object) {
	                _inherits(Component, _Bonnie3D$Object);

	                function Component(name) {
	                        _classCallCheck(this, Component);

	                        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, name));

	                        _this._node = new Bonnie3D.Node(name);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	        var Node = function (_Bonnie3D$Object) {
	                _inherits(Node, _Bonnie3D$Object);

	                function Node(name) {
	                        _classCallCheck(this, Node);

	                        var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, name));

	                        _this._position = new Bonnie3D.Vector3();
	                        return _this;
	                }

	                _createClass(Node, [{
	                        key: "addChild",
	                        value: function addChild(node) {}
	                }, {
	                        key: "addComponent",
	                        value: function addComponent(component) {}
	                }, {
	                        key: "position",
	                        get: function get() {

	                                return this._position;
	                        }
	                }]);

	                return Node;
	        }(Bonnie3D.Object);

	        Bonnie3D.Node = Node;
	})(undefined);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var BasicCamera = function (_Bonnie3D$Component) {
	        _inherits(BasicCamera, _Bonnie3D$Component);

	        function BasicCamera(name) {
	            _classCallCheck(this, BasicCamera);

	            var _this = _possibleConstructorReturn(this, (BasicCamera.__proto__ || Object.getPrototypeOf(BasicCamera)).call(this, name));

	            _this._projectionMatrix = new Bonnie3D.Matrix4();

	            return _this;
	        }

	        return BasicCamera;
	    }(Bonnie3D.Component);

	    Bonnie3D.BasicCamera = BasicCamera;
	})(undefined);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Camera = function (_Bonnie3D$BasicCamera) {
	                        _inherits(Camera, _Bonnie3D$BasicCamera);

	                        function Camera(name, fov, aspect, near, far) {
	                                    _classCallCheck(this, Camera);

	                                    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, name));

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

	                                                this._projectionMatrix.makePerspective(left, left + width, top, top - height, near, this._far);
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
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Geometry = function (_Bonnie3D$Object) {
	                        _inherits(Geometry, _Bonnie3D$Object);

	                        function Geometry() {
	                                    _classCallCheck(this, Geometry);

	                                    var _this = _possibleConstructorReturn(this, (Geometry.__proto__ || Object.getPrototypeOf(Geometry)).call(this, 'Geometry'));

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
	                                    key: 'applyMatrix',
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
	                                    key: 'computeBoundingBox',
	                                    value: function computeBoundingBox() {}
	                        }, {
	                                    key: 'computeBoundingSphere',
	                                    value: function computeBoundingSphere() {}
	                        }]);

	                        return Geometry;
	            }(Bonnie3D.Object);

	            Geometry.countId = 0;

	            Bonnie3D.Geometry = Geometry;
	})(undefined);

/***/ }),
/* 22 */
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
/* 23 */
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

	                                    var _this = _possibleConstructorReturn(this, (BufferGeometry.__proto__ || Object.getPrototypeOf(BufferGeometry)).call(this, 'BufferGeometry'));

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

	            Bonnie3D.BufferGeometry = BufferGeometry;
	})(undefined);

/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Material = function (_Bonnie3D$Object) {
	        _inherits(Material, _Bonnie3D$Object);

	        function Material() {
	            _classCallCheck(this, Material);

	            return _possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).apply(this, arguments));
	        }

	        return Material;
	    }(Bonnie3D.Object);

	    Bonnie3D.Material = Material;
	})(undefined);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var MeshBasicMaterial = function (_Bonnie3D$Material) {
	        _inherits(MeshBasicMaterial, _Bonnie3D$Material);

	        function MeshBasicMaterial() {
	            _classCallCheck(this, MeshBasicMaterial);

	            return _possibleConstructorReturn(this, (MeshBasicMaterial.__proto__ || Object.getPrototypeOf(MeshBasicMaterial)).apply(this, arguments));
	        }

	        return MeshBasicMaterial;
	    }(Bonnie3D.Material);

	    Bonnie3D.MeshBasicMaterial = MeshBasicMaterial;
	})(undefined);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Mesh = function (_Bonnie3D$Component) {
	        _inherits(Mesh, _Bonnie3D$Component);

	        function Mesh() {
	            _classCallCheck(this, Mesh);

	            return _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).apply(this, arguments));
	        }

	        return Mesh;
	    }(Bonnie3D.Component);

	    Bonnie3D.Mesh = Mesh;
	})(undefined);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGLExtensions = function WebGLExtensions(gl) {
	        _classCallCheck(this, WebGLExtensions);
	    };

	    Bonnie3D.WebGLExtensions = WebGLExtensions;
	})(undefined);

/***/ }),
/* 33 */
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
/* 34 */
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
/* 35 */
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

	                function Scene(name) {
	                        _classCallCheck(this, Scene);

	                        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, name));

	                        _this._valid = false;
	                        _this._objects = [];
	                        _this._renderer = Bonnie3D.WebGL2Renderer.getInstance();

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
	                        key: "add",
	                        value: function add(object) {
	                                if (object instanceof Bonnie3D.Component) {
	                                        this.addChild(object.node);
	                                } else if (object instanceof Bonnie3D.Node) {
	                                        this.addChild(object);
	                                }
	                        }
	                }, {
	                        key: "isValid",
	                        get: function get() {

	                                return this._valid;
	                        }
	                }, {
	                        key: "rootGameObjects",
	                        get: function get() {

	                                return this._objects;
	                        }
	                }]);

	                return Scene;
	        }(Bonnie3D.Node);

	        Bonnie3D.Scene = Scene;
	})(undefined);

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	            var Texture = function (_Bonnie3D$Object) {
	                        _inherits(Texture, _Bonnie3D$Object);

	                        function Texture(name, image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {
	                                    _classCallCheck(this, Texture);

	                                    var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this, name));

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

/***/ })
/******/ ]);