import { createStore } from 'redux';
import { reducers } from './reducers.js';

// init state
export const initialState = {
    list: new Array(),
    userName: undefined
}
// Store
export const store = createStore(reducers);