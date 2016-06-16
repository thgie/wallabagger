///<reference path="../typings/index.d.ts" />
export interface IWallabagSetup {
  Url: string;
  ClientId: string;
  ClientSecret: string;
  UserLogin: string;
  UserPassword: string;
  ApiToken: string;
  RefreshToken: string;
  ExpireDateMs: number;
}

interface IChromeWallabagStorage {
    wallabagdata: IWallabagSetup;
}

export enum WallabagSetupStorageType { LocalStorage, ChromeStorage, File }

export /**
 * WallabagSetup
 */
class WallabagSetup implements IWallabagSetup {

    Url: string;
    ClientId: string;
    ClientSecret: string;
    UserLogin: string;
    UserPassword: string;
    ApiToken: string;
    RefreshToken: string;
    ExpireDateMs: number;

    storageType: WallabagSetupStorageType;

    constructor(storageType: WallabagSetupStorageType) {
        this.storageType = storageType;
     }

     set(params: IWallabagSetup) {
        this.Url = params.Url;
        this.ClientId = params.ClientId;
        this.ClientSecret = params.ClientSecret;
        this.UserLogin = params.UserLogin;
        this.UserPassword = params.UserPassword;
        this.ApiToken = params.ApiToken;
        this.RefreshToken = params.RefreshToken;
        this.ExpireDateMs = params.ExpireDateMs;
     }

    clear() {
        this.Url = null;
        this.ClientId = null;
        this.ClientSecret = null;
        this.UserLogin = null;
        this.UserPassword = null;
        this.ApiToken = null;
        this.RefreshToken = null;
        this.ExpireDateMs = null;
    }

    checkParams(): boolean {
       return (this.ClientId !== "") && (this.ClientSecret !== "") &&
              (this.UserLogin !== "") && ( this.UserPassword !== "");
    }

    save() {
        chrome.storage.local.set({ "wallabagdata":  <IWallabagSetup>this });
    }

    load() {
     return new Promise((resolve, reject) => {
     chrome.storage.local.get("wallabagdata", result => {
        if ( (<IChromeWallabagStorage>result).wallabagdata != null) {
            this.set( (<IChromeWallabagStorage>result).wallabagdata);
            if (this.checkParams()) {
                return resolve(<IWallabagSetup>this);
            } else {
                this.clear();
                return reject(new Error("Some parameters are empty. Check the settings"));
            }
        } else {
            this.clear();
            return reject(new Error("Saved parameters not found. Check the settings"));
        }
            });
        });
    }
}