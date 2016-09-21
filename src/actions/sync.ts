import { EAppStatus } from "../constants/consts";
import * as ActionTypes from "../constants/ActionTypes";
import { WallabagSetup } from "../setup";
import { WallabagApi, IWallabagArticle, ITag } from "../wallabag-api";
import * as utils from "../utils";

const setStatus = (status: EAppStatus, message: string): any => ({
    type: ActionTypes.SET_STATUS,
    appStatus: status,
    message: message
});

const loadArticle = (article: IWallabagArticle): any => ({
    type: ActionTypes.SET_ARTICLE,
    article: article
});

const loadApi = (api: WallabagApi): any => ({
    type: ActionTypes.SET_API,
    api: api
});

const loadTags = ( tags: ITag[] ): any => ({
    type: ActionTypes.SET_TAGS,
    tags: tags
});

const toggleEditMode = ( ): any => ({
    type: ActionTypes.TOGGLE_EDIT
});

const toggleHelpMode = ( ): any => ({
    type: ActionTypes.TOGGLE_HELP
});

const toggleDeleteMode = ( ): any => ({
    type: ActionTypes.TOGGLE_DELETE
});


export { setStatus, loadArticle, loadApi, loadTags,
         toggleEditMode, toggleHelpMode, toggleDeleteMode
        }