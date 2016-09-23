/**
 * Created by Vitalii on 9/20/2016.
 */
import counter from "./counter";
import summing from "./summing";
import images from "./images";

export default function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);

    nextState = {
        count:counter(nextState.count,action),
        sum:summing(nextState.sum,action),
        img:images(nextState.img,action)
    }
    return nextState;

}
