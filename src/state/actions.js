// Actions
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const INITIAL_USER = "INITIAL_USER";

// Action Creators
/**
 * Makes a sheet item delete event
 * @param {string} id 
 * @returns {Object} Object of action
 */
export function clearItem(id) {
    return { type: CLEAR_ITEM, id };
}
/**
 * Creates an action to add an item to a list
 * @param {string} item
 * @returns {Object} Object of action
 */
export function addItem(item) {
    return { type: ADD_ITEM, item };
}
/**
 * Initializing the username of the app
 * @param {string} user
 * @returns {object} Object of action
 */
export function initialUser(user) {
    return { type: INITIAL_USER, user };
}