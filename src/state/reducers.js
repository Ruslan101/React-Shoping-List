import { combineReducers } from 'redux';
import { ADD_ITEM, CLEAR_ITEM, INITIAL_USER } from './actions.js';

// Reducers
function shoppinglist(state = new Array(), action) {
    switch(action.type){
        case ADD_ITEM: return [...state, action.item ];
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

export const reducers = combineReducers({
    shoppinglist,
    userName
});