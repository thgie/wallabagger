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
	///<reference path="../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const ReactDOM = __webpack_require__(/*! react-dom */ 2);
	// import { InfoToast, ErrorToast } from "./components/toasts";
	const setup_1 = __webpack_require__(/*! ./setup */ 3);
	// import { Article, IArticleProps } from "./components/article";
	const actions_1 = __webpack_require__(/*! ./actions */ 5);
	const store_1 = __webpack_require__(/*! ./store */ 10);
	const consts_1 = __webpack_require__(/*! ./consts */ 6);
	// const { Provider } = require('react-redux');
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const App_1 = __webpack_require__(/*! ./components/App */ 37);
	store_1.store.dispatch(actions_1.setStatus(consts_1.EAppStatus.info, "Loading Wallabagger setup"));
	store_1.store.dispatch(actions_1.loading(setup_1.getSetup()));
	ReactDOM.render(React.createElement("div", null, React.createElement(react_redux_1.Provider, {store: store_1.store}, React.createElement(App_1.default, null))), document.getElementById("root"));
	// store.dispatch(setArticleUrl(getUrlToSaveSync()));
	// let state = (store.getState() as IAppState);
	// if ( state.appStatus !== EAppStatus.error ) {
	//     store.dispatch(setApi(new WallabagApi( state.setup )));
	// }
	// if ((store.getState() as IAppState).api.needNewAppToken) {
	//    store.dispatch(getToken());
	// }
	// else {
	// };
	// let api: WallabagApi ;
	// ReactDOM.render(
	//     <InfoToast toastText="Loading wallabag API"/>,
	//     document.getElementById("react-container")
	// );
	// let apiAuthorised = setup.load().then( (data: IWallabagSetup) => {
	//     console.log("setup loaded");
	//     store.dispatch( loadSetup( data ) );
	//     api = new WallabagApi( data );
	//     if (api.needNewAppToken) {
	//         ReactDOM.render(
	//             <InfoToast toastText="Obtaining wallabag api token"/>,
	//             document.getElementById("react-container")
	//         );
	//         return api.getAppToken();
	//     }
	//     return "OK";
	// })
	// .then( data => {
	//     setup.set(api.setup);
	//     setup.save();
	// } )
	// .catch(error => {
	//     ReactDOM.render(
	//         <ErrorToast toastText={error.message}/>,
	//         document.getElementById("react-container")
	//     );
	//     console.error(error);
	// });
	// apiAuthorised.then(data => getUrlToSave() )
	// .then(url => {
	//     console.log( url );
	//     ReactDOM.render(
	//         <InfoToast toastText="Saving the page to wallabag"/>,
	//         document.getElementById("react-container")
	//     );
	//     return api.savePage(url);
	// })
	// .then(data => {
	//     ReactDOM.render(
	//         <Article data={data as IWallabagArticle} api={api}/>, document.getElementById("react-container")
	//     );
	// })
	// .catch(error => {
	//     ReactDOM.render(
	//         <ErrorToast toastText={error.message}/>,
	//         document.getElementById("react-container")
	//     );
	//     console.error(error);
	// });


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
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../typings/index.d.ts" />
	const utils_1 = __webpack_require__(/*! ./utils */ 4);
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
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
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
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const consts_1 = __webpack_require__(/*! ../consts */ 6);
	const ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 7);
	const wallabag_api_1 = __webpack_require__(/*! ../wallabag-api */ 8);
	const utils = __webpack_require__(/*! ../utils */ 4);
	exports.setStatus = (status, message) => ({
	    type: ActionTypes.SET_STATUS,
	    appStatus: status,
	    message: message
	});
	exports.loading = (setup) => {
	    return (dispatch, getState) => {
	        dispatch(exports.setStatus(consts_1.EAppStatus.info, "Setting API"));
	        return setup.load()
	            .then((setup) => {
	            let api = new wallabag_api_1.WallabagApi(setup);
	            dispatch(exports.loadApi(api));
	            dispatch(exports.setStatus(consts_1.EAppStatus.info, "Wallabagger setup loaded"));
	            return api;
	        })
	            .then((api) => {
	            if (api.needNewAppToken) {
	                dispatch(exports.setStatus(consts_1.EAppStatus.info, "Obtaining new API token"));
	                return api.getAppToken().then((s) => {
	                    return api;
	                });
	            }
	            return api;
	        })
	            .then((api) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.info, "Saving setup"));
	            api.setup.save();
	            return api;
	        })
	            .then((api) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.info, "Get page URL to save"));
	            return utils.getUrlToSave();
	        })
	            .then((url) => {
	            //                     console.log(`msg - ${getState().get("message")}`);
	            dispatch(exports.setStatus(consts_1.EAppStatus.info, "Saving page to wallabag"));
	            return getState().api.savePage(url);
	        })
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	            dispatch(exports.setStatus(consts_1.EAppStatus.article, ""));
	        })
	            .then((a) => {
	            return getState().api.GetTags();
	        })
	            .then((tags) => {
	            dispatch(exports.loadTags(tags));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.loadArticle = (article) => ({
	    type: ActionTypes.SET_ARTICLE,
	    article: article
	});
	exports.loadApi = (api) => ({
	    type: ActionTypes.SET_API,
	    api: api
	});
	exports.loadTags = (tags) => ({
	    type: ActionTypes.SET_TAGS,
	    tags: tags
	});
	exports.toggleEditMode = () => ({
	    type: ActionTypes.TOGGLE_EDIT
	});
	exports.toggleHelpMode = () => ({
	    type: ActionTypes.TOGGLE_HELP
	});
	exports.toggleDeleteMode = () => ({
	    type: ActionTypes.TOGGLE_DELETE
	});
	exports.setTitle = (title) => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.saveTitle(article.id, title)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.setTags = (tags) => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.saveTagsStr(article.id, tags)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.deleteTag = (tagId) => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.DeleteArticleTag(article.id, tagId)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.toggleStarred = () => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.saveStarred(article.id, article.is_starred === 0)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.toggleArchived = () => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.saveArchived(article.id, article.is_archived === 0)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.deleteArticle = () => {
	    return (dispatch, getState) => {
	        const api = getState().api;
	        const article = getState().article;
	        api.deleteArticle(article.id)
	            .then((article) => {
	            dispatch(exports.loadArticle(article));
	        })
	            .then(a => {
	            if ((utils.isExtension()) && (window !== null))
	                window.close;
	        })
	            .catch((error) => {
	            dispatch(exports.setStatus(consts_1.EAppStatus.error, `Error: ${error.message}`));
	        });
	    };
	};
	exports.gotoOriginalPage = () => {
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
	exports.gotoArticlePage = () => {
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


/***/ },
/* 6 */
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
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
/* 7 */
/*!**************************************!*\
  !*** ./src/constants/ActionTypes.ts ***!
  \**************************************/
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
/* 8 */
/*!*****************************!*\
  !*** ./src/wallabag-api.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const fetch_api_1 = __webpack_require__(/*! ./fetch-api */ 9);
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
/* 9 */
/*!**************************!*\
  !*** ./src/fetch-api.ts ***!
  \**************************/
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
/* 10 */
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const redux_1 = __webpack_require__(/*! redux */ 11);
	const reducers_1 = __webpack_require__(/*! ../reducers */ 25);
	const redux_thunk_1 = __webpack_require__(/*! redux-thunk */ 26);
	const createLogger = __webpack_require__(/*! redux-logger */ 27);
	const logger = createLogger({
	    collapsed: true,
	});
	exports.store = redux_1.applyMiddleware(logger, redux_thunk_1.default)(redux_1.createStore)(reducers_1.default);


/***/ },
/* 11 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 20);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 22);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 23);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 24);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 21);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 12)))

/***/ },
/* 12 */
/*!**************************************!*\
  !*** (webpack)/~/process/browser.js ***!
  \**************************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
/* 13 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 18);
	
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
/* 14 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(/*! ./_getPrototype */ 15),
	    isHostObject = __webpack_require__(/*! ./_isHostObject */ 16),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 17);
	
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
/* 15 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
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
/* 16 */
/*!***********************************!*\
  !*** ./~/lodash/_isHostObject.js ***!
  \***********************************/
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
/* 17 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
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
/* 18 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(/*! ./ponyfill */ 19)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/*!*****************************************!*\
  !*** ./~/symbol-observable/ponyfill.js ***!
  \*****************************************/
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
/* 20 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 21);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 12)))

/***/ },
/* 21 */
/*!**************************************!*\
  !*** ./~/redux/lib/utils/warning.js ***!
  \**************************************/
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
/* 22 */
/*!*******************************************!*\
  !*** ./~/redux/lib/bindActionCreators.js ***!
  \*******************************************/
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
/* 23 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 24);
	
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
/* 24 */
/*!********************************!*\
  !*** ./~/redux/lib/compose.js ***!
  \********************************/
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
/* 25 */
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 7);
	const consts_1 = __webpack_require__(/*! ../consts */ 6);
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
/* 26 */
/*!************************************!*\
  !*** ./~/redux-thunk/lib/index.js ***!
  \************************************/
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
/* 27 */
/*!*************************************!*\
  !*** ./~/redux-logger/lib/index.js ***!
  \*************************************/
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
/* 28 */
/*!************************************!*\
  !*** ./~/react-redux/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(/*! ./components/Provider */ 29);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(/*! ./components/connect */ 32);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 29 */
