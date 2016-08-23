///<reference path="../../typings/index.d.ts" />
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import * as createLogger from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

export const store =  applyMiddleware( logger, thunk )(createStore)(rootReducer);
