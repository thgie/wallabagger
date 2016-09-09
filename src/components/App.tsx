///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { EAppStatus } from "../consts";
import Article from "./article";
import { ToastInfo, ToastError } from "./helpers";

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

const App: React.StatelessComponent< IAppProps> = ({ appStatus = EAppStatus.unknown, message = ""}) =>  {
        return <div>
                    { appStatus === EAppStatus.article && <Article /> }
                    { appStatus === EAppStatus.info && <ToastInfo text = { message }/> }
                    { appStatus === EAppStatus.error && <ToastError text = { message }/> }
               </div>;
    };


export default connect(mapStateToProps)(App);