/*!**************************************************!*\
  !*** ./~/react-redux/lib/components/Provider.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 30);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 31);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 12)))

/***/ },
/* 30 */
/*!***********************************************!*\
  !*** ./~/react-redux/lib/utils/storeShape.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 31 */
/*!********************************************!*\
  !*** ./~/react-redux/lib/utils/warning.js ***!
  \********************************************/
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
/* 32 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/components/connect.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 30);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ 33);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(/*! ../utils/wrapActionCreators */ 34);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ 35);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(/*! invariant */ 36);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 12)))

/***/ },
/* 33 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/utils/shallowEqual.js ***!
  \*************************************************/
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
/* 34 */
/*!*******************************************************!*\
  !*** ./~/react-redux/lib/utils/wrapActionCreators.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(/*! redux */ 11);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 35 */
/*!********************************************!*\
  !*** ./~/hoist-non-react-statics/index.js ***!
  \********************************************/
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
/* 36 */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 12)))

/***/ },
/* 37 */
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const consts_1 = __webpack_require__(/*! ../consts */ 6);
	const toasts_1 = __webpack_require__(/*! ./toasts */ 38);
	const article_1 = __webpack_require__(/*! ./article */ 39);
	const mapStateToProps = (state) => {
	    return {
	        appStatus: state.appStatus,
	        message: state.message
	    };
	};
	class App extends React.Component {
	    render() {
	        const { appStatus, message } = this.props;
	        return React.createElement("div", null, appStatus === consts_1.EAppStatus.info || appStatus === consts_1.EAppStatus.error
	            ? React.createElement(toasts_1.default, {appStatus: appStatus, message: message}) : null, appStatus === consts_1.EAppStatus.article ?
	            React.createElement(article_1.default, null) : null);
	    }
	}
	App.displayName = "ApplicationRoot";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps)(App);


