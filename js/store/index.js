"use strict";
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const middleware_1 = require("../middleware");
const reducers_1 = require("../reducers");
const setup_1 = require("../setup");
exports.store = redux_1.applyMiddleware(redux_thunk_1.default, middleware_1.logger)(redux_1.createStore)(reducers_1.default);
(function (EAppStatus) {
    EAppStatus[EAppStatus["unknown"] = 0] = "unknown";
    EAppStatus[EAppStatus["info"] = 1] = "info";
    EAppStatus[EAppStatus["error"] = 2] = "error";
    EAppStatus[EAppStatus["article"] = 3] = "article";
})(exports.EAppStatus || (exports.EAppStatus = {}));
var EAppStatus = exports.EAppStatus;
;
exports.InitialState = {
    isSetupReady: false,
    setup: setup_1.EmptySetup,
    appStatus: EAppStatus.unknown,
    message: "",
    api: null,
    article: null
};
//# sourceMappingURL=index.js.map