import { Iterable } from "immutable";

export const isDebug: boolean = true;

export const isExtension = (): boolean => (window.chrome.extension !== undefined);
const testUrl: string = "https://habrahabr.ru/company/intel/blog/283066/";

let activeChromeTab = (): Promise<string> => new Promise<string>((resolve, reject) => {
    chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
        if (tabs[0] != null) {
            return resolve(tabs[0].url);
        }
        else {
            return reject("active tab not found");
        }
    });
});

export function getUrlToSave(): Promise<string> {
    return isExtension() ? activeChromeTab() : new Promise<string>((resolve, reject) => resolve( testUrl ));
}

export function getUrlToSaveSync(): string {
    if (isExtension()) {
        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
            if (tabs[0] != null) {
                return tabs[0].url;
            }
            else {
                return "active tab not found";
            }
    });
    } else { return testUrl; };
}