/***/ },
/* 38 */
/*!***********************************!*\
  !*** ./src/components/toasts.tsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const consts_1 = __webpack_require__(/*! ../consts */ 6);
	const Toast = ({ appStatus = consts_1.EAppStatus.unknown, message = "" }) => React.createElement("div", {className: `toast ${appStatus === consts_1.EAppStatus.error ? "toast-danger" : ""}`}, message);
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Toast;


/***/ },
/* 39 */
/*!************************************!*\
  !*** ./src/components/article.tsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const Picture_1 = __webpack_require__(/*! ./Picture */ 40);
	const Title_1 = __webpack_require__(/*! ./Title */ 43);
	const Domain_1 = __webpack_require__(/*! ./Domain */ 44);
	const Icons_1 = __webpack_require__(/*! ./Icons */ 45);
	const Tags_1 = __webpack_require__(/*! ./Tags */ 46);
	const H = __webpack_require__(/*! ./helpers */ 41);
	const modals_1 = __webpack_require__(/*! ./modals */ 47);
	const Article = () => React.createElement(H.Card, null, React.createElement(Picture_1.default, null), React.createElement(Title_1.TitlePack, null), React.createElement(H.CardFooter, null, React.createElement(Domain_1.Domain, null), React.createElement(Icons_1.IconPack, null)), React.createElement(H.CardFooter, null, React.createElement(Tags_1.TagsPack, null)), React.createElement(modals_1.ConfirmDelete, null));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Article;


