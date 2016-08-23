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
/**
 * Returns whether the provided value is a promise
 *
 * @param {object} value Potential promise
 * @return {Boolean}
 */
export function isPromise(value: any) {
  if (value !== null && typeof value === "object") {
    return value.promise && typeof value.promise.then === "function";
  }
}

/**
 * [immutableToJS
 *    converts properties of the provided [state] object from immutable
 *    data structures to regular JavaScript data structures - used with
 *    redux-logger
 *
 * @param  {object} state [state reference]
 * @return {object}       [transformed state]
 */
export  function immutableToJS(state: any) {
  return Object.keys(state).reduce((newState: any, key: any) => {
    const val = state[key];
    newState[key] = Iterable.isIterable(val) ? val.toJS() : val;
    return newState;
  }, {});
}