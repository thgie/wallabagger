import * as React from "react";
import { connect } from "react-redux";
import { EAppStatus } from "../constants/consts";
import Article from "./article";
import { ToastInfo, ToastError, OptionsPage } from "./themes";
import { WallabagSetup } from "setup";

interface IAppProps extends React.Props<any> {
    appStatus: EAppStatus;
    message: string;
    setup: WallabagSetup;
}

const mapStateToProps = (state: any) => {
  return {
    appStatus: state.appStatus,
    message: state.message,
    setup: state.api.setup
  };
};

const App: React.StatelessComponent< IAppProps> = ({ appStatus = EAppStatus.unknown, message = "", setup= null}) =>  {
        return <div>
                    { appStatus === EAppStatus.article && <Article /> }
                    { appStatus === EAppStatus.info && <ToastInfo text = { message }/> }
                    { appStatus === EAppStatus.error && <ToastError text = { message }/> }
                    { appStatus === EAppStatus.options && <OptionsPage setup={ setup }/> }
               </div>;
    };


export default connect(mapStateToProps)(App);