import {SDKException} from "./sdk_exception";

class SDKConfig {
    constructor() {
        // Specific ManageEngine API version
        // https://<your-me-domain>/api/v3/

        this.API_VERSION = 'v3'; // Default API version
        this.SDP_SERVER_URL = process.env.SDP_SERVER_URL || throw new SDKException("SDP Server URL not set"); // Default server URL
    }

    setAPIVersion(version) {
        this.API_VERSION = version;
    }

    setServerURL(url) {
        this.SDP_SERVER_URL = url;
    }
}

const sdkConfig = new SDKConfig();
export { sdkConfig };
