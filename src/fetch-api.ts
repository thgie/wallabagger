function checkStatus(response: Response): Promise<any> {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    };
    return Promise.reject(response.json());
}

function getJson(j: any) {
    return j.json();
}

function getRequestOptions(rmethod: string, rheaders: Headers, content: BodyInit): RequestInit {

    let options: RequestInit = {
        method: rmethod,
        headers: rheaders,
        mode: "cors",
        cache: "default"
    };

    if ((content !== "") && (content != null)) {
        options.body = content;
    };

    return options;

}
function getNotAuhorizedHeaders(): Headers {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Accept-Encoding", "gzip, deflate");
    return headers;
}

function getAuhorizedHeaders(token: string): Headers {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Accept-Encoding", "gzip, deflate");
    return headers;
}

export function Patch(url: string, token: string, data: Object): Promise<any> {
    let content: BodyInit = JSON.stringify(data);
    let rinit = getRequestOptions("PATCH", getAuhorizedHeaders(token), content);
    return fetch(url, rinit).then(checkStatus).then(getJson);
}

export function Post(url: string, token: string, data: Object): Promise<any> {
    console.log(`Post ${url}`);
    let content: BodyInit = JSON.stringify(data);
    let rinit = getRequestOptions("POST", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), content);
    return fetch(url, rinit).then(checkStatus).then(getJson);
}

export function Delete(url: string, token: string): Promise<any> {
    let rinit = getRequestOptions("DELETE", getAuhorizedHeaders(token), "");
    return fetch(url, rinit).then(checkStatus).then(getJson);
}

export function Get(url: string, token: string): Promise<any> {
    let rinit = getRequestOptions("GET", token === "" ? getNotAuhorizedHeaders() : getAuhorizedHeaders(token), "");
    return fetch(url, rinit).then(checkStatus).then(getJson);
}
