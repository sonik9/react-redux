/**
 * Created by Vitalii on 9/20/2016.
 */
import counter from "./counter";
import summing from "./summing";
import images from "./images";


/*export default function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);
    nextState = {
        count1:counter(nextState.count1,action),
        sum:summing(nextState.sum,action),
        img:images(nextState.img,action)
    }
    return nextState;

}*/
import {combineReducers} from 'redux';

export default combineReducers({
    count1:counter,
    sum:summing,
    img:images
});