/***/ },
/* 40 */
/*!************************************!*\
  !*** ./src/components/Picture.tsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const helpers_1 = __webpack_require__(/*! ./helpers */ 41);
	const mapStateToProps = (state) => ({ url: state.article.preview_picture });
	const Picture_ = ({ url = "img/wallabag-icon-128.png" }) => React.createElement(helpers_1.CardImage, null, React.createElement(helpers_1.ImgResponsive, {src: url}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps)(Picture_);


/***/ },
/* 41 */
/*!************************************!*\
  !*** ./src/components/helpers.tsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const classnames = __webpack_require__(/*! classnames */ 42);
	exports.Card = ({ children = null }) => React.createElement("div", {className: "card"}, children);
	exports.CardHeader = ({ children = null }) => React.createElement("div", {className: "card-header"}, children);
	exports.CardFooter = ({ children = null }) => React.createElement("div", {className: "card-footer"}, children);
	exports.CardBody = ({ children = null }) => React.createElement("div", {className: "card-body"}, children);
	exports.CardImage = ({ children = null }) => React.createElement("div", {className: "card-image"}, children);
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
	exports.ShiftDown10 = ({ children = null }) => React.createElement("span", {className: "mt-10", style: { display: "inline-block" }}, " ", children);
	exports.ShiftDown = ({ children = null }) => React.createElement("span", {style: { display: "inline-block", marginTop: "5px" }}, children);
	exports.ShiftRight = ({ children = null }) => React.createElement("span", {style: { marginLeft: "5px" }}, children);
	exports.Icn = ({ name = "", onClick = null }) => React.createElement("span", {className: classnames("icon", name), onClick: onClick});
	exports.FormAutocomplete = ({ children = null }) => React.createElement("div", {className: "form-autocomplete"}, children);
	exports.FAInput = ({ children = null }) => React.createElement("div", {className: "form-autocomplete-input"}, children);
	exports.FAList = ({ children = null }) => React.createElement("ul", {className: "form-autocomplete-list"}, children);
	exports.Input = ({ placeholder = "", onChange = null, onKeyDown = null }) => React.createElement("input", {className: "form-input", type: "text", placeholder: placeholder, onChange: onChange, onKeyDown: onKeyDown});
	exports.Text = ({ value = "", onChange = null }) => React.createElement("textarea", {className: "form-input", rows: "3", value: value, onChange: onChange});
	exports.ButtonClear = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-clear", onClick: onClick}, children);
	exports.ButtonLink = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-link", onClick: onClick}, children);
	exports.ButtonPrimary = ({ children = null, onClick = null }) => React.createElement("button", {className: "btn btn-primary", onClick: onClick}, children);
	exports.Chip = ({ children = null }) => React.createElement("span", {className: "chip-sm"}, React.createElement("span", {className: "chip-name"}, children));
	exports.Cross = ({ onClick = null }) => React.createElement("button", {className: "btn btn-clear", onClick: onClick});
	exports.Tooltip = ({ children = null, tooltip = "", enabled = false }) => enabled
	    ? React.createElement("span", {className: "tooltip", "data-tooltip": tooltip}, children)
	    : React.createElement("span", null, children);
	exports.ModalTitle = ({ children = null }) => React.createElement("div", {className: "modal-title"}, children);
	exports.ModalCard = ({ children = null, active = false }) => React.createElement("div", {className: active ? "modal modal-sm active" : "modal modal-sm"}, React.createElement("div", {className: "modal-overlay"}), React.createElement("div", {className: "modal-container"}, children));
	exports.ModalHeader = ({ children = null }) => React.createElement("div", {className: "modal-header"}, children);
	exports.ModalBody = ({ children = null }) => React.createElement("div", {className: "modal-body"}, React.createElement("div", {className: "content"}, children));
	exports.ModalFooter = ({ children = null }) => React.createElement("div", {className: "modal-footer"}, children);


/***/ },
/* 42 */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
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
/* 43 */
/*!**********************************!*\
  !*** ./src/components/Title.tsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const H = __webpack_require__(/*! ./helpers */ 41);
	const Actions = __webpack_require__(/*! ../actions */ 5);
	const Title = ({ title = "test title", helpMode = false, onClick = null }) => React.createElement(H.CardHeader, null, React.createElement(H.Clickable, {onClick: onClick}, React.createElement(H.BigBlue, null, React.createElement(H.Tooltip, {tooltip: "Click to open saved article", enabled: helpMode}, title))));
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
	        return React.createElement(H.CardBody, null, React.createElement(H.Text, {value: this.state.title, onChange: this.titleChange.bind(this)}), React.createElement(H.ButtonLink, {onClick: this.saveClick.bind(this)}, "Save"), React.createElement(H.ButtonLink, {onClick: Cancel}, "Cancel"));
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
/* 44 */
/*!***********************************!*\
  !*** ./src/components/Domain.tsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const H = __webpack_require__(/*! ./helpers */ 41);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const Actions = __webpack_require__(/*! ../actions */ 5);
	function mapStateToProps(state) {
	    return {
	        domainName: state.article.domain_name
	    };
	}
	;
	function mapDispatchToProps(dispatch) {
	    return {
	        onClick: () => { dispatch(Actions.gotoOriginalPage()); }
	    };
	}
	const Domain_ = ({ domainName = "wallabag.org", onClick = null }) => React.createElement(H.Grey, null, React.createElement(H.Clickable, {onClick: onClick}, domainName));
	const Domain = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Domain_);
	exports.Domain = Domain;


