import * as React from "react";
import * as ReactDOM from "react-dom";

import { Toast, ToastType } from "./components/toasts";
import { IWallabagSetup, WallabagSetup, WallabagSetupStorageType } from "./setup";
import { WallabagApi } from "./wallabag-api";


let setup: WallabagSetup = new WallabagSetup(WallabagSetupStorageType.ChromeStorage);
let api: WallabagApi ;

ReactDOM.render(
    <Toast toastText="Loading wallabag API" toastType={ToastType.info}/>,
    document.getElementById("react-container")
);

let apiAuthorised = setup.load().then( (data: IWallabagSetup) => {
    console.log("setup loaded");
    api = new WallabagApi( data );
    if (api.needNewAppToken) {
        ReactDOM.render(
            <Toast toastText="Obtaining wallabag api token" toastType={ToastType.info}/>,
            document.getElementById("react-container")
        );
        return api.getAppToken();
    }
    return "OK";
}).catch(error => {
    ReactDOM.render(
        <Toast toastText={error.message} toastType={ToastType.error}/>,
        document.getElementById("react-container")
    );
    console.error(error);
});
