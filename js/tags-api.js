"use strict";
const fetch_api_1 = require("./fetch-api");
const consts_1 = require("./consts");
class TagsApi {
    constructor(params) {
        this.setup = params;
    }
    GetTags() {
        let entriesUrl = `${this.setup.Url}${consts_1.tagsPath}${consts_1.formatEnd}`;
        fetch_api_1.Get(entriesUrl, this.setup.ApiToken)
            .then((fetchData) => { return fetchData; })
            .catch(error => {
            throw new Error(`Failed to get tags ${entriesUrl}
                ${error.message}`);
        });
        return [];
    }
    GetArticleTags(articleId) {
        let entriesUrl = `${this.setup.Url}${consts_1.entriesPath}/${articleId}/tags${consts_1.formatEnd}`;
        fetch_api_1.Get(entriesUrl, this.setup.ApiToken)
            .then((fetchData) => { return fetchData; })
            .catch(error => {
            throw new Error(`Failed to get article tags ${entriesUrl}
                ${error.message}`);
        });
        return [];
    }
}
exports.TagsApi = TagsApi;
//# sourceMappingURL=tags-api.js.map