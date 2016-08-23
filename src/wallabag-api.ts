///<reference path="../typings/index.d.ts" />
import { IWallabagSetup, WallabagSetup } from "./setup";
import { Get, Post, Patch, Delete } from "./fetch-api";

export const oauthPath: string = "/oauth/v2/token";
export const entriesPath: string = "/api/entries";
export const apiVersionPath: string = "/api/version";
export const formatEnd: string = ".json";
const tagsPath: string = "/api/tags";

export interface ITag {
    id: number;
    label: string;
    slug: string;
}

interface IWallabagGetTokenContent {
    grant_type: string;
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
};

interface IHref { href: string; }
interface ILinks { self: IHref; }

export interface IWallabagArticle {
    is_archived: number;
    is_starred: number;
    user_name: string;
    user_email: string;
    user_id: number;
    id: number;
    title: string;
    url: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    mimetype: string;
    reading_time: number;
    domain_name: string;
    preview_picture?: string;
    tags?: ITag[];
    _links?: ILinks;
}

export class WallabagApi {
    setup: WallabagSetup;
    ApiVersion: string;
    constructor(parameters: WallabagSetup) {
        this.setup = parameters;
    }

    isExpired(): boolean {
        return (this.setup.ExpireDateMs != null) && (Date.now() > this.setup.ExpireDateMs);
    }

    needNewAppToken(): boolean {
        return ((this.setup.ApiToken === "") ||
            (this.setup.ApiToken === null) ||
            this.isExpired());
    }

    getAppToken(): Promise<any> {

        let content: Object = {
            grant_type: "password",
            client_id: this.setup.ClientId,
            client_secret: this.setup.ClientSecret,
            username: this.setup.UserLogin,
            password: this.setup.UserPassword
        };

        let oauthurl = `${this.setup.Url}/oauth/v2/token`;

        return Post(oauthurl, "", content)
            .then((fetchData: any) => {
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

    savePage(pageUrl: string): Promise<any> {

        let content: Object = { url: pageUrl };
        let url: string = `${this.setup.Url}${entriesPath}${formatEnd}`;

        return Post(url, this.setup.ApiToken, content)
            .then((fetchData: any) => {
                return fetchData;
            }).catch(error => {
                throw new Error(`Failed to save page at ${pageUrl} ${error.message}`);
            });

    }

    saveTitle(articleId: number, articleTitle: string): Promise<any> {

        return this.patchArticle(articleId, { title: articleTitle });

    }

    saveStarred(articleId: number, articleStarred: boolean): Promise<any> {

        return this.patchArticle(articleId, { starred: articleStarred ? 1 : 0 });

    }

    saveArchived(articleId: number, articleArchived: boolean): Promise<any> {

        return this.patchArticle(articleId, { archive: articleArchived ? 1 : 0 });

    }

    saveTags(articleId: number, taglist: ITag[]): Promise<any> {

        return this.patchArticle(articleId, { tags: taglist.map(tag => tag.label).join(",") });

    }

    patchArticle(articleId: number, data: Object): Promise<any> {
        let url: string = `${this.setup.Url}${entriesPath}/${articleId}${formatEnd}`;

        return Patch(url, this.setup.ApiToken, data)
            .then((fetchData: any) => {
                return fetchData;
            }).catch(error => {
                throw new Error(`Failed to save article id=${articleId} ${error.message}`);
            });

    }

    deleteArticle(articleId: number): Promise<any> {

        let url = `${this.setup.Url}${entriesPath}/${articleId}${formatEnd}`;

        return Delete(url, this.setup.ApiToken)
            .then((fetchData: any) => {
                return fetchData;
            }).catch(error => {
                throw new Error(`Failed to delete article id=${articleId} ${error.message}`);
            });

    }


    getApiVersion  () {
        let url = `${this.setup.Url}${apiVersionPath}`;
        return Get(url, "")
               .then( (fetchData: any) => { this.ApiVersion = fetchData; return fetchData; })
               .catch( (error: any) => { throw new Error(`Failed to get api version ${url}
                ${error.message}`);  } )
                ;

    }

    GetTags(): Promise<ITag[]> {

       let entriesUrl = `${this.setup.Url}${tagsPath}${formatEnd}`;

       return Get(entriesUrl, this.setup.ApiToken)
           .then((fetchData: ITag[]) => { return fetchData; })
           .catch( error => { throw new Error(`Failed to get tags ${entriesUrl}
                ${error.message}`);  } );
    }

    GetArticleTags(articleId: number): ITag[] {

        let entriesUrl = `${this.setup.Url}${entriesPath}/${articleId}/tags${formatEnd}`;
        Get(entriesUrl, this.setup.ApiToken)
           .then((fetchData: ITag[]) => { return fetchData; })
                .catch( error => { throw new Error(`Failed to get article tags ${entriesUrl}
                ${error.message}`);  } );
        return [];
    }
    // deleteArticleTag (articleId: number,tagid) {

    //     let entryUrl = `${this.data.Url}/api/entries/${articleId}/tags/${tagid}.json`;

    //     let rinit =  this.RequestInit("DELETE", this.AuhorizedHeader(), '');

    //     return fetch( entryUrl, rinit )
    //         .then(this._json)
    //         .then(this._status)
    //         .catch( error => { throw new Error(`Failed to delete article tag ${entryUrl}
    //             ${error.message}`);  } )
    //             ;

    // }

    // RefreshToken: function () {

    //     let content = JSON.stringify({
    //         grant_type: 'refresh_token',
    //         refresh_token: this.data.RefreshToken,
    //         client_id: this.data.ClientId,
    //         client_secret: this.data.ClientSecret
    //     });

    //     let oauthurl = `${this.data.Url}/oauth/v2/token`;

    //     let rinit = this.RequestInit("POST", this.NotAuhorizedHeader(), content); 

    //     return fetch( oauthurl, rinit)
    //         .then(this._json)
    //         .then(this._status)
    //         .then(data => {
    //             if (data != '') {
    //                 this.data.ApiToken = data.access_token;
    //                 this.data.RefreshToken = data.refresh_token;
    //                 let nowDate = new Date(Date.now());
    //                 this.data.ExpireDateMs = nowDate.setSeconds(nowDate.getSeconds() + data.expires_in);
    //                 return data;
    //             }
    //         })
    //         .catch( error => { throw new Error(`Failed to refresh token ${oauthurl}
    //             ${error.message}`);  } );
    // },

    // GetArticle: function (articleId) {

    //    let entriesUrl = `${this.data.Url}/api/entries/${articleId}.json`;

    //    let rinit = this.RequestInit("GET", this.AuhorizedHeader(), ''); 

    //    return fetch( entriesUrl, rinit )
    //         .then(this._json)
    //         .then(this._status)            
    //         .then(fetchData => { return fetchData })            
    //         .catch( error => { throw new Error(`Failed to get article ${entriesUrl}
    //             ${error.message}`);  } );
    // },

}