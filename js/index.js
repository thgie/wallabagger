"use strict";
// import { Article, IArticleProps } from "./components/article";
const actions_1 = require("./actions");
const store_1 = require("./store");
const startupDispatcher = (state) => {
    if (state.appStatus === store_1.EAppStatus.error) {
        unsubscribe();
    }
    if (state.isSetupReady) {
        unsubscribe();
        store_1.store.dispatch(actions_1.setStatus(store_1.EAppStatus.info, "Loading setup"));
    }
};
const unsubscribe = store_1.store.subscribe(() => startupDispatcher(store_1.store.getState()));
// store.dispatch(setStatus(EAppStatus.info, "Loading setup"));
// const setupClass = getSetup();
// setupClass.loadSync();
// store.dispatch(loadSetupSync(setupClass));
// store.dispatch(setStatus(EAppStatus.info, "Loading API"));
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
// const setup: WallabagSetup = isExtension() ?
//                  new WallabagSetupChrome() :
//                         isDebug ?
//                         new WallabagSetupDebug() :
//                         new WallabagSetupLocal();
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
//# sourceMappingURL=index.js.map