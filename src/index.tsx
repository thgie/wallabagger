///<reference path="../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

// import { InfoToast, ErrorToast } from "./components/toasts";
import { getSetup, IWallabagSetup } from "./setup";
import { WallabagApi } from "./wallabag-api";
// import { Article, IArticleProps } from "./components/article";
import { setStatus, loading } from "./actions";

import { getUrlToSaveSync } from "./utils";
import { store } from "./store";
import { EAppStatus } from "./consts";

// const { Provider } = require('react-redux');
import { Provider } from "react-redux";
import App  from "./components/App";

store.dispatch(setStatus(EAppStatus.info, "Loading Wallabagger setup"));
store.dispatch(loading(getSetup()));

  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <App />
      </Provider>
    </div>,
    document.getElementById("root")
  );

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




