import axios from 'axios';
import { sdkConfig } from './sdk_config';

class APIClient {
    async sendRequest(endpoint, method, data) {
        try {
            const response = await axios({
                method: method,
                url: sdkConfig.SDP_SERVER_URL + '/api/' + sdkConfig.API_VERSION + endpoint,
                data: data
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to send request: ' + error.message);
        }
    }
}

const apiClient = new APIClient();
export { apiClient };
