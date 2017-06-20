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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	window["Bonnie3D"] = window["Bonnie3D"] || {};

/***/ }),
/* 2 */
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
/* 3 */
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

	                console.info("INFO: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	            }
	        }, {
	            key: "debug",
	            value: function debug() {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                if (Log.level) console.log("DEBUG: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	            }
	        }, {
	            key: "warning",
	            value: function warning() {
	                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                    args[_key3] = arguments[_key3];
	                }

	                console.warn("WARNING: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	            }
	        }, {
	            key: "error",
	            value: function error() {
	                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                    args[_key4] = arguments[_key4];
	                }

	                console.error("ERROR: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
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

	                console.log("ALERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	                alert("ALERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	            })
	        }, {
	            key: "trace",
	            value: function trace() {
	                for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                    args[_key6] = arguments[_key6];
	                }

	                console.trace("TRACE: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
	            }
	        }, {
	            key: "assert",
	            value: function assert(condition) {
	                if (condition === false) {
	                    for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	                        args[_key7 - 1] = arguments[_key7];
	                    }

	                    console.trace("ASSERT: " + new (Function.prototype.bind.apply(Bonnie3D.StringFormat, [null].concat(args)))());
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
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var Object = function Object() {
	        _classCallCheck(this, Object);
	    };

	    Bonnie3D.Object = Object;
	})(undefined);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {

	    var Log = Bonnie3D.Log;

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
	                    Log.debug("callback : " + Application.getInstance()._intervalId);
	                    if (!Application.isPlaying) {

	                        //do main loop
	                        if (Bonnie3D.SceneManager.currentScene) {
	                            var scene = Bonnie3D.SceneManager.currentScene;
	                            scene.update();
	                            scene.render();
	                        }

	                        var app = Application.getInstance();
	                        if (app._intervalId) window.cancelAnimationFrame(app._intervalId);
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
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Node = function (_Bonnie3D$Object) {
	        _inherits(Node, _Bonnie3D$Object);

	        function Node() {
	            _classCallCheck(this, Node);

	            return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).apply(this, arguments));
	        }

	        return Node;
	    }(Bonnie3D.Object);

	    Bonnie3D.Node = Node;
	})(undefined);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Component = function (_Bonnie3D$Object) {
	        _inherits(Component, _Bonnie3D$Object);

	        function Component() {
	            _classCallCheck(this, Component);

	            return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	        }

	        return Component;
	    }(Bonnie3D.Object);

	    Bonnie3D.Component = Component;
	})(undefined);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function ($) {
	    var Geometry = function (_Bonnie3D$Object) {
	        _inherits(Geometry, _Bonnie3D$Object);

	        function Geometry() {
	            _classCallCheck(this, Geometry);

	            return _possibleConstructorReturn(this, (Geometry.__proto__ || Object.getPrototypeOf(Geometry)).apply(this, arguments));
	        }

	        return Geometry;
	    }(Bonnie3D.Object);

	    Bonnie3D.Geometry = Geometry;
	})(undefined);

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
	    var WebGL2Renderer = function WebGL2Renderer() {
	        _classCallCheck(this, WebGL2Renderer);
	    };

	    Bonnie3D.WebGL2Renderer = WebGL2Renderer;
	})(undefined);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {

	    var Log = Bonnie3D.Log;

	    var Scene = function () {
	        function Scene(name) {
	            _classCallCheck(this, Scene);

	            this._name = name;
	            this._valid = false;
	            this._objects = [];
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
	    }();

	    Bonnie3D.Scene = Scene;
	})(undefined);

/***/ }),
/* 13 */
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
	                this._current = new Bonnie3D.Scene(scene);
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

/***/ })
/******/ ]);