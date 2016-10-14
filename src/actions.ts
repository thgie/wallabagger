import { EAppStatus } from "./constants/consts";
import * as ActionTypes from "./constants/ActionTypes";
import { WallabagSetup } from "./setup";
import { WallabagApi, IWallabagArticle, ITag } from "./wallabag-api";
import * as utils from "./utils";
import { mockArticle, mockTags } from "./mocks";

declare const __DEV__: boolean; // from webpack

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

function loading(setup: WallabagSetup) {
    return async function (dispatch: any, getState: any) {
        try {

            dispatch(setStatus(EAppStatus.info, "Setting API"));
            await setup.load();
            const api = new WallabagApi(setup);
            dispatch(loadApi(api));


            if (__DEV__) {
                dispatch(loadArticle(mockArticle));
                dispatch(setStatus(EAppStatus.article, ""));
                dispatch(loadTags(mockTags));
            }
            else {

                if (api.needNewAppToken) {
                    dispatch(setStatus(EAppStatus.info, "Obtaining new API token"));
                    await api.getAppToken();
                    dispatch(setStatus(EAppStatus.info, "Saving setup"));
                    await api.setup.save();
                }

                dispatch(setStatus(EAppStatus.info, "Get page URL to save"));
                const url = await utils.getUrlToSave();

                dispatch(setStatus(EAppStatus.info, "Saving page to wallabag"));
                const article = await api.savePage(url);

                dispatch(loadArticle(article));
                dispatch(setStatus(EAppStatus.article, ""));

                const tags = await getState().api.GetTags();
                dispatch(loadTags(tags));
            }

        } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};


function setTitle(title: string): any {
    return async function(dispatch: any, getState: any) {
        try {
        const api = ( getState().api as WallabagApi);
        let article = ( getState().article as IWallabagArticle);
        article = await api.saveTitle( article.id, title);
        dispatch(loadArticle(article));
        } catch (error) {
        dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};

function setTags(tags: string): any {
    return async function(dispatch: any, getState: any) {
        try {
            const api = ( getState().api as WallabagApi);
            let article = ( getState().article as IWallabagArticle);
            article = await api.saveTagsStr( article.id, tags);
            dispatch(loadArticle(article));
        } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};

function deleteTag(tagId: number): any {
    return async function(dispatch: any, getState: any) {
        try {
            const api = ( getState().api as WallabagApi);
            let article = ( getState().article as IWallabagArticle);
            article = await api.DeleteArticleTag( article.id, tagId );
            dispatch(loadArticle(article));
        } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};


function toggleStarred(): any {
    return async function(dispatch: any, getState: any) {
        try {
          const api = ( getState().api as WallabagApi);
          let article = ( getState().article as IWallabagArticle);
          article = await api.saveStarred(article.id, article.is_starred === 0 );
          dispatch(loadArticle(article));
        }
       catch (error) {
           dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        };
    };
};

function toggleArchived(): any {
    return async function(dispatch: any, getState: any) {
          const api = ( getState().api as WallabagApi);
          let article = ( getState().article as IWallabagArticle);
          try {
            article = await api.saveArchived(article.id, article.is_archived === 0 );
            dispatch(loadArticle(article));
          } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
          }
    };
};

function deleteArticle(): any {
    return async function(dispatch: any, getState: any) {
        try {
            const api = ( getState().api as WallabagApi);
            let article = ( getState().article as IWallabagArticle);
            article = await api.deleteArticle(article.id );
            dispatch(loadArticle(article));
        } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};

// const gtO = (): any => dispatch();

const gotoOriginalPage = (): any => {
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

const gotoArticlePage = (): any => {
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

function loadingSetup(setup: WallabagSetup) {
    return async function (dispatch: any, getState: any) {
        try {

            dispatch(setStatus(EAppStatus.info, "Setting API"));
            await setup.load();
            const api = new WallabagApi(setup);
            dispatch(loadApi(api));
            dispatch(setStatus(EAppStatus.options, ""));

        } catch (error) {
            dispatch(setStatus(EAppStatus.error, `Error: ${error.message}`));
        }
    };
};

export { setStatus, loadArticle, loadApi, loadTags, loading, loadingSetup,
         setTitle, setTags, deleteTag, toggleStarred, toggleArchived,
         deleteArticle, gotoArticlePage, gotoOriginalPage
        }