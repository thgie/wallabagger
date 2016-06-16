import * as React from "react";

import { Toast, ToastType } from "./toasts";
import { IWallabagSetup, WallabagSetup, WallabagSetupStorageType } from "../setup";

enum EAppMode { none, info, error, card }

export interface IAppProps {}

export interface IAppState {
    isSetUp?: boolean;
    isTokenReady?: boolean;
    isArticleSaved?: boolean;
    appMode?: EAppMode;
    message?: string;
    setup?: WallabagSetup;
}

export class App extends React.Component<IAppProps, IAppState> {
   constructor() {
     super();
     this.state = {
       isSetUp: false,
       isTokenReady: false,
       isArticleSaved: false,
       appMode: EAppMode.none,
       message: "",
       setup: new WallabagSetup(WallabagSetupStorageType.ChromeStorage)
    };
//    this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        if (!this.state.isSetUp) {
            this.setState({ appMode: EAppMode.info, message: "Loading wallabag API" });
        }
    }

    render() {
        let info = this.state.appMode === EAppMode.info ? null : <Toast toastText="{this.state.message}" toastType={ToastType.info} />;
        let err = this.state.appMode === EAppMode.error ? null : <Toast toastText="{this.state.message}" toastType={ToastType.error} />;
        let card  = this.state.appMode === EAppMode.card ? null : <div />;
        return <div>{ info }{ err }</div>;
    }

    componentDidMount() {
        if (!this.state.isSetUp) {
            this.state.setup.load().then( data => {
                console.log("loaded");
                this.setState({ isSetUp: true, appMode: EAppMode.info, message: `loaded ${this.state.setup.Url}` });
            }).catch(error => {
                console.error(error);
                this.setState({ isSetUp: false, appMode: EAppMode.error, message: error.message });
                console.log(this.state);
            });
        }
    }

}
 