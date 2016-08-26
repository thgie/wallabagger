import { EAppStatus } from "../consts";
import * as ActionTypes from "../constants/ActionTypes";
import { WallabagSetup } from "../setup";
import { WallabagApi, IWallabagArticle, ITag } from "../wallabag-api";
import * as utils from "../utils";

export const setStatus = (status: EAppStatus, message: string): any => ({
    type: ActionTypes.SET_STATUS,
    appStatus: status,
    message: message
});

export const loading = (setup: WallabagSetup) => {
    return (dispatch: any, getState: any) => {
        dispatch(setStatus(EAppStatus.info, "Setting API"));
        return setup.load()
                 .then((setup: WallabagSetup ) => {
                     let api = new WallabagApi( setup );
                     dispatch( loadApi( api ) );
                     dispatch(setStatus(EAppStatus.info, "Wallabagger setup loaded"));
                     return api;
                 })
                 .then((api: WallabagApi) => {
                     if (api.needNewAppToken) {
                        dispatch(setStatus(EAppStatus.info, "Obtaining new API token"));
                        return api.getAppToken().then((s: any) => {
                            return api;
                        });
                     }
                     return api;
                 })
                 .then((api: WallabagApi) => {
                        dispatch(setStatus(EAppStatus.info, "Saving setup"));
                        api.setup.save();
                        return api;
                 })
                 .then((api: WallabagApi) => {
                     dispatch(setStatus(EAppStatus.info, "Get page URL to save"));
                     return utils.getUrlToSave();
                 })
                 .then((url: string) => {
//                     console.log(`msg - ${getState().get("message")}`);
                     dispatch(setStatus(EAppStatus.info, "Saving page to wallabag"));
                     return getState().api.savePage(url);
                 })
                 .then((article: IWallabagArticle) => {
                     dispatch(loadArticle(article));
                     dispatch(setStatus(EAppStatus.article, ""));
                 })
                 .then(( a: any) => {
                     return getState().api.GetTags();
                 })
                 .then((tags: ITag[]) => {
                                dispatch(loadTags(tags));
                        })
                 .catch((error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 });
    };
};

export const loadArticle = (article: IWallabagArticle): any => ({
    type: ActionTypes.SET_ARTICLE,
    article: article
});

export const loadApi = (api: WallabagApi): any => ({
    type: ActionTypes.SET_API,
    api: api
});

export const loadTags = ( tags: ITag[] ): any => ({
    type: ActionTypes.SET_TAGS,
    tags: tags
});

export const toggleEditMode = ( ): any => ({
    type: ActionTypes.TOGGLE_EDIT
});

export const toggleHelpMode = ( ): any => ({
    type: ActionTypes.TOGGLE_HELP
});

export const toggleDeleteMode = ( ): any => ({
    type: ActionTypes.TOGGLE_DELETE
});

export const setTitle = (title: string): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.saveTitle( article.id, title)
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article));       } )
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};

export const setTags = (tags: string): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.saveTagsStr( article.id, tags)
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article));       } )
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};

export const deleteTag = (tagId: number): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.DeleteArticleTag( article.id, tagId )
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article));       } )
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};


export const toggleStarred = (): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.saveStarred(article.id, article.is_starred === 0 )
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article));       } )
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};

export const toggleArchived = (): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.saveArchived(article.id, article.is_archived === 0 )
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article));       } )
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};

export const deleteArticle = (): any => {
    return (dispatch: any, getState: any) => {
          const api = ( getState().api as WallabagApi);
          const article = ( getState().article as IWallabagArticle);
          api.deleteArticle(article.id )
          .then( (article: IWallabagArticle) => {
                     dispatch(loadArticle(article)); } )
          .then(a => {
              if ( (utils.isExtension()) && (window !== null) ) window.close ;
          })
          .catch( (error: Error) => {
                    dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
                 } );
    };
};

export const gotoOriginalPage = (): any => {
    return (dispatch: any, getState: any) => {
       const article = ( getState().article as IWallabagArticle);

       if ( utils.isExtension()  ) {
           chrome.tabs.create({url: article.url});
           if (window !== null) window.close;
        } else {
           if (window !== null) window.location.assign(article.url);
        }
        ;
     };
};

export const gotoArticlePage = (): any => {
    return (dispatch: any, getState: any) => {
       const api = ( getState().api as WallabagApi);
       const article = ( getState().article as IWallabagArticle);
       let url = `${api.setup.Url}/view/${article.id}`;
       if ( utils.isExtension()  ) {
           chrome.tabs.create({url: url});
           if (window !== null) window.close;
        } else {
           if (window !== null) window.location.assign(url);
        }
        ;
     };
};

