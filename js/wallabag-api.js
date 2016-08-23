"use strict";
const fetch_api_1 = require("./fetch-api");
const consts_1 = require("./consts");
;
class WallabagApi {
    constructor(parameters) {
        this.setup = parameters;
    }
    isExpired() {
        return (this.setup.ExpireDateMs != null) && (Date.now() > this.setup.ExpireDateMs);
    }
    needNewAppToken() {
        return ((this.setup.ApiToken === "") ||
            (this.setup.ApiToken === null) ||
            this.isExpired());
    }
    getAppToken() {
        let content = {
            grant_type: "password",
            client_id: this.setup.ClientId,
            client_secret: this.setup.ClientSecret,
            username: this.setup.UserLogin,
            password: this.setup.UserPassword
        };
        let oauthurl = `${this.setup.Url}/oauth/v2/token`;
        return fetch_api_1.Post(oauthurl, "", content)
            .then((fetchData) => {
            let nowDate = (new Date());
            this.setup.ApiToken = fetchData.access_token;
            this.setup.RefreshToken = fetchData.refresh_token;
            this.setup.ExpireDateMs = nowDate.setSeconds(nowDate.getSeconds() + fetchData.expires_in);
            return fetchData;
        }).catch(error => {
            throw new Error(`Failed to get app token from ${oauthurl}
                ${error.message}`);
        });
    }
    savePage(pageUrl) {
        let content = { url: pageUrl };
        let url = `${this.setup.Url}${consts_1.entriesPath}${consts_1.formatEnd}`;
        return fetch_api_1.Post(url, this.setup.ApiToken, content)
            .then((fetchData) => {
            return fetchData;
        }).catch(error => {
            throw new Error(`Failed to save page at ${pageUrl} ${error.message}`);
        });
    }
    saveTitle(articleId, articleTitle) {
        return this.patchArticle(articleId, { title: articleTitle });
    }
    saveStarred(articleId, articleStarred) {
        return this.patchArticle(articleId, { starred: articleStarred ? 1 : 0 });
    }
    saveArchived(articleId, articleArchived) {
        return this.patchArticle(articleId, { archived: articleArchived ? 1 : 0 });
    }
    saveTags(articleId, taglist) {
        return this.patchArticle(articleId, { tags: taglist.map(tag => tag.label).join(",") });
    }
    patchArticle(articleId, data) {
        let url = `${this.setup.Url}${consts_1.entriesPath}/${articleId}${consts_1.formatEnd}`;
        return fetch_api_1.Patch(url, this.setup.ApiToken, data)
            .then((fetchData) => {
            return fetchData;
        }).catch(error => {
            throw new Error(`Failed to save article id=${articleId} ${error.message}`);
        });
    }
    deleteArticle(articleId) {
        let url = `${this.setup.Url}${consts_1.entriesPath}/${articleId}${consts_1.formatEnd}`;
        return fetch_api_1.Delete(url, this.setup.ApiToken)
            .then((fetchData) => {
            return fetchData;
        }).catch(error => {
            throw new Error(`Failed to delete article id=${articleId} ${error.message}`);
        });
    }
    getApiVersion() {
        let url = `${this.setup.Url}${consts_1.apiVersionPath}`;
        return fetch_api_1.Get(url, "")
            .then((fetchData) => { this.ApiVersion = fetchData; return fetchData; })
            .catch((error) => {
            throw new Error(`Failed to get api version ${url}
                ${error.message}`);
        });
    }
}
exports.WallabagApi = WallabagApi;
//# sourceMappingURL=wallabag-api.js.map