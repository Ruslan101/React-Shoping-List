import { createStore, combineReducers } from 'redux';

// init state
const initialState = {
    list: new Array(),
    userName: undefined
}

// Actions
const ADD_ITEM = "ADD_ITEM";
const CLEAR_ITEM = "CLEAR_ITEM";
const INITIAL_USER = "INITIAL_USER";

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

// Reducers
function shoppinglist(state = new Array(), action) {
    
    switch(action.type){
        case ADD_ITEM: return [...state, { item: action.item }];
        case CLEAR_ITEM: { state.splice(action.id, 1); return state };
            
        default: return state;
    }
}
function userName(state = new String(), action) {
    switch(action.type){
        case INITIAL_USER: return action.user;

        default: return state;
    }
}

const todoApp = combineReducers({
    shoppinglist,
    userName
});

// Store
export const store = createStore(todoApp, initialState);

// Subscribe for updates state
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispathing
//store.dispatch(initialUser("Michel"));
//store.dispatch(addItem("Item 1"));
/*store.dispatch(addItem("Item 2"));
store.dispatch(clearItem(0)); */  

// Unsubscribe for updates state
unsubscribe();