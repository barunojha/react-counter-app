import { combineReducers } from 'redux';
import counterReducer from './counter';
import cakeStockReducer from './cakeStock';

const allReducers = combineReducers({
    counter: counterReducer, //returns value of reducer function as object
    cakeCounter: cakeStockReducer,
})

export { allReducers };