/**
 * Simple Selector
 * @param state
 * @returns {*}
 */
export const selectState = state => state;

/**
 * Selector: select the api status
 * @param state
 * @returns {string}
 */
export const selectApiStatus = state => state.data.api.status;