/***/ },
/* 45 */
/*!**********************************!*\
  !*** ./src/components/Icons.tsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const H = __webpack_require__(/*! ./helpers */ 41); // { Grey, Clickable, Icn, ShiftDown, ShiftRight, Right }
	const Actions = __webpack_require__(/*! ../actions */ 5); // { toggleHelpMode, toggleStarred, toggleArchived, deleteArticle, toggleEditMode }
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
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
	const IconPck = ({ deleteMode = false, onTrashClick = null, onEditClick = null, helpMode = false, onHelpClick = null, is_archived = false, onArchivedClick = null, is_starred = false, onStarredClick = null }) => React.createElement(H.Right, null, React.createElement(H.ShiftDown, null, React.createElement(EditIcon, {onClick: onEditClick}), React.createElement(ArchiveIcon, {checked: is_archived, onClick: onArchivedClick}), React.createElement(StarredIcon, {checked: is_starred, onClick: onStarredClick}), React.createElement(TrashIcon, {checked: deleteMode, onClick: onTrashClick}), React.createElement(HelpIcon, {checked: helpMode, onClick: onHelpClick})));
	const IconPack = react_redux_1.connect(mapStateToPropsIcons, mapDispatchToPropsIcons)(IconPck);
	exports.IconPack = IconPack;
	// ----------------------------------------------
	// base Icon
	const Icon = ({ iconName = "", onClick = null }) => React.createElement(H.ShiftRight, null, React.createElement(H.Grey, null, React.createElement(H.Clickable, null, React.createElement(H.Icn, {name: iconName, onClick: onClick}))));
	// ----------------------------------------------
	// Edit icon 
	const EditIcon = ({ onClick = null }) => React.createElement(Icon, {iconName: "icon-pencil", onClick: onClick});
	// ----------------------------------------------
	// Trash icon 
	const TrashIcon = ({ checked = false, onClick = null }) => React.createElement(Icon, {iconName: checked ? "icon-bin2" : "icon-bin", onClick: onClick});
	// ----------------------------------------------
	// Archived icon 
	const ArchiveIcon = ({ checked = false, onClick = null }) => React.createElement(Icon, {iconName: checked ? "icon-checkmark" : "icon-checkmark2", onClick: onClick});
	// ----------------------------------------------
	// Starred icon 
	const StarredIcon = ({ checked = false, onClick = null }) => React.createElement(Icon, {iconName: checked ? "icon-star2" : "icon-star", onClick: onClick});
	// ----------------------------------------------
	// Help icon 
	const HelpIcon = ({ checked = false, onClick = null }) => React.createElement(Icon, {iconName: checked ? "icon-help2" : "icon-help", onClick: onClick});
	// ----------------------------------------------
	const TagsIcon = () => React.createElement(Icon, {iconName: "icon-tags"});
	exports.TagsIcon = TagsIcon;


