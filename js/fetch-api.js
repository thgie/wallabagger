"use strict";
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    ;
    return Promise.reject(response.json());
}
function getJson(j) {
    return j.json();
}
function getRequestOptions(rmethod, rheaders, content) {
    let options = {
        method: rmethod,
        headers: rheaders,
        mode: "cors",
        cache: "default"
    };
    if ((content !== "") && (content != null)) {
        options.body = content;
    }
    ;
    return options;
}
function getNotAuhorizedHeaders() {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Accept-Encoding", "gzip, deflate");
    return headers;
}
function getAuhorizedHeaders(token) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Accept-Encoding", "gzip, deflate");
    return headers;
}
function Patch(url, token, data) {
    let content = JSON.stringify(data);
    let rinit = getRequestOptions("PATCH", getAuhorizedHeaders(token), content);
    return fetch(url, rinit).then(checkStatus).then(getJson);
}
exports.Patch = Patch;
function Post(url, token, data) {
    console.log(`Post ${url}`);
    let content = JSON.stringify(data);
    let rinit = getRequestOptions("POST", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), content);
    return fetch(url, rinit).then(checkStatus).then(getJson);
}
exports.Post = Post;
function Delete(url, token) {
    let rinit = getRequestOptions("DELETE", getAuhorizedHeaders(token), "");
    return fetch(url, rinit).then(checkStatus).then(getJson);
}
exports.Delete = Delete;
function Get(url, token) {
    let rinit = getRequestOptions("GET", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), "");
    return fetch(url, rinit).then(checkStatus).then(getJson);
}
exports.Get = Get;
//# sourceMappingURL=fetch-api.js.map