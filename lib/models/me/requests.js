/**
 * This class is the common ManageEngine Request object.
 */

class ManageEngineRequest {
    /**
     * @param {string} method - A String containing the HTTP method.
     * @param {string} url - A String containing the URL.
     * @param {object} headers - A key/value pair object containing the headers.
     * @param {object} requestBody - A key/value pair object containing the request body.
     */
    constructor(method, url, headers, requestBody) {
        this.method = method;

        this.url = url;

        this.headers = headers;

        this.requestBody = requestBody;
    }
}