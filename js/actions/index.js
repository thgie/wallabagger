"use strict";
const setup_1 = require("../setup");
const store_1 = require("../store");
exports.SET_STATUS = "SET_STATUS";
exports.LOAD_SETUP = "LOAD_SETUP";
exports.SET_API = "SET_API";
exports.SET_URL = "SET_URL";
exports.setupIsReady = (setupData) => ({ type: exports.LOAD_SETUP, setupData: setupData });
exports.setStatus = (appStatus, message) => ({ type: exports.SET_STATUS, appStatus: appStatus, message: message });
exports.setApi = (api) => ({ type: exports.SET_API, api: api });
exports.setArticleUrl = (url) => ({ type: exports.SET_URL, url: url });
exports.loadSetup = () => (dispatch) => {
    dispatch(exports.setStatus(store_1.EAppStatus.info, "Loading setup data"));
    const setup = setup_1.getSetup();
    setup.load()
        .then(data => dispatch(exports.setupIsReady(data)))
        .catch((err) => dispatch(exports.setStatus(store_1.EAppStatus.error, `ERROR: Loading setup data - ${err.message}`)));
};
// export const getToken = () => (dispatch: Dispatch<any>, getState: any ) => {
//    dispatch(setStatus(EAppStatus.info, "Obtaining new app token"));
//    let state0 = (getState() as IAppState);
//    state0.api.getAppToken()
//    .then( data => {
//                 let state1 = (getState() as IAppState);
//                 dispatch( setupIsLoaded( state1.api.setup ) );
//             })
//  //  .then()
//    .catch( (err: Error) => dispatch(setStatus( EAppStatus.error, `ERROR: Obtaining new app token - ${err.message}`)));
// }; 
//# sourceMappingURL=index.js.map