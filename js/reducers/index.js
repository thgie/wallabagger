// import { ITag } from "../tags-api";
"use strict";
const actions_1 = require("../actions");
const redux_1 = require("redux");
const store_1 = require("../store");
function status(state = { appStatus: store_1.EAppStatus.unknown, message: "" }, action) {
    switch (action.type) {
        case actions_1.SET_STATUS:
            return Object.assign({}, state, {
                appStatus: action.appStatus,
                message: action.message
            });
        default:
            return state;
    }
}
function article(state = { article: {} }, action) {
    switch (action.type) {
        case actions_1.SET_URL:
            return Object.assign({}, state, {
                article: { url: action.url }
            });
        default:
            return state;
    }
}
function setup(state = { setup: {} }, action) {
    switch (action.type) {
        case actions_1.LOAD_SETUP:
            return Object.assign({}, state, {
                isSetupReady: true,
                setup: action.setupData,
                appStatus: store_1.EAppStatus.unknown,
                message: ""
            });
        case actions_1.SET_API:
            return Object.assign({}, state, {
                api: action.api
            });
        default:
            return state;
    }
}
const wallabagApp = redux_1.combineReducers({ status: status, setup: setup, article: article });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wallabagApp;
//# sourceMappingURL=index.js.map