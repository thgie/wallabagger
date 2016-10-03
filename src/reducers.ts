///<reference path="../typings/index.d.ts" />
import * as ActionTypes from "./constants/ActionTypes";
import { EAppStatus } from "./constants/consts";
import { EmptySetup } from "./setup";
import { WallabagApi, ITag } from "./wallabag-api";

const INITIAL_STATE: any =  {
    appStatus: EAppStatus.unknown,
    message: "",
    api: {},
    article: {},
    tags: []
};

function rootReducer(state = INITIAL_STATE , action: any ): any  {
   switch (action.type) {
        case ActionTypes.SET_STATUS:
            return Object.assign({}, state, {
                        appStatus: action.appStatus,
                        message: action.message
                   });

        case ActionTypes.SET_API:
            return Object.assign({}, state, {
                 api: action.api });

        case ActionTypes.SET_ARTICLE:
            return Object.assign({}, state, {
                article: action.article
                 });

        case ActionTypes.SET_TAGS:
            return Object.assign({}, state, {
                tags: action.tags });

        default:
            return state;
    }
};


export default rootReducer;