/***/ },
/* 46 */
/*!*********************************!*\
  !*** ./src/components/Tags.tsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
	const Icons_1 = __webpack_require__(/*! ./Icons */ 45);
	const H = __webpack_require__(/*! ./helpers */ 41);
	const Actions = __webpack_require__(/*! ../actions */ 5);
	function mapStateToPropsTags(state) {
	    return {
	        articleTags: state.article.tags,
	        allTags: state.tags
	    };
	}
	;
	function mapDispatchToPropsTags(dispatch) {
	    return {
	        onSaveTags: (tags) => { dispatch(Actions.setTags(tags)); },
	        onDeleteTag: (tagId) => { dispatch(Actions.deleteTag(tagId)); }
	    };
	}
	const TagsPck = ({ articleTags = [], allTags = [], onSaveTags = null, onDeleteTag = null }) => React.createElement(Tags, {articleTags: articleTags, allTags: allTags, onSaveTags: onSaveTags, onDeleteTag: onDeleteTag});
	const TagsPack = react_redux_1.connect(mapStateToPropsTags, mapDispatchToPropsTags)(TagsPck);
	exports.TagsPack = TagsPack;
	class Tag extends React.Component {
	    constructor(props) {
	        super(props);
	        this.deleteClick = this.deleteClick.bind(this);
	        this.onclick = this.onclick.bind(this);
	    }
	    onclick(e) {
	        if ((this.props.onClick !== null) && (this.props.onClick !== undefined))
	            this.props.onClick(this.props.tag.id);
	    }
	    deleteClick(e) {
	        this.props.onDelete(this.props.tag.id);
	    }
	    render() {
	        const { tag, closable } = this.props;
	        return React.createElement(H.Clickable, {onClick: this.onclick}, React.createElement(H.Chip, null, tag.label, closable ? React.createElement(H.Cross, {onClick: this.deleteClick}) : null));
	    }
	}
	class Tags extends React.Component {
	    constructor(props) {
	        super(props);
	        this.state = { foundTags: [], tagsSrt: props.articleTags.map(tag => tag.label).join(",") };
	        this.tagExists = this.tagExists.bind(this);
	        this.onchange = this.onchange.bind(this);
	        this.onkeydown = this.onkeydown.bind(this);
	        this.onfoundTagClick = this.onfoundTagClick.bind(this);
	    }
	    onchange(e) {
	        const inputValue = e.currentTarget.value;
	        const lastChar = inputValue.slice(-1);
	        if ((lastChar !== ",") && (lastChar !== ";") && (lastChar !== " ")) {
	            this.setState(Object.assign(this.state, { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" : ","}${inputValue}`,
	                foundTags: this.props.allTags.filter(tag => (this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1)
	                    && (inputValue.length >= 3 && tag.label.indexOf(inputValue) !== -1)
	                    || (inputValue === tag.label) && (!this.tagExists(inputValue)))
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
	        const value = e.currentTarget.value;
	        if ((keyCode === 32 || keyCode === 13 || key === "," || key === ";")
	            && (!this.tagExists(value))) {
	            e.currentTarget.value = "";
	            this.setState(Object.assign(this.state, { foundTags: [] }));
	            this.props.onSaveTags(this.state.tagsSrt);
	        }
	        if ((key === "ArrowRight") && (this.state.foundTags.length > 0)) {
	            e.currentTarget.value = "";
	            const ftag = this.state.foundTags[0];
	            this.setState(Object.assign(this.state, { foundTags: [] }));
	            this.props.onSaveTags(`${this.props.articleTags.map(tag => tag.label).join(",")},${ftag.label}`);
	        }
	    }
	    onfoundTagClick(id) {
	        const ftag = this.state.foundTags.filter(tag => tag.id === id)[0];
	        const tsrt = `${this.props.articleTags.map(tag => tag.label).join(",")},${ftag.label}`;
	        this.props.onSaveTags(tsrt);
	    }
	    render() {
	        let { foundTags } = this.state;
	        let { articleTags, onDeleteTag } = this.props;
	        return React.createElement(H.FormAutocomplete, null, React.createElement(H.FAInput, null, React.createElement(H.ShiftDown, null, React.createElement(Icons_1.TagsIcon, null)), articleTags.map(tag => React.createElement(H.ShiftRight, {key: tag.id}, React.createElement(Tag, {tag: tag, closable: true, key: tag.id, onDelete: onDeleteTag}))), React.createElement(H.Input, {placeholder: "type tags here", onChange: this.onchange, onKeyDown: this.onkeydown}), (foundTags === null) || (foundTags.length === 0) ? null :
	            React.createElement(H.FAList, null, React.createElement(H.Grey, null, React.createElement(H.Left, null, React.createElement(H.ShiftDown, null, "Tags found: "))), foundTags.map(tag => React.createElement(Tag, {tag: tag, closable: false, key: tag.id, onClick: this.onfoundTagClick})))));
	    }
	}
	;


/***/ },
/* 47 */
/*!***********************************!*\
  !*** ./src/components/modals.tsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/index.d.ts" />
	const React = __webpack_require__(/*! react */ 1);
	const H = __webpack_require__(/*! ./helpers */ 41);
	const Actions = __webpack_require__(/*! ../actions */ 5);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 28);
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map