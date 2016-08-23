///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { EAppStatus } from "../consts";
import { IWallabagArticle } from "../wallabag-api";
import { toggleEditMode } from "../actions";
import Toast from "./toasts";
import Article from "./article";

interface IAppProps extends React.Props<any> {
    appStatus: EAppStatus;
    message: string;
}

const mapStateToProps = (state: any) => {
  return {
    appStatus: state.appStatus,
    message: state.message
  };
};

class App extends React.Component< IAppProps, {} > {
    static displayName = "ApplicationRoot";
    render() {
       const { appStatus, message } = this.props;
        return <div>
                    { appStatus === EAppStatus.info || appStatus === EAppStatus.error
                           ? <Toast appStatus={ appStatus } message={ message }/> : null }
                    { appStatus === EAppStatus.article ?
                        <Article /> : null }
               </div>;
    }
}

export default connect(mapStateToProps)(App);