"use strict";
exports.isDebug = true;
exports.isExtension = () => (window.chrome.extension !== undefined);
const testUrl = "https://habrahabr.ru/company/intel/blog/283066";
let activeChromeTab = () => new Promise((resolve, reject) => {
    chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
        if (tabs[0] != null) {
            return resolve(tabs[0].url);
        }
        else {
            return reject("active tab not found");
        }
    });
});
function getUrlToSave() {
    return exports.isExtension() ? activeChromeTab() : new Promise((resolve, reject) => resolve(testUrl));
}
exports.getUrlToSave = getUrlToSave;
function getUrlToSaveSync() {
    if (exports.isExtension()) {
        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
            if (tabs[0] != null) {
                return tabs[0].url;
            }
            else {
                return "active tab not found";
            }
        });
    }
    else {
        return testUrl;
    }
    ;
}
exports.getUrlToSaveSync = getUrlToSaveSync;
//# sourceMappingURL=utils.js.map