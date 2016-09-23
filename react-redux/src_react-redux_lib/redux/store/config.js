/**
 * Created by Vitalii on 9/21/2016.
 */
import {createStore, applyMiddleware} from 'redux';
import combineReducer from '../reducers/index';
import {logger, thunk} from '../middleware/index';
const store = createStore(combineReducer, applyMiddleware(logger, thunk));
export default store;