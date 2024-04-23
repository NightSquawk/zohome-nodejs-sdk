/**
 * This class is the common CRUD object.
 */

import { SDKException } from "./sdk_exception";
import { apiClient } from './apiClient';

class CRUD {
    /**
     * @param {string} moduleAPIName - A String containing the moduleAPIName.
     */
    constructor(moduleAPIName) {
        this.moduleAPIName = moduleAPIName;
    }

    /**
     * The method to get record.
     * @param {BigInt} recordId - A BigInt representing the recordId.
     * @param {object} paramInstance - An instance of ParameterMap.
     * @returns {APIResponse} An instance of APIResponse.
     * @throws {SDKException}
     */
    async getRecord(recordId, paramInstance) {
        return this._getRecord(recordId, paramInstance);
    }

    /**
     * The method to update record.
     * @param {BigInt} recordId - A BigInt representing the recordId.
     * @param {object} request - An instance of BodyWrapper.
     * @returns {APIResponse} An instance of APIResponse.
     * @throws {SDKException}
     */
    async updateRecord(recordId, request) {
        return this._updateRecord(recordId, request);
    }

    async createRecord(endpoint, data) {
        try {
            const response = await apiClient.sendRequest(endpoint, 'POST', data);
            return response;
        } catch (error) {
            throw new Error('Failed to create record: ' + error.message);
        }
    }

    /**
     * Private method to get record.
     * @param {BigInt} recordId - A BigInt representing the recordId.
     * @param {object} paramInstance - An instance of ParameterMap.
     * @returns {APIResponse} An instance of APIResponse.
     * @throws {SDKException}
     */
    async _getRecord(recordId, paramInstance) {
        // Placeholder logic to get the record
        try {
            // Implement your logic here to retrieve the record
            console.log(`Getting record with ID ${recordId} from module ${this.moduleAPIName}`);
            // Return an APIResponse or whatever is appropriate in your context
        } catch (error) {
            throw new SDKException("Error occurred while getting record", error);
        }
    }

    /**
     * Private method to update record.
     * @param {BigInt} recordId - A BigInt representing the recordId.
     * @param {object} request - An instance of BodyWrapper.
     * @returns {APIResponse} An instance of APIResponse.
     * @throws {SDKException}
     */
    async _updateRecord(recordId, request) {
        // Placeholder logic to update the record
        try {
            // Implement your logic here to update the record
            console.log(`Updating record with ID ${recordId} in module ${this.moduleAPIName}`);
            // Return an APIResponse or whatever is appropriate in your context
        } catch (error) {
            throw new SDKException("Error occurred while updating record", error);
        }
    }
}

export { CRUD };
