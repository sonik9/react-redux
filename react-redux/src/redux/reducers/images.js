/**
 * Created by Vitalii on 9/21/2016.
 */
export default function images(currentState, action) {
    var DEFAUT_STATE = {data:[], loading:"Please click the random button.."};

    var nextState = Object.assign({},currentState);
    if(currentState===undefined) {
        nextState = DEFAUT_STATE;
        return nextState;
    }
    switch (action.type){
        case 'IMG':
            nextState.data = action.data;
            nextState.loading="loaded"
            return nextState;
        case 'IMG_LOADING':
            nextState.loading = "loading...";
            return nextState;
        default:
            nextState= currentState;
            return nextState;
    }
}