/**
 * This class represents the body wrapper for API requests.
 */

class BodyWrapper {
    /**
     * @param {object} data - The data to be wrapped.
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * Get the wrapped data.
     * @returns {object} The wrapped data.
     */
    getData() {
        return this.data;
    }

    /**
     * Set the wrapped data.
     * @param {object} data - The data to be wrapped.
     */
    setData(data) {
        this.data = data;
    }
}

export { BodyWrapper };
