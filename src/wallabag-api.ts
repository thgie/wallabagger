///<reference path="../typings/index.d.ts" />
import { IWallabagSetup } from "./setup";
import * as $ from "jquery";

const wallabagOauthPath: string = "/oauth/v2/token";

const notAuhorizedHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip, deflate"
};

interface IWallabagGetTokenContent {
    grant_type: string;
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
};

export /**
 *  WallabagApi
 */
class  WallabagApi {
    data: IWallabagSetup;
    constructor(parameters: IWallabagSetup) {
        this.data = parameters;
    }

    isExpired (): boolean {
        return ( this.data.ExpireDateMs != null) && ( Date.now() > this.data.ExpireDateMs );
    }

    needNewAppToken(): boolean {
         return ( (this.data.ApiToken === "") ||
                  (this.data.ApiToken === null) ||
                  this.isExpired() ) ;
    }

    getAppToken(): Promise<any> {

        let content: IWallabagGetTokenContent = {
            grant_type: "password",
            client_id: this.data.ClientId,
            client_secret: this.data.ClientSecret,
            username: this.data.UserLogin,
            password: this.data.UserPassword
        };

        let options: JQueryAjaxSettings = {
            url: `${this.data.Url}${wallabagOauthPath}`,
            headers: notAuhorizedHeaders,
            data: content,
            dataType: "json"
        };

        return new Promise((resolve, reject) => {
            $.post(options)
                .done(data => resolve(data))
                .fail((xhr, status, error) => reject(new Error(`Failed to get app token from ${this.data.Url}${wallabagOauthPath}`)));
        });

    }

}