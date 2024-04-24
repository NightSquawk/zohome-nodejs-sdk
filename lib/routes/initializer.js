
import { Constants } from "/lib/utils/constants";
import { SDKException } from "/lib/core/sdk_exception";

export class Initializer {
    static async initialize(token) {
        if (token === null) {
            SDKException.error(Constants.TOKEN_ERROR_MESSAGE);
        }

        this.token = token;
    }

    static async remove() {
        this.user = null;
        this.environment = null;
        this.token = null;
    }
    static async initializer() {
        return {
            user: this.user,
            environment: this.environment,
            token: this.token
        };
    }
    static async getInitializer() {
        return this;
    }
    static async getUser() {
        return this.user;
    }
    static async getEnvironment() {
        return this.environment;
    }
    static async getToken() {
        return this.token;
    }
}