/**
 * Created by Vitalii on 9/20/2016.
 */
import counter from "./examples/counter";
import summing from "./examples/summing";
import images from "./examples/images";
import todoSubReducer from "./todo/todoSubReducer";
import todoFilterSubReducer from "./todo/todoFilterSubReducer";
import youSubReducer from "./youtube/youSearchSubReducer";
import youVideoSubReducer from "./youtube/youVideoSubReducer";
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    examples: combineReducers({
        count1: counter,
        sum: summing,
        img: images
    }),
    todos:combineReducers({
        todo:todoSubReducer,
        filter:todoFilterSubReducer
    }),
    youtube:combineReducers({
        youList:youSubReducer,
        youVideo:youVideoSubReducer
    }),
    routing:routerReducer

});
