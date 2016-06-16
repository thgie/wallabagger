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
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 2);
	var toasts_1 = __webpack_require__(/*! ./components/toasts */ 3);
	var setup_1 = __webpack_require__(/*! ./setup */ 4);
	var setup = new setup_1.WallabagSetup(setup_1.WallabagSetupStorageType.ChromeStorage);
	ReactDOM.render(React.createElement(toasts_1.Toast, {toastText: "Loading wallabag API", toastType: toasts_1.ToastType.info}), document.getElementById("react-container"));
	setup.load().then(function (data) {
	    console.log("loaded");
	    ReactDOM.render(React.createElement(toasts_1.Toast, {toastText: "Loaded wallabag API", toastType: toasts_1.ToastType.info}), document.getElementById("react-container"));
	}).catch(function (error) {
	    ReactDOM.render(React.createElement(toasts_1.Toast, {toastText: "Error Loaded wallabag API " + error.message, toastType: toasts_1.ToastType.error}), document.getElementById("react-container"));
	    console.error(error);
	});


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./src/components/toasts.tsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 1);
	(function (ToastType) {
	    ToastType[ToastType["info"] = 0] = "info";
	    ToastType[ToastType["error"] = 1] = "error";
	})(exports.ToastType || (exports.ToastType = {}));
	var ToastType = exports.ToastType;
	var Toast = (function (_super) {
	    __extends(Toast, _super);
	    function Toast() {
	        _super.apply(this, arguments);
	    }
	    Toast.prototype.render = function () {
	        var toastClassName = "toast " + (this.props.toastType === ToastType.error ? "toast-danger" : "");
	        return React.createElement("div", {className: toastClassName, id: "info-toast"}, this.props.toastText);
	    };
	    return Toast;
	}(React.Component));
	exports.Toast = Toast;


/***/ },
/* 4 */
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	///<reference path="../typings/index.d.ts" />
	(function (WallabagSetupStorageType) {
	    WallabagSetupStorageType[WallabagSetupStorageType["LocalStorage"] = 0] = "LocalStorage";
	    WallabagSetupStorageType[WallabagSetupStorageType["ChromeStorage"] = 1] = "ChromeStorage";
	    WallabagSetupStorageType[WallabagSetupStorageType["File"] = 2] = "File";
	})(exports.WallabagSetupStorageType || (exports.WallabagSetupStorageType = {}));
	var WallabagSetupStorageType = exports.WallabagSetupStorageType;
	var WallabagSetup = (function () {
	    function WallabagSetup(storageType) {
	        this.storageType = storageType;
	    }
	    WallabagSetup.prototype.set = function (params) {
	        this.Url = params.Url;
	        this.ClientId = params.ClientId;
	        this.ClientSecret = params.ClientSecret;
	        this.UserLogin = params.UserLogin;
	        this.UserPassword = params.UserPassword;
	        this.ApiToken = params.ApiToken;
	        this.RefreshToken = params.RefreshToken;
	        this.ExpireDateMs = params.ExpireDateMs;
	    };
	    WallabagSetup.prototype.clear = function () {
	        this.Url = null;
	        this.ClientId = null;
	        this.ClientSecret = null;
	        this.UserLogin = null;
	        this.UserPassword = null;
	        this.ApiToken = null;
	        this.RefreshToken = null;
	        this.ExpireDateMs = null;
	    };
	    WallabagSetup.prototype.checkParams = function () {
	        return (this.ClientId !== "") && (this.ClientSecret !== "") &&
	            (this.UserLogin !== "") && (this.UserPassword !== "");
	    };
	    WallabagSetup.prototype.load = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            chrome.storage.local.get("wallabagdata", function (result) {
	                if (result.wallabagdata != null) {
	                    _this.set(result.wallabagdata);
	                    if (_this.checkParams()) {
	                        return resolve(_this);
	                    }
	                    else {
	                        _this.clear();
	                        return reject(new Error("Some parameters are empty. Check the settings"));
	                    }
	                }
	                else {
	                    _this.clear();
	                    return reject(new Error("Saved parameters not found. Check the settings"));
	                }
	            });
	        });
	    };
	    return WallabagSetup;
	}());
	exports.WallabagSetup = WallabagSetup;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map