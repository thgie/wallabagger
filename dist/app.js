/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const setup_1 = __webpack_require__(3);
	const react_redux_1 = __webpack_require__(5);
	const actions_1 = __webpack_require__(28);
	const store_1 = __webpack_require__(33);
	const consts_1 = __webpack_require__(29);
	const App_1 = __webpack_require__(37);
	__webpack_require__(48);
	__webpack_require__(52);
	__webpack_require__(57);
	store_1.store.dispatch(actions_1.setStatus(consts_1.EAppStatus.info, "Loading Wallabagger setup"));
	store_1.store.dispatch(actions_1.loading(setup_1.getSetup()));
	ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store_1.store}, React.createElement(App_1.default, null)), document.getElementById("root"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../typings/index.d.ts" />
	const utils_1 = __webpack_require__(4);
	exports.EmptySetup = {
	    Url: null,
	    ClientId: null,
	    ClientSecret: null,
	    UserLogin: null,
	    UserPassword: null,
	    ApiToken: null,
	    RefreshToken: null,
	    ExpireDateMs: null
	};
	(function (ESetupStorageType) {
	    ESetupStorageType[ESetupStorageType["Unknown"] = 0] = "Unknown";
	    ESetupStorageType[ESetupStorageType["LocalStorage"] = 1] = "LocalStorage";
	    ESetupStorageType[ESetupStorageType["ChromeStorage"] = 2] = "ChromeStorage";
	    ESetupStorageType[ESetupStorageType["File"] = 3] = "File";
	    ESetupStorageType[ESetupStorageType["Debug"] = 4] = "Debug";
	})(exports.ESetupStorageType || (exports.ESetupStorageType = {}));
	var ESetupStorageType = exports.ESetupStorageType;
	class WallabagSetup {
	    constructor(storageType) {
	        this.storageType = storageType;
	    }
	    set(params) {
	        Object.assign(this, params);
	        // this.Url = params.Url;
	        // this.ClientId = params.ClientId;
	        // this.ClientSecret = params.ClientSecret;
	        // this.UserLogin = params.UserLogin;
	        // this.UserPassword = params.UserPassword;
	        // this.ApiToken = params.ApiToken;
	        // this.RefreshToken = params.RefreshToken;
	        // this.ExpireDateMs = params.ExpireDateMs;
	    }
	    clear() {
	        Object.assign(this, exports.EmptySetup);
	        // this.Url = null;
	        // this.ClientId = null;
	        // this.ClientSecret = null;
	        // this.UserLogin = null;
	        // this.UserPassword = null;
	        // this.ApiToken = null;
	        // this.RefreshToken = null;
	        // this.ExpireDateMs = null;
	    }
	    checkParams() {
	        return (this.ClientId !== "") && (this.ClientSecret !== "") &&
	            (this.UserLogin !== "") && (this.UserPassword !== "");
	    }
	}
	exports.WallabagSetup = WallabagSetup;
	class WallabagSetupDebug extends WallabagSetup {
	    constructor() {
	        super(ESetupStorageType.Debug);
	    }
	    save() { }
	    loadSync() {
	        this.set({
	            Url: "https://wallabag2.wst174.ru",
	            ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
	            ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
	            UserLogin: "wallabag",
	            UserPassword: "PSNuPR19",
	            ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
	            RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
	            ExpireDateMs: 1468924084036
	        });
	        if (!this.checkParams()) {
	            this.clear();
	        }
	        ;
	    }
	    ;
	    load() {
	        return new Promise((resolve, reject) => {
	            this.set({
	                Url: "https://wallabag2.wst174.ru",
	                ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
	                ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
	                UserLogin: "wallabag",
	                UserPassword: "PSNuPR19",
	                ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
	                RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
	                ExpireDateMs: 1468924084036
	            });
	            if (this.checkParams()) {
	                return resolve(this);
	            }
	            else {
	                this.clear();
	                return reject(new Error("Some parameters are empty. Check the settings"));
	            }
	            ;
	        });
	    }
	}
	exports.WallabagSetupDebug = WallabagSetupDebug;
	class WallabagSetupChrome extends WallabagSetup {
	    constructor() {
	        super(ESetupStorageType.ChromeStorage);
	    }
	    save() {
	        chrome.storage.local.set({ "wallabagdata": this });
	    }
	    loadSync() { }
	    load() {
	        return new Promise((resolve, reject) => {
	            chrome.storage.local.get("wallabagdata", result => {
	                if (result.wallabagdata != null) {
	                    this.set(result.wallabagdata);
	                    if (this.checkParams()) {
	                        return resolve(this);
	                    }
	                    else {
	                        this.clear();
	                        return reject(new Error("Some parameters are empty. Check the settings"));
	                    }
	                }
	                else {
	                    this.clear();
	                    return reject(new Error("Saved parameters not found. Check the settings"));
	                }
	            });
	        });
	    }
	}
	exports.WallabagSetupChrome = WallabagSetupChrome;
	class WallabagSetupLocal extends WallabagSetup {
	    constructor() {
	        super(ESetupStorageType.LocalStorage);
	    }
	    save() {
	        localStorage["wallabagdata"] = JSON.stringify(this);
	    }
	    loadSync() { }
	    load() {
	        return new Promise((resolve, reject) => {
	            let result = localStorage["wallabagdata"];
	            if (result !== null) {
	                this.set(JSON.parse(result));
	                if (this.checkParams()) {
	                    return resolve(this);
	                }
	                else {
	                    this.clear();
	                    return reject(new Error("Some parameters are empty. Check the settings"));
	                }
	            }
	            else {
	                return reject(new Error("Error loading parameters from localStorage."));
	            }
	        });
	    }
	}
	exports.WallabagSetupLocal = WallabagSetupLocal;
	function getStorageType() {
	    return utils_1.isExtension() ? ESetupStorageType.ChromeStorage : utils_1.isDebug ? ESetupStorageType.Debug : ESetupStorageType.LocalStorage;
	}
	exports.getStorageType = getStorageType;
	exports.getSetup = () => utils_1.isExtension() ?
	    new WallabagSetupChrome() :
	    utils_1.isDebug ?
	        new WallabagSetupDebug() :
	        new WallabagSetupLocal();


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	exports.isDebug = true;
	exports.isExtension = () => (window.chrome.extension !== undefined);
	const testUrl = "https://habrahabr.ru/company/intel/blog/283066/";
	let activeChromeTab = () => new Promise((resolve, reject) => {
	    chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
	        if (tabs[0] != null) {
	            return resolve(tabs[0].url);
	        }
	        else {
	            return reject("active tab not found");
	        }
	    });
	});
	function getUrlToSave() {
	    return exports.isExtension() ? activeChromeTab() : new Promise((resolve, reject) => resolve(testUrl));
	}
	exports.getUrlToSave = getUrlToSave;
	function getUrlToSaveSync() {
	    if (exports.isExtension()) {
	        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
	            if (tabs[0] != null) {
	                return tabs[0].url;
	            }
	            else {
	                return "active tab not found";
	            }
	        });
	    }
	    else {
	        return testUrl;
	    }
	    ;
	}
	exports.getUrlToSaveSync = getUrlToSaveSync;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(6);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(10);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(8);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(9);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(8);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(11);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(12);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(9);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(15);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(26);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(27);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(13);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(14);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(21);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(23);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(24);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(15);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(19);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(16),
	    isHostObject = __webpack_require__(17),
	    isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(20)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(14);
	
	var _isPlainObject = __webpack_require__(15);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	const consts_1 = __webpack_require__(29);
	const ActionTypes = __webpack_require__(30);
	const wallabag_api_1 = __webpack_require__(31);
	const utils = __webpack_require__(4);
	const setStatus = (status, message) => ({
	    type: ActionTypes.SET_STATUS,
	    appStatus: status,
	    message: message
	});
	exports.setStatus = setStatus;
	function loading(setup) {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                dispatch(setStatus(consts_1.EAppStatus.info, "Setting API"));
	                yield setup.load();
	                const api = new wallabag_api_1.WallabagApi(setup);
	                dispatch(loadApi(api));
	                if (api.needNewAppToken) {
	                    dispatch(setStatus(consts_1.EAppStatus.info, "Obtaining new API token"));
	                    yield api.getAppToken();
	                    dispatch(setStatus(consts_1.EAppStatus.info, "Saving setup"));
	                    yield api.setup.save();
	                }
	                dispatch(setStatus(consts_1.EAppStatus.info, "Get page URL to save"));
	                const url = yield utils.getUrlToSave();
	                dispatch(setStatus(consts_1.EAppStatus.info, "Saving page to wallabag"));
	                const article = yield api.savePage(url);
	                dispatch(loadArticle(article));
	                dispatch(setStatus(consts_1.EAppStatus.article, ""));
	                const tags = yield getState().api.GetTags();
	                dispatch(loadTags(tags));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.loading = loading;
	;
	const loadArticle = (article) => ({
	    type: ActionTypes.SET_ARTICLE,
	    article: article
	});
	exports.loadArticle = loadArticle;
	const loadApi = (api) => ({
	    type: ActionTypes.SET_API,
	    api: api
	});
	exports.loadApi = loadApi;
	const loadTags = (tags) => ({
	    type: ActionTypes.SET_TAGS,
	    tags: tags
	});
	exports.loadTags = loadTags;
	const toggleEditMode = () => ({
	    type: ActionTypes.TOGGLE_EDIT
	});
	exports.toggleEditMode = toggleEditMode;
	const toggleHelpMode = () => ({
	    type: ActionTypes.TOGGLE_HELP
	});
	exports.toggleHelpMode = toggleHelpMode;
	const toggleDeleteMode = () => ({
	    type: ActionTypes.TOGGLE_DELETE
	});
	exports.toggleDeleteMode = toggleDeleteMode;
	function setTitle(title) {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const api = getState().api;
	                let article = getState().article;
	                article = yield api.saveTitle(article.id, title);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.setTitle = setTitle;
	;
	function setTags(tags) {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const api = getState().api;
	                let article = getState().article;
	                article = yield api.saveTagsStr(article.id, tags);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.setTags = setTags;
	;
	function deleteTag(tagId) {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const api = getState().api;
	                let article = getState().article;
	                article = yield api.DeleteArticleTag(article.id, tagId);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.deleteTag = deleteTag;
	;
	function toggleStarred() {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const api = getState().api;
	                let article = getState().article;
	                article = yield api.saveStarred(article.id, article.is_starred === 0);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	            ;
	        });
	    };
	}
	exports.toggleStarred = toggleStarred;
	;
	function toggleArchived() {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const api = getState().api;
	            let article = getState().article;
	            try {
	                article = yield api.saveArchived(article.id, article.is_archived === 0);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.toggleArchived = toggleArchived;
	;
	function deleteArticle() {
	    return function (dispatch, getState) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const api = getState().api;
	                let article = getState().article;
	                article = yield api.deleteArticle(article.id);
	                dispatch(loadArticle(article));
	            }
	            catch (error) {
	                dispatch(setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	            }
	        });
	    };
	}
	exports.deleteArticle = deleteArticle;
	;
	const gotoOriginalPage = () => {
	    return (dispatch, getState) => {
	        const article = getState().article;
	        if (utils.isExtension()) {
	            chrome.tabs.create({ url: article.url });
	            if (window !== null)
	                window.close;
	        }
	        else {
	            if (window !== null)
	                window.location.assign(article.url);
	        }
	        ;
	    };
	};
	exports.gotoOriginalPage = gotoOriginalPage;
	const gotoArticlePage = () => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        let url = `${api.setup.Url}/view/${article.id}`;
	        if (utils.isExtension()) {
	            chrome.tabs.create({ url: url });
	            if (window !== null)
	                window.close;
	        }
	        else {
	            if (window !== null)
	                window.location.assign(url);
	        }
	        ;
	    };
	};
	exports.gotoArticlePage = gotoArticlePage;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	(function (EAppStatus) {
	    EAppStatus[EAppStatus["unknown"] = 0] = "unknown";
	    EAppStatus[EAppStatus["info"] = 1] = "info";
	    EAppStatus[EAppStatus["error"] = 2] = "error";
	    EAppStatus[EAppStatus["article"] = 3] = "article";
	})(exports.EAppStatus || (exports.EAppStatus = {}));
	var EAppStatus = exports.EAppStatus;
	;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	exports.SET_STATUS = "SET_STATUS";
	exports.LOAD_SETUP_PENDING = "LOAD_SETUP_PENDING";
	exports.LOAD_SETUP_SUCCESS = "LOAD_SETUP_SUCCESS";
	exports.LOAD_SETUP_ERROR = "LOAD_SETUP_ERROR";
	exports.SET_API = "SET_API";
	exports.SET_ARTICLE = "SET_ARTICLE";
	exports.SET_TAGS = "SET_TAGS";
	exports.TOGGLE_EDIT = "TOGGLE_EDIT";
	exports.TOGGLE_HELP = "TOGGLE_HELP";
	exports.TOGGLE_DELETE = "TOGGLE_DELETE";


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const fetch_api_1 = __webpack_require__(32);
	exports.oauthPath = "/oauth/v2/token";
	exports.entriesPath = "/api/entries";
	exports.apiVersionPath = "/api/version";
	exports.formatEnd = ".json";
	const tagsPath = "/api/tags";
	;
	class WallabagApi {
	    constructor(parameters) {
	        this.setup = parameters;
	    }
	    isExpired() {
	        return (this.setup.ExpireDateMs != null) && (Date.now() > this.setup.ExpireDateMs);
	    }
	    needNewAppToken() {
	        return ((this.setup.ApiToken === "") ||
	            (this.setup.ApiToken === null) ||
	            this.isExpired());
	    }
	    getAppToken() {
	        let content = {
	            grant_type: "password",
	            client_id: this.setup.ClientId,
	            client_secret: this.setup.ClientSecret,
	            username: this.setup.UserLogin,
	            password: this.setup.UserPassword
	        };
	        let oauthurl = `${this.setup.Url}/oauth/v2/token`;
	        return fetch_api_1.Post(oauthurl, "", content)
	            .then((fetchData) => {
	            let nowDate = (new Date());
	            this.setup.ApiToken = fetchData.access_token;
	            this.setup.RefreshToken = fetchData.refresh_token;
	            this.setup.ExpireDateMs = nowDate.setSeconds(nowDate.getSeconds() + fetchData.expires_in);
	            return fetchData;
	        }).catch(error => {
	            throw new Error(`Failed to get app token from ${oauthurl}
	                ${error.message}`);
	        });
	    }
	    savePage(pageUrl) {
	        let content = { url: pageUrl.slice(-1) === "/" ? pageUrl : pageUrl + "/" };
	        let url = `${this.setup.Url}${exports.entriesPath}${exports.formatEnd}`;
	        return fetch_api_1.Post(url, this.setup.ApiToken, content)
	            .then((fetchData) => {
	            return fetchData;
	        }).catch(error => {
	            throw new Error(`Failed to save page at ${pageUrl} ${error.message}`);
	        });
	    }
	    saveTitle(articleId, articleTitle) {
	        return this.patchArticle(articleId, { title: articleTitle });
	    }
	    saveStarred(articleId, articleStarred) {
	        return this.patchArticle(articleId, { starred: articleStarred ? 1 : 0 });
	    }
	    saveArchived(articleId, articleArchived) {
	        return this.patchArticle(articleId, { archive: articleArchived ? 1 : 0 });
	    }
	    saveTags(articleId, taglist) {
	        return this.patchArticle(articleId, { tags: taglist.map(tag => tag.label).join(",") });
	    }
	    saveTagsStr(articleId, taglist) {
	        return this.patchArticle(articleId, { tags: taglist });
	    }
	    patchArticle(articleId, data) {
	        let url = `${this.setup.Url}${exports.entriesPath}/${articleId}${exports.formatEnd}`;
	        return fetch_api_1.Patch(url, this.setup.ApiToken, data)
	            .then((fetchData) => {
	            return fetchData;
	        }).catch(error => {
	            throw new Error(`Failed to save article id=${articleId} ${error.message}`);
	        });
	    }
	    deleteArticle(articleId) {
	        let url = `${this.setup.Url}${exports.entriesPath}/${articleId}${exports.formatEnd}`;
	        return fetch_api_1.Delete(url, this.setup.ApiToken)
	            .then((fetchData) => {
	            return fetchData;
	        }).catch(error => {
	            throw new Error(`Failed to delete article id=${articleId} ${error.message}`);
	        });
	    }
	    getApiVersion() {
	        let url = `${this.setup.Url}${exports.apiVersionPath}`;
	        return fetch_api_1.Get(url, "")
	            .then((fetchData) => { this.ApiVersion = fetchData; return fetchData; })
	            .catch((error) => {
	            throw new Error(`Failed to get api version ${url}
	                ${error.message}`);
	        });
	    }
	    GetTags() {
	        let entriesUrl = `${this.setup.Url}${tagsPath}${exports.formatEnd}`;
	        return fetch_api_1.Get(entriesUrl, this.setup.ApiToken)
	            .then((fetchData) => { return fetchData; })
	            .catch(error => {
	            throw new Error(`Failed to get tags ${entriesUrl}
	                ${error.message}`);
	        });
	    }
	    GetArticleTags(articleId) {
	        let entriesUrl = `${this.setup.Url}${exports.entriesPath}/${articleId}/tags${exports.formatEnd}`;
	        fetch_api_1.Get(entriesUrl, this.setup.ApiToken)
	            .then((fetchData) => { return fetchData; })
	            .catch(error => {
	            throw new Error(`Failed to get article tags ${entriesUrl}
	                ${error.message}`);
	        });
	        return [];
	    }
	    DeleteArticleTag(articleId, tagid) {
	        const url = `${this.setup.Url}/api/entries/${articleId}/tags/${tagid}.json`;
	        return fetch_api_1.Delete(url, this.setup.ApiToken)
	            .then((fetchData) => {
	            return fetchData;
	        }).catch(error => {
	            throw new Error(`Failed to delete article tag id=${articleId} tagid=${tagid} ${error.message}`);
	        });
	    }
	}
	exports.WallabagApi = WallabagApi;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	function checkStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	        return Promise.resolve(response);
	    }
	    ;
	    return Promise.reject(response.json());
	}
	function getJson(j) {
	    return j.json();
	}
	function getRequestOptions(rmethod, rheaders, content) {
	    let options = {
	        method: rmethod,
	        headers: rheaders,
	        mode: "cors",
	        cache: "default"
	    };
	    if ((content !== "") && (content != null)) {
	        options.body = content;
	    }
	    ;
	    return options;
	}
	function getNotAuhorizedHeaders() {
	    const headers = new Headers();
	    headers.append("Accept", "application/json");
	    headers.append("Content-Type", "application/json");
	    headers.append("Accept-Encoding", "gzip, deflate");
	    return headers;
	}
	function getAuhorizedHeaders(token) {
	    const headers = new Headers();
	    headers.append("Authorization", `Bearer ${token}`);
	    headers.append("Accept", "application/json");
	    headers.append("Content-Type", "application/json");
	    headers.append("Accept-Encoding", "gzip, deflate");
	    return headers;
	}
	function Patch(url, token, data) {
	    let content = JSON.stringify(data);
	    let rinit = getRequestOptions("PATCH", getAuhorizedHeaders(token), content);
	    return fetch(url, rinit).then(checkStatus).then(getJson);
	}
	exports.Patch = Patch;
	function Post(url, token, data) {
	    console.log(`Post ${url}`);
	    let content = JSON.stringify(data);
	    let rinit = getRequestOptions("POST", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), content);
	    return fetch(url, rinit).then(checkStatus).then(getJson);
	}
	exports.Post = Post;
	function Delete(url, token) {
	    let rinit = getRequestOptions("DELETE", getAuhorizedHeaders(token), "");
	    return fetch(url, rinit).then(checkStatus).then(getJson);
	}
	exports.Delete = Delete;
	function Get(url, token) {
	    let rinit = getRequestOptions("GET", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), "");
	    return fetch(url, rinit).then(checkStatus).then(getJson);
	}
	exports.Get = Get;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const redux_1 = __webpack_require__(13);
	const reducers_1 = __webpack_require__(34);
	const redux_thunk_1 = __webpack_require__(35);
	const createLogger = __webpack_require__(36);
	const logger = createLogger({
	    collapsed: true,
	});
	exports.store = redux_1.applyMiddleware(logger, redux_thunk_1.default)(redux_1.createStore)(reducers_1.default);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const ActionTypes = __webpack_require__(30);
	const consts_1 = __webpack_require__(29);
	const INITIAL_STATE = {
	    appStatus: consts_1.EAppStatus.unknown,
	    message: "",
	    api: {},
	    article: {},
	    tags: [],
	    editMode: false,
	    helpMode: false,
	    deleteMode: false
	};
	function rootReducer(state = INITIAL_STATE, action) {
	    switch (action.type) {
	        case ActionTypes.SET_STATUS:
	            return Object.assign({}, state, {
	                appStatus: action.appStatus,
	                message: action.message
	            });
	        case ActionTypes.SET_API:
	            return Object.assign({}, state, {
	                api: action.api });
	        case ActionTypes.SET_ARTICLE:
	            return Object.assign({}, state, {
	                article: action.article,
	                editMode: false });
	        case ActionTypes.SET_TAGS:
	            return Object.assign({}, state, {
	                tags: action.tags });
	        case ActionTypes.TOGGLE_EDIT:
	            return Object.assign({}, state, {
	                editMode: !state.editMode });
	        case ActionTypes.TOGGLE_HELP:
	            return Object.assign({}, state, {
	                helpMode: !state.helpMode });
	        case ActionTypes.TOGGLE_DELETE:
	            return Object.assign({}, state, {
	                deleteMode: !state.deleteMode });
	        default:
	            return state;
	    }
	}
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = rootReducer;


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */
	
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;
	
	  // exit if console undefined
	
	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }
	
	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;
	
	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;
	
	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	
	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }
	
	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	
	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }
	
	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }
	
	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }
	
	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }
	
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        printBuffer();
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const react_redux_1 = __webpack_require__(5);
	const consts_1 = __webpack_require__(29);
	const article_1 = __webpack_require__(38);
	const helpers_1 = __webpack_require__(40);
	const mapStateToProps = (state) => {
	    return {
	        appStatus: state.appStatus,
	        message: state.message
	    };
	};
	const App = ({ appStatus = consts_1.EAppStatus.unknown, message = "" }) => {
	    return React.createElement("div", null, appStatus === consts_1.EAppStatus.article && React.createElement(article_1.default, null), appStatus === consts_1.EAppStatus.info && React.createElement(helpers_1.ToastInfo, {text: message}), appStatus === consts_1.EAppStatus.error && React.createElement(helpers_1.ToastError, {text: message}));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps)(App);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const Picture_1 = __webpack_require__(39);
	const Title_1 = __webpack_require__(42);
	const domain_1 = __webpack_require__(44);
	const Icons_1 = __webpack_require__(45);
	const Tags_1 = __webpack_require__(46);
	const helpers_1 = __webpack_require__(40);
	const modals_1 = __webpack_require__(47);
	const Article = () => React.createElement(helpers_1.Card, null, React.createElement(helpers_1.CardHeader, null, React.createElement(Picture_1.default, null)), React.createElement(helpers_1.CardBody, null, React.createElement(Title_1.TitlePack, null)), React.createElement(helpers_1.CardFooter, null, React.createElement(domain_1.default, null), React.createElement(Icons_1.IconPack, null)), React.createElement(helpers_1.CardFooter, null, React.createElement(Tags_1.TagsPack, null)), React.createElement(modals_1.ConfirmDelete, null));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Article;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const react_redux_1 = __webpack_require__(5);
	const helpers_1 = __webpack_require__(40);
	const mapStateToProps = (state) => {
	    return {
	        url: state.article.preview_picture
	    };
	};
	const Picture = ({ url = "" }) => React.createElement(helpers_1.CardImage, null, React.createElement(helpers_1.ImgResponsive, {src: url}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps)(Picture);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const classnames = __webpack_require__(41);
	exports.ToastInfo = ({ text = "" }) => React.createElement("div", {className: "toast"}, text);
	exports.ToastError = ({ text = "" }) => React.createElement("div", {className: "toast toast-danger"}, text);
	// export const tooltip = (text: string) => (WrapedComponent: any) => <WrapedComponent {...this.props} data-tooltip={text}/>;
	exports.Tooltip = ({ tooltip = "", children = null }) => React.createElement("span", {className: "tooltip", "data-tooltip": tooltip}, children);
	exports.Card = (props) => React.createElement("div", __assign({className: "card"}, props));
	exports.CardHeader = (props) => React.createElement("div", __assign({className: "card-header"}, props));
	exports.CardFooter = (props) => React.createElement("div", __assign({className: "card-footer"}, props));
	exports.CardBody = (props) => React.createElement("div", __assign({className: "card-body"}, props));
	exports.CardImage = (props) => React.createElement("div", __assign({className: "card-image"}, props));
	exports.ImgResponsive = ({ src = "" }) => React.createElement("img", {src: src, className: "img-responsive"});
	exports.BigBlue = ({ children = null }) => React.createElement("span", {style: {
	    color: "#039be5",
	    fontFamily: "Roboto, sans-serif",
	    fontSize: "24px",
	    fontWeight: "300" }}, children);
	exports.Centered = ({ children = null }) => React.createElement("span", {className: "centered"}, children);
	exports.Grey = ({ children = null }) => React.createElement("span", {className: "card-meta"}, children);
	exports.Clickable = ({ children = null, onClick = null }) => React.createElement("span", {style: { cursor: "pointer" }, onClick: onClick}, children);
	exports.Left = ({ children = null }) => React.createElement("span", {className: "float-left"}, children);
	exports.Right = ({ children = null }) => React.createElement("span", {className: "float-right"}, children);
	exports.ShiftDown10 = ({ children = null }) => React.createElement("span", {className: "mt-10", style: { display: "inline-block" }}, children);
	exports.ShiftDown = ({ children = null }) => React.createElement("span", {style: { display: "inline-block", marginTop: "5px" }}, children);
	exports.ShiftRight = ({ children = null }) => React.createElement("span", {style: { marginLeft: "5px" }}, children);
	exports.Icn = ({ name = "", onClick = null, tooltip = "" }) => React.createElement("span", {className: classnames("icon", name, tooltip === "" ? "" : "tooltip"), onClick: onClick, "data-tooltip": tooltip});
	exports.FormAutocomplete = ({ children = null, tooltip = "" }) => React.createElement("div", {className: classnames("form-autocomplete", "md-10", tooltip === "" ? "" : "tooltip"), "data-tooltip": tooltip}, children);
	exports.FAInput = ({ children = null }) => React.createElement("div", {className: "form-autocomplete-input"}, children);
	exports.FAList = ({ children = null }) => React.createElement("ul", {className: "form-autocomplete-list"}, children);
	exports.Input = ({ placeholder = "", onChange = null, onKeyDown = null }) => React.createElement("input", {className: "form-input", type: "text", placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown});
	exports.Text = ({ value = "", onChange = null }) => React.createElement("textarea", {className: "form-input", rows: "3", value: value, onChange: onChange});
	exports.ButtonClear = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-clear", onClick: onClick}, children);
	exports.ButtonLink = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-link", onClick: onClick}, children);
	exports.ButtonPrimary = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-primary", onClick: onClick}, children);
	exports.Chip = ({ children = null }) => React.createElement("span", {className: "chip-sm chip-name"}, children);
	exports.Cross = ({ onClick = null }) => React.createElement("button", {className: "btn btn-clear", onClick: onClick});
	exports.FormAutocompleteTags = ({ icon = null, tags = null, foundTags = null, placeholder = "", onChange = null, onKeyDown = null, tooltip = "" }) => React.createElement("div", {className: classnames("form-autocomplete", "md-10", tooltip === "" ? "" : "tooltip"), "data-tooltip": tooltip}, React.createElement("div", {className: "form-autocomplete-input"}, React.createElement("span", {className: "mt-5", style: { display: "inline-block" }}, icon), tags, React.createElement("input", {className: "form-input", type: "text", placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown}), (foundTags === null) || (foundTags.length === 0) ? null :
	    React.createElement("ul", {className: "form-autocomplete-list"}, React.createElement("span", {className: "mt-5", style: { display: "inline-block" }}, React.createElement("span", {className: "float-left card-meta"}, "Tags found:")), foundTags)));
	exports.ModalTitle = ({ children = null }) => React.createElement("div", {className: "modal-title"}, children);
	exports.ModalCard = ({ children = null, active = false }) => React.createElement("div", {className: active ? "modal modal-sm active" : "modal modal-sm"}, React.createElement("div", {className: "modal-overlay"}), React.createElement("div", {className: "modal-container"}, children));
	exports.ModalHeader = ({ children = null }) => React.createElement("div", {className: "modal-header"}, children);
	exports.ModalBody = ({ children = null }) => React.createElement("div", {className: "modal-body"}, React.createElement("div", {className: "content"}, children));
	exports.ModalFooter = ({ children = null }) => React.createElement("div", {className: "modal-footer"}, children);
	;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const react_redux_1 = __webpack_require__(5);
	const H = __webpack_require__(40);
	const Actions = __webpack_require__(28);
	const Tootips = __webpack_require__(43);
	const Title = ({ title = "test title", helpMode = false, onClick = null }) => React.createElement(H.Tooltip, {tooltip: helpMode ? Tootips.TITLE_TOOLTIP : ""}, React.createElement(H.Clickable, {onClick: onClick}, React.createElement(H.BigBlue, null, title)));
	class TitleEdit extends React.Component {
	    constructor(props) {
	        super(props);
	        this.state = { title: props.title };
	    }
	    titleChange(e) {
	        this.setState({ title: e.target.value });
	    }
	    saveClick() {
	        const { Save } = this.props;
	        Save(this.state.title);
	    }
	    render() {
	        const { title, Cancel } = this.props;
	        return React.createElement("div", null, React.createElement(H.Text, {value: this.state.title, onChange: this.titleChange.bind(this)}), React.createElement(H.ButtonLink, {onClick: this.saveClick.bind(this)}, "Save"), React.createElement(H.ButtonLink, {onClick: Cancel}, "Cancel"));
	    }
	}
	function mapStateToPropsTitle(state) {
	    return {
	        editMode: state.editMode,
	        helpMode: state.helpMode,
	        title: state.article.title
	    };
	}
	;
	function mapDispatchToPropsTitle(dispatch) {
	    return {
	        onCancelClick: () => { dispatch(Actions.toggleEditMode()); },
	        onSaveClick: (title) => { dispatch(Actions.setTitle(title)); },
	        onClick: () => { dispatch(Actions.gotoArticlePage()); }
	    };
	}
	const TitlePck = ({ editMode = false, helpMode = false, title = "", onSaveClick = null, onCancelClick = null, onClick = null }) => {
	    return editMode
	        ? React.createElement(TitleEdit, {title: title, Save: onSaveClick, Cancel: onCancelClick})
	        : React.createElement(Title, {title: title, helpMode: helpMode, onClick: onClick});
	};
	const TitlePack = react_redux_1.connect(mapStateToPropsTitle, mapDispatchToPropsTitle)(TitlePck);
	exports.TitlePack = TitlePack;


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	exports.TAGS_TOOLTIP = "Type new tag, end with ',' ';' space or enter. Right arrow enumerates found tags. To delete tag click cross";
	exports.HELP_TOOLTIP = "Toggle help tooltips";
	exports.DELETE_TOOLTIP = "Click to delete article";
	exports.FAVORITE_TOOLTIP = "Click to toggle favorite";
	exports.ARCHIVE_TOOLTIP = "Click to toggle archived";
	exports.EDIT_TOOLTIP = "Click to edit title";
	exports.DOMAIN_TOOLTIP = "Click to open original page";
	exports.TITLE_TOOLTIP = "Click to open saved article";


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const H = __webpack_require__(40);
	const react_redux_1 = __webpack_require__(5);
	const Actions = __webpack_require__(28);
	function mapStateToProps(state) {
	    return {
	        domainName: state.article.domain_name,
	        helpMode: state.helpMode
	    };
	}
	;
	function mapDispatchToProps(dispatch) {
	    return {
	        onClick: () => { dispatch(Actions.gotoOriginalPage()); }
	    };
	}
	class Domain extends React.Component {
	    render() {
	        const { onClick, domainName } = this.props;
	        return React.createElement(H.Grey, null, React.createElement(H.Clickable, {onClick: onClick}, domainName));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Domain);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const H = __webpack_require__(40); // { Grey, Clickable, Icn, ShiftDown, ShiftRight, Right }
	const Actions = __webpack_require__(28); // { toggleHelpMode, toggleStarred, toggleArchived, deleteArticle, toggleEditMode }
	const react_redux_1 = __webpack_require__(5);
	const Tooltips = __webpack_require__(43);
	// ----------------------------------------------
	// IconPack 
	function mapStateToPropsIcons(state) {
	    return {
	        is_archived: state.article.is_archived,
	        is_starred: state.article.is_starred,
	        deleteMode: state.deleteMode,
	        helpMode: state.helpMode
	    };
	}
	;
	function mapDispatchToPropsIcons(dispatch) {
	    return {
	        onTrashClick: () => { dispatch(Actions.toggleDeleteMode()); },
	        onEditClick: () => { dispatch(Actions.toggleEditMode()); },
	        onArchivedClick: () => { dispatch(Actions.toggleArchived()); },
	        onStarredClick: () => { dispatch(Actions.toggleStarred()); },
	        onHelpClick: () => { dispatch(Actions.toggleHelpMode()); }
	    };
	}
	const IconPck = ({ deleteMode = false, onTrashClick = null, onEditClick = null, helpMode = false, onHelpClick = null, is_archived = false, onArchivedClick = null, is_starred = false, onStarredClick = null }) => React.createElement(H.Right, null, React.createElement(H.ShiftDown, null, React.createElement(EditIcon, {onClick: onEditClick, tooltip: helpMode ? Tooltips.ARCHIVE_TOOLTIP : ""}), React.createElement(ArchiveIcon, {checked: is_archived, onClick: onArchivedClick, tooltip: helpMode ? Tooltips.ARCHIVE_TOOLTIP : ""}), React.createElement(StarredIcon, {checked: is_starred, onClick: onStarredClick, tooltip: helpMode ? Tooltips.FAVORITE_TOOLTIP : ""}), React.createElement(TrashIcon, {checked: deleteMode, onClick: onTrashClick, tooltip: helpMode ? Tooltips.DELETE_TOOLTIP : ""}), React.createElement(HelpIcon, {checked: helpMode, onClick: onHelpClick, tooltip: helpMode ? Tooltips.HELP_TOOLTIP : ""})));
	const IconPack = react_redux_1.connect(mapStateToPropsIcons, mapDispatchToPropsIcons)(IconPck);
	exports.IconPack = IconPack;
	// ----------------------------------------------
	// base Icon
	const Icon = ({ iconName = "", onClick = null, tooltip = "" }) => React.createElement(H.ShiftRight, null, React.createElement(H.Grey, null, React.createElement(H.Clickable, null, React.createElement(H.Icn, {name: iconName, onClick: onClick, tooltip: tooltip}))));
	// ----------------------------------------------
	// Edit icon 
	const EditIcon = ({ onClick = null, tooltip = "" }) => React.createElement(Icon, {iconName: "icon-pencil", onClick: onClick, tooltip: tooltip});
	// ----------------------------------------------
	// Trash icon 
	const TrashIcon = ({ checked = false, onClick = null, tooltip = "" }) => React.createElement(Icon, {iconName: checked ? "icon-bin2" : "icon-bin", onClick: onClick, tooltip: tooltip});
	// ----------------------------------------------
	// Archived icon 
	const ArchiveIcon = ({ checked = false, onClick = null, tooltip = "" }) => React.createElement(Icon, {iconName: checked ? "icon-checkmark" : "icon-checkmark2", onClick: onClick, tooltip: tooltip});
	// ----------------------------------------------
	// Starred icon 
	const StarredIcon = ({ checked = false, onClick = null, tooltip = "" }) => React.createElement(Icon, {iconName: checked ? "icon-star2" : "icon-star", onClick: onClick, tooltip: tooltip});
	// ----------------------------------------------
	// Help icon 
	const HelpIcon = ({ checked = false, onClick = null, tooltip = "" }) => React.createElement(Icon, {iconName: checked ? "icon-help2" : "icon-help", tooltip: tooltip, onClick: onClick});
	// ----------------------------------------------
	const TagsIcon = ({ tooltip = "" }) => React.createElement(Icon, {iconName: "icon-tags", tooltip: tooltip});
	exports.TagsIcon = TagsIcon;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const react_redux_1 = __webpack_require__(5);
	const Icons_1 = __webpack_require__(45);
	const H = __webpack_require__(40);
	const Actions = __webpack_require__(28);
	const Tooltips = __webpack_require__(43);
	function mapStateToPropsTags(state) {
	    return {
	        articleTags: state.article.tags,
	        allTags: state.tags,
	        helpMode: state.helpMode
	    };
	}
	;
	function mapDispatchToPropsTags(dispatch) {
	    return {
	        onSaveTags: (tags) => { dispatch(Actions.setTags(tags)); },
	        onDeleteTag: (tagId) => { dispatch(Actions.deleteTag(tagId)); }
	    };
	}
	const TagsPck = ({ articleTags = [], allTags = [], helpMode = false, onSaveTags = null, onDeleteTag = null }) => React.createElement(Tags, {articleTags: articleTags, allTags: allTags, helpMode: helpMode, onSaveTags: onSaveTags, onDeleteTag: onDeleteTag});
	const TagsPack = react_redux_1.connect(mapStateToPropsTags, mapDispatchToPropsTags)(TagsPck);
	exports.TagsPack = TagsPack;
	class Tag extends React.Component {
	    constructor(...args) {
	        super(...args);
	        this.onclick = (e) => {
	            if ((this.props.onClick !== null) && (this.props.onClick !== undefined))
	                this.props.onClick(this.props.tag.id);
	        };
	        this.deleteClick = (e) => {
	            this.props.onDelete(this.props.tag.id);
	        };
	    }
	    render() {
	        const { tag, closable } = this.props;
	        return React.createElement(H.Clickable, {onClick: this.onclick}, React.createElement(H.Chip, null, tag.label, closable ? React.createElement(H.Cross, {onClick: this.deleteClick}) : null));
	    }
	}
	class Tags extends React.Component {
	    constructor(props) {
	        super(props);
	        this.state = { foundTags: [], tagsSrt: props.articleTags.map(tag => tag.label).join(","), search: "", index: -1 };
	        this.tagExists = this.tagExists.bind(this);
	        this.onchange = this.onchange.bind(this);
	        this.onkeydown = this.onkeydown.bind(this);
	        this.onfoundTagClick = this.onfoundTagClick.bind(this);
	        this.ondeletetag = this.ondeletetag.bind(this);
	        this.saveHtml = this.saveHtml.bind(this);
	    }
	    saveHtml(param) {
	        const map = { "&": "&amp;", "\'": "&#039;", "\"": "&quot;", "<": "&lt;", ">": "&gt;" };
	        return param.replace(/[<'&">]/g, symb => map[symb]);
	    }
	    onchange(e) {
	        const inputValue = e.currentTarget.value;
	        const lastChar = inputValue.slice(-1);
	        if ((lastChar !== ",") && (lastChar !== ";") && (lastChar !== " ")) {
	            this.setState(Object.assign(this.state, { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" : ","}${inputValue}`,
	                foundTags: this.props.allTags.filter(tag => (this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1)
	                    && (this.state.search.length >= 3 && tag.label.indexOf(this.state.search) !== -1)
	                    || (this.state.search === tag.label) && (!this.tagExists(this.state.search)))
	            }));
	        }
	    }
	    tagExists(tag) {
	        return (this.props.articleTags.map(t => t.label)
	            .indexOf(tag) !== -1);
	    }
	    onkeydown(e) {
	        const keyCode = e.keyCode;
	        const key = e.key;
	        const element = e.currentTarget;
	        const value = element.value;
	        const cursorAtEnd = value.slice(0, element.selectionStart).length === value.length;
	        if ((keyCode === 32 || keyCode === 13 || key === "," || key === ";")
	            && (!this.tagExists(value))) {
	            e.currentTarget.value = "";
	            this.setState(Object.assign(this.state, { foundTags: [] }));
	            this.props.onSaveTags(this.saveHtml(this.state.tagsSrt));
	            return;
	        }
	        if ((key === "ArrowRight") && (this.state.foundTags.length > 0) && (cursorAtEnd)) {
	            const { foundTags, index } = this.state;
	            const ftag = foundTags[foundTags.length - 1 > index + 1 ? index + 1 : foundTags.length - 1];
	            e.currentTarget.value = ftag.label;
	            this.onchange(e);
	            this.setState(Object.assign(this.state, { index: index + 1 }));
	            return;
	        }
	        this.setState(Object.assign(this.state, { search: value + key, index: -1 }));
	    }
	    onfoundTagClick(id) {
	        const ftag = this.state.foundTags.filter(tag => tag.id === id)[0];
	        const tsrt = `${this.props.articleTags.map(tag => tag.label).join(",")},${ftag.label}`;
	        this.props.onSaveTags(tsrt);
	    }
	    ondeletetag(id) {
	        //    this.setState( Object.assign(this.state,
	        //    { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" :","}${inputValue}`,
	        //     foundTags: this.props.allTags.filter(tag =>
	        //               ( this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1 )
	        //           &&  ( inputValue.length >= 3 && tag.label.indexOf(inputValue) !== -1)
	        //           || (inputValue === tag.label) && ( ! this.tagExists(inputValue) )
	        //     )
	        //       }) );
	    }
	    render() {
	        const { foundTags } = this.state;
	        const { articleTags, onDeleteTag, helpMode } = this.props;
	        return React.createElement(H.FormAutocompleteTags, {tooltip: helpMode ? Tooltips.TAGS_TOOLTIP : "", icon: React.createElement(Icons_1.TagsIcon, null), tags: articleTags.map(tag => React.createElement(Tag, {tag: tag, closable: true, key: tag.id, onDelete: onDeleteTag})), foundTags: (foundTags === null) || (foundTags.length === 0) ? null
	            : foundTags.map(tag => React.createElement(Tag, {tag: tag, closable: false, key: tag.id, onClick: this.onfoundTagClick})), placeholder: "type tags here", onChange: this.onchange, onKeyDown: this.onkeydown});
	    }
	}
	;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(1);
	const H = __webpack_require__(40);
	const Actions = __webpack_require__(28);
	const react_redux_1 = __webpack_require__(5);
	const mapStateToProps = (state) => ({ Active: state.deleteMode });
	const mapDispatchToProps = (dispatch) => ({
	    onYesClick: () => { dispatch(Actions.deleteArticle()); },
	    onNoClick: () => { dispatch(Actions.toggleDeleteMode()); }
	});
	const ConfirmDelete_ = ({ Active = false, onYesClick = null, onNoClick = null }) => React.createElement(Confirm, {title: "Please confirm delete", question: "Are you sure?", YesNo: false, Active: Active, onYesClick: onYesClick, onNoClick: onNoClick});
	const ConfirmDelete = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete_);
	exports.ConfirmDelete = ConfirmDelete;
	const Confirm = ({ title = "", question = "", YesNo = false, Active = false, onYesClick = null, onNoClick = null }) => React.createElement(H.ModalCard, {active: Active}, React.createElement(H.ModalHeader, null, React.createElement(H.Right, null, React.createElement(H.ButtonClear, {onClick: onNoClick})), React.createElement(H.ModalTitle, null, title)), React.createElement(H.ModalBody, null, React.createElement(H.ShiftDown10, null, React.createElement(H.Centered, null, React.createElement("h4", null, question)))), YesNo
	    ? React.createElement(H.ModalFooter, null, React.createElement(H.ButtonPrimary, {onClick: onYesClick}, "Yes"), React.createElement(H.ButtonLink, {onClick: onNoClick}, "No"))
	    : React.createElement(H.ModalFooter, null, React.createElement(H.ButtonLink, {onClick: onYesClick}, "Yes"), React.createElement(H.ButtonPrimary, {onClick: onNoClick}, "No")));
	exports.Confirm = Confirm;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./popup.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n    width: 450px;\r\n    overflow: hidden;\r\n    padding: 3px;\r\n}\r\n\r\n.chip-sm {\r\n    margin-left: 5px;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./icomoon.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./icomoon.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'icomoon';\n  src:\n    url(" + __webpack_require__(54) + ") format('truetype'),\n    url(" + __webpack_require__(55) + ") format('woff'),\n    url(" + __webpack_require__(56) + "#icomoon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-star:before {\n  content: \"\\E900\";\n}\n.icon-star2:before {\n  content: \"\\E901\";\n}\n.icon-bin:before {\n  content: \"\\E902\";\n}\n.icon-bin2:before {\n  content: \"\\E903\";\n}\n.icon-help:before {\n  content: \"\\E904\";\n}\n.icon-help2:before {\n  content: \"\\E905\";\n}\n.icon-pencil:before {\n  content: \"\\E906\";\n}\n.icon-pencil2:before {\n  content: \"\\E907\";\n}\n.icon-tag:before {\n  content: \"\\E908\";\n}\n.icon-tag2:before {\n  content: \"\\E909\";\n}\n.icon-tags:before {\n  content: \"\\E90A\";\n}\n.icon-tags2:before {\n  content: \"\\E90B\";\n}\n.icon-checkmark:before {\n  content: \"\\E90C\";\n}\n.icon-checkmark2:before {\n  content: \"\\E90D\";\n}\n\n", ""]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d65d8393daff10d4c9a95d7b1348d0d6.ttf";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "101a40b4b3952749179946554b830187.woff";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5563af685c9914a918276c996f90634c.svg";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./spectre.min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./spectre.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v4.2.0 | MIT License | github.com/necolas/normalize.css */progress,sub,sup{vertical-align:baseline}button,hr,input{overflow:visible}html,legend{box-sizing:border-box}pre,textarea{overflow:auto}blockquote p:last-child,pre code{margin-bottom:0}.btn-group .btn:focus,.btn-group .btn:hover,.input-group .form-input:focus,.input-group .input-group-addon:focus,.input-group .input-group-btn:focus{z-index:99}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects;color:#5764c6;text-decoration:underline}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline dotted;text-decoration:underline}.breadcrumb .breadcrumb-item a,.btn,.chip-sm,.menu .menu-item,.menu .menu-item a,.tab .tab-item a{text-decoration:none}b,strong{font-weight:bolder}dfn{font-style:italic}h1{margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.btn,.chip .chip-content,.chip-sm .chip-name,.label,.text-clip,.text-ellipsis,code{white-space:nowrap}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}*,::after,::before{box-sizing:inherit}html{font-size:10px;line-height:1.42857143;-webkit-tap-highlight-color:transparent}body{margin:0;background:#fff;color:#333;font-family:\"Helvetica Neue\",\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"Hiragino Kaku Gothic Pro\",Meiryo,\"Malgun Gothic\",sans-serif;font-size:1.4rem;overflow-x:hidden}a:focus,a:hover{color:#283176}.disabled,[disabled]{cursor:default;opacity:.75;pointer-events:none}.btn,.form-switch,.hand{cursor:pointer}.btn .icon,.menu .icon,.toast .icon{font-size:1.3333em;line-height:.8em;margin-right:.2rem;vertical-align:-20%}pre,pre code{line-height:1.8rem}h1,h2,h3,h4,h5,h6{color:inherit;font-weight:300;line-height:1.1;margin-bottom:1.5rem;margin-top:2.5rem}h1{font-size:5rem}h2{font-size:4rem}h3{font-size:3rem}h4{font-size:2.4rem}h5{font-size:2rem}h6{font-size:1.6rem}p{margin:0 0 1rem}blockquote{border-left:.2rem solid #ddd;margin-left:0;padding:1rem 2rem}blockquote cite{color:#b3b3b3}ol,ul{margin:2rem 0 2rem 2rem;padding:0}ol ol,ol ul,ul ol,ul ul{margin:1.5rem 0 1.5rem 2rem}ol li,ul li{margin-top:1rem}ul{list-style:disc inside}ul ul{list-style-type:circle}ol{list-style:decimal inside}ol ol{list-style-type:lower-alpha}dl dt{font-weight:700}dl dd{margin:.5rem 0 1.5rem}.lead{font-size:120%}.highlight,code,mark{border-radius:.2rem;display:inline;font-size:1em;padding:.1em .3em;vertical-align:baseline}.highlight,mark{background:#ffe5a3}pre{background:#f9f9f9;border-left:.2rem solid #5764c6;margin-bottom:1em;margin-top:1em;padding:1.5rem}code{background:#efefef}.btn,.form-select{vertical-align:middle}pre code{background:0 0;border-left:0;margin-top:0}.btn,.form-input{line-height:1.6rem;-webkit-appearance:none;outline:0}.img-responsive{display:block;height:auto;max-width:100%}.video-responsive{height:0;overflow:hidden;padding-bottom:56.25%;padding-top:3rem;position:relative}.video-responsive embed,.video-responsive iframe,.video-responsive object{height:100%;left:0;position:absolute;top:0;width:100%}.video-responsive video{height:auto;max-width:100%;width:100%}.video-responsive-4-3{padding-bottom:75%}.table{border-collapse:collapse;border-spacing:0;width:100%}.table.table-striped tbody tr:nth-of-type(odd){background:#fcfcfc}.table.table-hover tbody tr:hover{background:#f4f4f4}.table.table-hover tbody tr.selected{background:#f2f2f2}.table td,.table th{border-bottom:.1rem solid #efefef;padding:1.5rem 1rem;text-align:left}.btn,.empty{text-align:center}.table th{border-color:#c9c9c9}.btn{background:0 0;border:.1rem solid #5764c6;border-radius:.3rem;color:#5764c6;display:inline-block;font-size:1.4rem;height:3.2rem;padding:.7rem 1.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus{background:#f3f4fb}.btn:hover{background:#5764c6;border-color:#4452c0;color:#fff}.btn.active,.btn:active{background:#4452c0;border-color:#3b49af;color:#fff}.btn.btn-primary{background:#5764c6;border-color:#4452c0;color:#fff}.btn.btn-primary:focus{background:#4f5dc3}.btn.btn-primary:hover{background:#4452c0;border-color:#3b49af;color:#fff}.btn.btn-primary.active,.btn.btn-primary:active{background:#3b49af;border-color:#35419c;color:#fff}.btn.btn-primary.loading::after{border-color:transparent transparent #fff #fff}.btn.btn-link{background:0 0;border-color:transparent;color:#5764c6}.btn.btn-link:focus,.btn.btn-link:hover{color:#35419c}.btn.btn-link.active,.btn.btn-link:active{color:#283176}.btn.btn-sm{border-radius:.2rem;font-size:1.2rem;height:2.4rem;line-height:1.4rem;padding:.4rem 1rem}.btn.btn-lg{border-radius:.4rem;font-size:1.8rem;height:4.2rem;line-height:2rem;padding:1rem 1.8rem}.btn.btn-block{display:block;width:100%}.btn.btn-clear{background:0 0;border:0;color:#666;height:2rem;margin-left:.3rem;opacity:.45;padding:0}.btn.btn-clear:hover{opacity:.85}.btn.btn-clear::before{content:\"\\D7\";font-size:2rem}.btn-group{display:inline-flex;display:-ms-inline-flexbox;display:-webkit-inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.btn-group .btn{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.btn-group .btn:first-child:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group .btn:not(:first-child):not(:last-child){border-radius:0;margin-left:-.1rem}.btn-group .btn:last-child:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-.1rem}.btn-group.btn-group-block{display:flex;display:-ms-flexbox;display:-webkit-flex}.form-group:not(:last-child){margin-bottom:1rem}.form-input{background:#fff;border:.1rem solid #c5c5c5;border-radius:.3rem;color:#333;display:block;font-size:1.4rem;height:3.2rem;max-width:100%;padding:.7rem .8rem;position:relative;width:100%}.form-input:focus{border-color:#5764c6}.form-input[disabled]{background:#eeeff2}.form-input.input-sm{border-radius:.2rem;font-size:1.2rem;height:2.4rem;padding:.3rem .6rem}.form-input.input-lg{border-radius:.4rem;font-size:1.6rem;height:4.2rem;line-height:2rem;padding:1rem .8rem}.form-input.input-inline{display:inline-block;vertical-align:middle;width:auto}textarea.form-input{height:auto;line-height:2rem}.form-input.is-success,.has-success .form-input{border-color:#32b643}.form-input.is-danger,.has-danger .form-input{border-color:#e85600}.form-label{display:block;line-height:1.6rem;margin-bottom:.5rem}.form-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.1rem solid #c5c5c5;border-radius:.3rem;font-size:1.4rem;line-height:1.6rem;outline:0;padding:.5rem .8rem}.form-select:not([multiple]){background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) right .75rem center/.8rem 1rem no-repeat #fff;height:3.2rem;padding-right:2.4rem}.form-select:focus{border-color:#5764c6}.form-select::-ms-expand{display:none}.form-select.select-sm{border-radius:.2rem;font-size:1.2rem;height:2.4rem;padding:.4rem 2rem .4rem .6rem}.form-select.select-lg{font-size:1.6rem;height:4.2rem;line-height:2rem;padding:1rem 2.4rem 1rem .8rem}.form-checkbox input,.form-radio input,.form-switch input{clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;position:absolute;width:1px}.form-checkbox input:focus+.form-icon,.form-radio input:focus+.form-icon,.form-switch input:focus+.form-icon{box-shadow:0 0 .3rem .1rem #efefef}.form-checkbox,.form-radio{cursor:pointer;display:inline-block;line-height:1.8rem;padding:.3rem 2rem;position:relative}.form-checkbox .form-icon,.form-radio .form-icon{border:.1rem solid #c5c5c5;display:inline-block;font-size:1.4rem;height:1.4rem;left:0;line-height:2.4rem;outline:0;padding:0;position:absolute;top:.5rem;transition:all .15s ease;vertical-align:top;width:1.4rem}.form-checkbox:hover .form-icon,.form-radio:hover .form-icon{border-color:#9f9f9f}.form-checkbox input:checked+.form-icon,.form-radio input:checked+.form-icon{background:#5764c6;border-color:#5764c6}.form-checkbox .form-icon{border-radius:.2rem}.form-checkbox input:checked+.form-icon::after{background-clip:padding-box;border:.2rem solid #fff;border-left-width:0;border-top-width:0;content:\"\";height:1rem;left:50%;margin-left:-.3rem;margin-top:-.6rem;position:absolute;top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:.6rem}.form-radio .form-icon{border-radius:.7rem}.form-radio input:checked+.form-icon::after{background:#fff;border-radius:.2rem;content:\"\";height:.4rem;left:50%;margin-left:-.2rem;margin-top:-.2rem;position:absolute;top:50%;width:.4rem}.form-switch{display:inline-block;line-height:1.8rem;padding:.3rem 2rem .3rem 3.6rem;position:relative}.form-switch .form-icon{background:#c5c5c5;background-clip:padding-box;border:.1rem solid #c5c5c5;border-radius:.9rem;display:inline-block;height:1.6rem;left:0;line-height:2.4rem;outline:0;padding:0;position:absolute;top:.4rem;vertical-align:top;width:2.6rem}.form-switch .form-icon::after{background:#fff;border-radius:.8rem;content:\"\";display:block;height:1.4rem;left:0;position:absolute;top:0;transition:left .15s ease;width:1.4rem}.form-switch input:checked+.form-icon{background:#5764c6;border-color:#5764c6}.form-switch input:checked+.form-icon::after{left:1rem}.input-group{display:flex;display:-ms-flexbox;display:-webkit-flex}.input-group .input-group-addon{background:#f9f9f9;border:.1rem solid #c5c5c5;border-radius:.3rem;line-height:1.6rem;padding:.7rem .8rem}.input-group .input-group-addon.addon-sm{font-size:1.2rem;padding:.3rem .6rem}.input-group .input-group-addon.addon-lg{font-size:1.6rem;line-height:2rem;padding:1rem .8rem}.input-group .input-group-addon,.input-group .input-group-btn{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.input-group .form-input:first-child:not(:last-child),.input-group .input-group-addon:first-child:not(:last-child),.input-group .input-group-btn:first-child:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.input-group .form-input:not(:first-child):not(:last-child),.input-group .input-group-addon:not(:first-child):not(:last-child),.input-group .input-group-btn:not(:first-child):not(:last-child){border-radius:0;margin-left:-.1rem}.input-group .form-input:last-child:not(:first-child),.input-group .input-group-addon:last-child:not(:first-child),.input-group .input-group-btn:last-child:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-.1rem}.container{margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;width:100%}@media screen and (min-width:980px){.grid-960{width:98rem}}@media screen and (min-width:500px){.grid-480{width:50rem}}.columns{display:flex;display:-ms-flexbox;display:-webkit-flex;margin-left:-1rem;margin-right:-1rem}.columns.col-gapless{margin-left:0;margin-right:0}.columns.col-gapless .column{padding-left:0;padding-right:0}.columns.col-multiline{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem}.column.col-1,.column.col-10,.column.col-11,.column.col-12,.column.col-2,.column.col-3,.column.col-4,.column.col-5,.column.col-6,.column.col-7,.column.col-8,.column.col-9{-webkit-flex:none;-ms-flex:none;flex:none}.col-12{width:100%}.col-11{width:91.66666667%}.col-10{width:83.33333333%}.col-9{width:75%}.col-8{width:66.66666667%}.col-7{width:58.33333333%}.col-6{width:50%}.col-5{width:41.66666667%}.col-4{width:33.33333333%}.col-3{width:25%}.col-2{width:16.66666667%}.col-1{width:8.33333333%}@media screen and (min-width:481px){.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{-webkit-flex:none;-ms-flex:none;flex:none}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}}@media screen and (min-width:601px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{-webkit-flex:none;-ms-flex:none;flex:none}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}}@media screen and (min-width:841px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{-webkit-flex:none;-ms-flex:none;flex:none}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.form-horizontal{padding:1rem}.form-horizontal .form-group{display:flex;display:-ms-flexbox;display:-webkit-flex}.form-horizontal .form-label{margin-bottom:0;padding:.8rem .4rem}.form-horizontal .form-checkbox,.form-horizontal .form-radio{margin:.5rem 0}}.chip,.chip-sm{-webkit-align-items:center}@media screen and (max-width:480px){.columns{display:block}.columns .column{width:100%}.hide-xs{display:none!important}}@media screen and (max-width:600px){.hide-sm{display:none!important}}@media screen and (max-width:840px){.hide-md{display:none!important}}@media screen and (max-width:960px){.hide-lg{display:none!important}}@media screen and (max-width:1280px){.hide-xl{display:none!important}}.empty{background:#f8f8f8;border-radius:.3rem;padding:4rem}.empty .empty-title{font-size:1.8rem;margin:1.5rem 0 .5rem}.empty .empty-meta{color:#888}.empty .empty-action{margin-top:1.5rem}.avatar{border-radius:50%;display:inline-block;font-size:1.4rem;font-weight:300;height:3.2rem;line-height:1;margin:0;position:relative;vertical-align:middle;width:3.2rem}.avatar.avatar-xs{font-size:.8rem;height:1.6rem;width:1.6rem}.avatar.avatar-sm{font-size:1rem;height:2.4rem;width:2.4rem}.avatar.avatar-lg{font-size:2rem;height:4.8rem;width:4.8rem}.avatar.avatar-xl{font-size:2.6rem;height:6.4rem;width:6.4rem}.avatar img{border-radius:50%;height:100%;width:100%}.avatar .avatar-icon{background:#fff;bottom:-.2em;height:50%;padding:5%;position:absolute;right:-.2em;width:50%}.avatar[data-initial]::after{color:#fff;content:attr(data-initial);left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes slide-down{0%{margin-top:-3rem;opacity:0}100%{margin-top:0;opacity:1}}@keyframes slide-down{0%{margin-top:-3rem;opacity:0}100%{margin-top:0;opacity:1}}.form-autocomplete{position:relative}.form-autocomplete .form-autocomplete-input{background:#fff;border:.1rem solid #c5c5c5;border-radius:.3rem;color:#333;display:block;font-size:1.4rem;line-height:1.6rem;max-width:100%;min-height:3.2rem;outline:0;padding:.3rem .3rem 0;width:100%}.form-autocomplete .form-autocomplete-input .chip-sm{margin-bottom:.3rem}.form-autocomplete .form-autocomplete-input .form-input{background:#fff;border-color:transparent;display:inline-block;height:2.4rem;margin-bottom:.3rem;padding:.3rem;vertical-align:top;width:auto}.form-autocomplete .form-autocomplete-list{background:#fff;border:.1rem solid #d2d2d2;border-radius:.3rem;box-shadow:0 .1rem .2rem rgba(0,0,0,.15);display:block;height:auto;left:0;margin:.3rem 0 0;padding:.5rem;position:absolute;top:100%;width:100%;z-index:1988}.menu,.modal-container,.shadow{box-shadow:0 .1rem .4rem rgba(0,0,0,.3)}.form-autocomplete .form-autocomplete-item{border-radius:.3rem;display:block;margin-top:.1rem;padding:.2rem 1rem}.form-autocomplete .form-autocomplete-item:focus,.form-autocomplete .form-autocomplete-item:hover{background:#fff}.form-autocomplete .form-autocomplete-item.active{background:#eff1fa}.badge{position:relative}.badge[data-badge]::after{background:#5764c6;background-clip:padding-box;border:.1rem solid #fff;border-radius:1rem;color:#fff;content:attr(data-badge);display:inline-block;font-size:1.1rem;height:1.8rem;line-height:1.2rem;min-width:1.8rem;padding:.2rem .5rem;text-align:center;-webkit-transform:translate(-.2rem,-.8rem);transform:translate(-.2rem,-.8rem);white-space:nowrap}.card,.menu{display:block;z-index:999}.card,.menu,.text-left{text-align:left}.card{background:#fff;border:.1rem solid #efefef;border-radius:.3rem;margin:0;padding:0}.card .card-body,.card .card-footer,.card .card-header{padding:1.5rem 1.5rem 0}.card .card-body:last-child,.card .card-footer:last-child,.card .card-header:last-child{padding-bottom:1.5rem}.card .card-image{padding-top:1.5rem}.card .card-image:first-child{padding-top:0}.card .card-image:first-child img{border-top-left-radius:.3rem;border-top-right-radius:.3rem}.card .card-image:last-child img{border-bottom-left-radius:.3rem;border-bottom-right-radius:.3rem}.card .card-title{font-size:1.4em;line-height:1;margin-bottom:.5rem;margin-top:0}.card .card-meta{color:#b3b3b3;font-size:1em;margin-bottom:0;margin-top:0}.chip{-webkit-align-content:space-around;align-content:space-around;align-items:center;border:.1rem solid transparent;border-radius:.3rem;display:flex;display:-ms-flexbox;display:-webkit-flex;-ms-flex-align:center;-ms-flex-line-pack:distribute;list-style:none;margin:0;padding:.5rem 0}.chip .chip-icon{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.chip .chip-content{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;padding:0 1rem;text-overflow:ellipsis}.chip .chip-action{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.chip .chip-title{font-size:1.4rem}.chip .chip-meta{color:#b3b3b3;font-size:1.2rem}.chip-sm{align-items:center;background:#eff1fa;border-radius:.3rem;color:#666;display:-ms-inline-flexbox;display:inline-flex;display:-webkit-inline-flex;-ms-flex-align:center;font-size:1.2rem;height:2.4rem;max-width:100%;padding:.3rem .6rem;vertical-align:middle}.chip-sm:focus,.chip-sm:hover{background:#e8eaf7}.chip-sm .btn-clear{margin-top:-.2rem}.chip-sm .btn-clear::before{color:#3b49af;font-size:1.6rem}.chip-sm.selected{background:#5764c6;color:#fff}.chip-sm.selected .btn-clear::before{color:#eff1fa}.chip-sm .chip-name{margin-left:.4rem;overflow:hidden;text-overflow:ellipsis}.chip-sm .avatar{font-size:.8rem;height:1.6rem;width:1.6rem}.label{background:#efefef;border-radius:.2rem;color:#666;display:inline;font-size:1em;padding:.1em .3em;vertical-align:baseline}.menu,.menu .menu-item,.menu .menu-item a,.modal-container,.tooltip::after{border-radius:.3rem}.label.label-primary{background:#5764c6;border-color:#4f5dc3;color:#fff}.label.label-primary a{color:#fff}.label.label-primary a:active,.label.label-primary a:focus,.label.label-primary a:hover{opacity:.75}.menu{background:#fff;margin:0;padding:.5rem}.menu .menu-header,.menu .menu-item,.menu .menu-item a{display:block;padding:.2rem 1rem}.menu .menu-item{color:#333;line-height:2.4rem;margin-top:.1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu .menu-item a{color:inherit;margin:-.2rem -1rem}.menu .menu-item a:focus,.menu .menu-item a:hover{color:#5764c6}.menu .menu-item a.active,.menu .menu-item a:active{background:#eff1fa;color:#4452c0}.menu .menu-header{color:#ccc;font-size:1.2rem;line-height:1.8rem;margin-top:0}.menu .menu-header .menu-header-text{background:#fff;display:inline-block;margin-left:-.6rem;padding:0 .6rem;position:relative;z-index:99}.menu .menu-header::after{border-bottom:.1rem solid #efefef;content:\"\";display:block;height:.1rem;-webkit-transform:translateY(-1rem);transform:translateY(-1rem);width:100%}.modal{-webkit-align-items:center;align-items:center;bottom:0;display:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-grid-row-align:center;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0}.modal.active{display:flex;display:-ms-flexbox;display:-webkit-flex;opacity:1;z-index:1988}.toast.toast-danger a:active,.toast.toast-danger a:focus,.toast.toast-danger a:hover,.toast.toast-primary a:active,.toast.toast-primary a:focus,.toast.toast-primary a:hover,.toast.toast-success a:active,.toast.toast-success a:focus,.toast.toast-success a:hover{opacity:.75}.modal.active .modal-overlay{background:rgba(0,0,0,.75);bottom:0;display:block;left:0;position:absolute;right:0;top:0}.modal.active .modal-container{-webkit-animation:slide-down .216s;animation:slide-down .216s}.modal-container{-webkit-animation:slide-up .216s;animation:slide-up .216s;background:#fff;display:block;margin:0 auto;padding:0;text-align:left;z-index:1988}.modal-container .modal-header{padding:1.5rem}.modal-container .modal-header .modal-title{font-size:1.5rem;margin:0}.modal-container .modal-body{max-height:50vh;overflow-y:auto;padding:1.5rem;position:relative}.modal-container .modal-footer{padding:1.5rem;text-align:right}@media screen and (min-width:640px){.modal-container{width:64rem}}@media screen and (min-width:320px){.modal-sm .modal-container{width:32rem}}.breadcrumb,.pagination,.tab{list-style:none;margin:.5rem 0}.breadcrumb{padding:1.2rem}.breadcrumb .breadcrumb-item{display:inline-block;margin:0}.breadcrumb .breadcrumb-item:last-child,.breadcrumb .breadcrumb-item:last-child a{color:#666;pointer-events:none}.breadcrumb .breadcrumb-item:not(:last-child)::after{color:#c5c5c5;content:\"/\";padding:0 .4rem}.tab{border-bottom:.1rem solid #c5c5c5;display:flex;display:-ms-flexbox;display:-webkit-flex}.tab .tab-item{margin-bottom:-.1rem;margin-top:0}.tab .tab-item a{border-bottom:.2rem solid transparent;color:#333;display:block;padding:.5rem 1.5rem}.pagination,.pagination .page-item,.pagination .page-item a{display:inline-block}.tab .tab-item a:focus,.tab .tab-item a:hover{border-bottom-color:#5764c6;color:#5764c6}.tab .tab-item.active a{border-bottom-color:#3b49af;color:#3b49af}.tab.tab-block .tab-item{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;text-align:center}.tab.tab-block .tab-item .badge[data-badge]::after{position:absolute;right:1.5rem;top:.6rem;-webkit-transform:translate(50%,-.8rem);transform:translate(50%,-.8rem)}.pagination{padding:1.2rem}.pagination .page-item span{display:inline-block;padding:.6rem .5rem}.pagination .page-item a{border-radius:.3rem;margin:0 .1rem;padding:.6rem 1.2rem;text-decoration:none}.pagination .page-item a:focus,.pagination .page-item a:hover{background:#eff1fa}.pagination .page-item.active a{background:#5764c6;color:#fff}.toast{background:#efefef;border:.1rem solid #eaeaea;border-radius:.3rem;color:#666;display:block;padding:1.4rem;width:100%}.toast.toast-danger,.toast.toast-danger .btn-clear,.toast.toast-danger a,.toast.toast-primary .btn-clear,.toast.toast-primary a,.toast.toast-success,.toast.toast-success .btn-clear,.toast.toast-success a,.tooltip::after{color:#fff}.toast.toast-primary{background:#5764c6;border-color:#4f5dc3;color:#fff}.toast.toast-success{background:#32b643;border-color:#30ae40}.toast.toast-danger{background:#e85600;border-color:#de5200}.tooltip{position:relative}.tooltip::after{background:rgba(51,51,51,.9);bottom:100%;content:attr(data-tooltip);display:block;font-size:1.2rem;left:50%;line-height:1.6rem;max-width:32rem;opacity:0;overflow:hidden;padding:.6rem 1rem;pointer-events:none;position:absolute;text-overflow:ellipsis;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);transition:all .216s ease;z-index:99}.tooltip:focus::after,.tooltip:hover::after{opacity:1;-webkit-transform:translate(-50%,-.5rem);transform:translate(-50%,-.5rem)}.tooltip.disabled,.tooltip[disabled]{pointer-events:auto}.tooltip.tooltip-right::after{bottom:50%;left:100%;-webkit-transform:translate(0,50%);transform:translate(0,50%)}.tooltip.tooltip-right:focus::after,.tooltip.tooltip-right:hover::after{-webkit-transform:translate(.5rem,50%);transform:translate(.5rem,50%)}.tooltip.tooltip-bottom::after{bottom:auto;top:100%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.tooltip.tooltip-bottom:focus::after,.tooltip.tooltip-bottom:hover::after{-webkit-transform:translate(-50%,.5rem);transform:translate(-50%,.5rem)}.tooltip.tooltip-left::after{bottom:50%;left:auto;right:100%;-webkit-transform:translate(0,50%);transform:translate(0,50%)}.tooltip.tooltip-left:focus::after,.tooltip.tooltip-left:hover::after{-webkit-transform:translate(-.5rem,50%);transform:translate(-.5rem,50%)}.clearfix::after,.container::after{clear:both;content:\"\";display:table}.block,.centered{display:block}.float-left{float:left!important}.float-right{float:right!important}.rel{position:relative}.abs{position:absolute}.fixed{position:fixed}.centered{float:none;margin-left:auto;margin-right:auto}.mt-10{margin-top:1rem}.mr-10{margin-right:1rem}.mb-10{margin-bottom:1rem}.ml-10{margin-left:1rem}.mt-5{margin-top:.5rem}.mr-5{margin-right:.5rem}.mb-5{margin-bottom:.5rem}.ml-5{margin-left:.5rem}.pt-10{padding-top:1rem}.pr-10{padding-right:1rem}.pb-10{padding-bottom:1rem}.pl-10{padding-left:1rem}.pt-5{padding-top:.5rem}.pr-5{padding-right:.5rem}.pb-5{padding-bottom:.5rem}.pl-5{padding-left:.5rem}.inline{display:inline}.inline-block{display:inline-block}.flex{display:flex;display:-ms-flexbox;display:-webkit-flex}.inline-flex{display:inline-flex;display:-ms-inline-flexbox;display:-webkit-inline-flex}.hide{display:none!important}.visible{visibility:visible}.invisible{visibility:hidden}.text-hide{background:0 0;border:0;color:transparent;font:0/0 a;text-shadow:none}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-normal{font-weight:400}.text-bold{font-weight:700}.text-italic{font-style:italic}.text-ellipsis{overflow:hidden;text-overflow:ellipsis}.text-clip{overflow:hidden;text-overflow:clip}.text-break{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word;word-wrap:break-word}.light-shadow{box-shadow:0 .1rem .2rem rgba(0,0,0,.15)}.rounded{border-radius:.3rem}.circle{border-radius:50%}.divider{border-bottom:.1rem solid #efefef;display:block;margin:.5rem}.loading{color:transparent!important;min-height:1.6rem;pointer-events:none;position:relative}.loading::after{-webkit-animation:loading .5s infinite linear;animation:loading .5s infinite linear;border:.2rem solid #5764c6;border-radius:.8rem;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1.6rem;left:50%;margin-left:-.8rem;margin-top:-.8rem;position:absolute;top:50%;width:1.6rem}", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map