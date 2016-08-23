///<reference path="../typings/index.d.ts" />
import { isExtension, isDebug } from "./utils";

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

export const EmptySetup: IWallabagSetup = {
        Url:  null,
        ClientId: null,
        ClientSecret: null,
        UserLogin: null,
        UserPassword: null,
        ApiToken: null,
        RefreshToken: null,
        ExpireDateMs: null
};

interface IChromeWallabagStorage {
    wallabagdata: IWallabagSetup;
}

export enum ESetupStorageType { Unknown, LocalStorage, ChromeStorage, File, Debug }

export /**
 * WallabagSetup
 */
abstract class WallabagSetup implements IWallabagSetup {

    Url: string;
    ClientId: string;
    ClientSecret: string;
    UserLogin: string;
    UserPassword: string;
    ApiToken: string;
    RefreshToken: string;
    ExpireDateMs: number;

     storageType: ESetupStorageType;

     constructor(storageType: ESetupStorageType) {
         this.storageType = storageType;
      }

     set(params: IWallabagSetup): void {
        Object.assign(this, params);
        // this.Url = params.Url;
        // this.ClientId = params.ClientId;
        // this.ClientSecret = params.ClientSecret;
        // this.UserLogin = params.UserLogin;
        // this.UserPassword = params.UserPassword;
        // this.ApiToken = params.ApiToken;
        // this.RefreshToken = params.RefreshToken;
        // this.ExpireDateMs = params.ExpireDateMs;
     }

    clear(): void {
        Object.assign(this, EmptySetup);
        // this.Url = null;
        // this.ClientId = null;
        // this.ClientSecret = null;
        // this.UserLogin = null;
        // this.UserPassword = null;
        // this.ApiToken = null;
        // this.RefreshToken = null;
        // this.ExpireDateMs = null;
    }

    checkParams(): boolean {
       return (this.ClientId !== "") && (this.ClientSecret !== "") &&
              (this.UserLogin !== "") && ( this.UserPassword !== "");
    }

    abstract save(): void;
    abstract load(): Promise<IWallabagSetup>;
    abstract loadSync(): void;
}

export class WallabagSetupDebug extends WallabagSetup {

    constructor() {
        super(ESetupStorageType.Debug);
    }

    save() { }

    loadSync() {
            this.set( {
                    Url: "https://wallabag2.wst174.ru",
                    ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
                    ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
                    UserLogin: "wallabag",
                    UserPassword: "PSNuPR19",
                    ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
                    RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
                    ExpireDateMs: 1468924084036
                } );
            if (! this.checkParams()) {
                this.clear();
            };
        };


    load() {
        return new Promise((resolve, reject) => {
            this.set( {
                    Url: "https://wallabag2.wst174.ru",
                    ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
                    ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
                    UserLogin: "wallabag",
                    UserPassword: "PSNuPR19",
                    ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
                    RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
                    ExpireDateMs: 1468924084036
                } );
            if (this.checkParams()) {
                return resolve(<IWallabagSetup>this);
            } else {
                this.clear();
                return reject(new Error("Some parameters are empty. Check the settings"));
            };
        });
    }
}

export class WallabagSetupChrome extends WallabagSetup {

    constructor() {
        super(ESetupStorageType.ChromeStorage);
    }

    save() {
          chrome.storage.local.set({ "wallabagdata":  <IWallabagSetup>this });
    }

    loadSync() {}
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

export class WallabagSetupLocal extends WallabagSetup {
    constructor() {
        super(ESetupStorageType.LocalStorage);
    }

    save() {
       localStorage["wallabagdata"] = JSON.stringify(<IWallabagSetup>this) ;
    }
    loadSync() {}
    load() {
        return new Promise((resolve, reject) => {
            let result = localStorage["wallabagdata"];
            if (result !== null) {
                this.set(JSON.parse(result));
                if (this.checkParams()) {
                    return resolve(<IWallabagSetup>this);
                } else {
                    this.clear();
                    return reject(new Error("Some parameters are empty. Check the settings"));
                }
            }
            else {
                    return reject(new Error("Error loading parameters from localStorage."));
            }
        });
    }
}

export function getStorageType(): ESetupStorageType {
    return isExtension() ? ESetupStorageType.ChromeStorage : isDebug ? ESetupStorageType.Debug : ESetupStorageType.LocalStorage;
}

export const getSetup = (): WallabagSetup => isExtension() ?
                    new WallabagSetupChrome() :
                            isDebug ?
                            new WallabagSetupDebug() :
                            new WallabagSetupLocal();