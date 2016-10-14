import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "store";
import { Provider } from "react-redux";
import { getSetup } from "setup";
import { setStatus, loadingSetup } from "actions";
import { EAppStatus } from "constants/consts";
import App  from "./components/App";

store.dispatch(setStatus(EAppStatus.info, "Loading Wallabagger setup"));
store.dispatch(loadingSetup(getSetup()));

ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
    document.getElementById("root")
);