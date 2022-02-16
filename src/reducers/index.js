import { combineReducers } from 'redux';
import counterReducer from './counter'; 

const count = combineReducers({
    counter: counterReducer //returns value of reducer function as object
})

export { count };