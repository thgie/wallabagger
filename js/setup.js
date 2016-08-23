"use strict";
///<reference path="../typings/index.d.ts" />
const utils_1 = require("./utils");
exports.EmptySetup = {
    Url: null,
    ClientId: null,
    ClientSecret: null,
    UserLogin: null,
    UserPassword: null,
    ApiToken: null,
    RefreshToken: null,
    ExpireDateMs: null
};
(function (ESetupStorageType) {
    ESetupStorageType[ESetupStorageType["Unknown"] = 0] = "Unknown";
    ESetupStorageType[ESetupStorageType["LocalStorage"] = 1] = "LocalStorage";
    ESetupStorageType[ESetupStorageType["ChromeStorage"] = 2] = "ChromeStorage";
    ESetupStorageType[ESetupStorageType["File"] = 3] = "File";
    ESetupStorageType[ESetupStorageType["Debug"] = 4] = "Debug";
})(exports.ESetupStorageType || (exports.ESetupStorageType = {}));
var ESetupStorageType = exports.ESetupStorageType;
class WallabagSetup {
    constructor(storageType) {
        this.storageType = storageType;
    }
    set(params) {
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
    clear() {
        Object.assign(this, exports.EmptySetup);
        // this.Url = null;
        // this.ClientId = null;
        // this.ClientSecret = null;
        // this.UserLogin = null;
        // this.UserPassword = null;
        // this.ApiToken = null;
        // this.RefreshToken = null;
        // this.ExpireDateMs = null;
    }
    checkParams() {
        return (this.ClientId !== "") && (this.ClientSecret !== "") &&
            (this.UserLogin !== "") && (this.UserPassword !== "");
    }
}
exports.WallabagSetup = WallabagSetup;
class WallabagSetupDebug extends WallabagSetup {
    constructor() {
        super(ESetupStorageType.Debug);
    }
    save() { }
    loadSync() {
        this.set({
            Url: "https://wallabag2.wst174.ru",
            ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
            ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
            UserLogin: "wallabag",
            UserPassword: "PSNuPR19",
            ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
            RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
            ExpireDateMs: 1468924084036
        });
        if (!this.checkParams()) {
            this.clear();
        }
        ;
    }
    ;
    load() {
        return new Promise((resolve, reject) => {
            this.set({
                Url: "https://wallabag2.wst174.ru",
                ClientId: "1_bmsaskgrpkgsgo8oockw4ks4kos4gos44sw0c0o4gok804skk",
                ClientSecret: "3t15zkduev40g00cggk8w8ow0sgcg8wwwg0880g4gog04ckcwk",
                UserLogin: "wallabag",
                UserPassword: "PSNuPR19",
                ApiToken: "ZTc2MzFjZWVlYThmODUwMGY0OGIzZjllYTBkNTAyOWM3N2E3YTQ0OGYwNWVkYTM4M2QzMzk2MmY3MDcyZWM3MA",
                RefreshToken: "ZGExYjQ5MWNkMzc3ZjM4OTgxYmJhZDQ0YjkzYTcyZWZmZjQ2NDIzZDRmOTIzYjc5NTMyNWNmNTJjZjdhMDMxOQ",
                ExpireDateMs: 1468924084036
            });
            if (this.checkParams()) {
                return resolve(this);
            }
            else {
                this.clear();
                return reject(new Error("Some parameters are empty. Check the settings"));
            }
            ;
        });
    }
}
exports.WallabagSetupDebug = WallabagSetupDebug;
class WallabagSetupChrome extends WallabagSetup {
    constructor() {
        super(ESetupStorageType.ChromeStorage);
    }
    save() {
        chrome.storage.local.set({ "wallabagdata": this });
    }
    loadSync() { }
    load() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get("wallabagdata", result => {
                if (result.wallabagdata != null) {
                    this.set(result.wallabagdata);
                    if (this.checkParams()) {
                        return resolve(this);
                    }
                    else {
                        this.clear();
                        return reject(new Error("Some parameters are empty. Check the settings"));
                    }
                }
                else {
                    this.clear();
                    return reject(new Error("Saved parameters not found. Check the settings"));
                }
            });
        });
    }
}
exports.WallabagSetupChrome = WallabagSetupChrome;
class WallabagSetupLocal extends WallabagSetup {
    constructor() {
        super(ESetupStorageType.LocalStorage);
    }
    save() {
        localStorage["wallabagdata"] = JSON.stringify(this);
    }
    loadSync() { }
    load() {
        return new Promise((resolve, reject) => {
            let result = localStorage["wallabagdata"];
            if (result !== null) {
                this.set(JSON.parse(result));
                if (this.checkParams()) {
                    return resolve(this);
                }
                else {
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
exports.WallabagSetupLocal = WallabagSetupLocal;
function getStorageType() {
    return utils_1.isExtension() ? ESetupStorageType.ChromeStorage : utils_1.isDebug ? ESetupStorageType.Debug : ESetupStorageType.LocalStorage;
}
exports.getStorageType = getStorageType;
exports.getSetup = () => utils_1.isExtension() ?
    new WallabagSetupChrome() :
    utils_1.isDebug ?
        new WallabagSetupDebug() :
        new WallabagSetupLocal();
//# sourceMappingURL=setup.js.map