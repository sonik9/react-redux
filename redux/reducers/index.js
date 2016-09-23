/**
 * Created by Vitalii on 9/20/2016.
 */

function counter(currentState, action) {
    var DEFAUT_STATE = {result:0, loading:false};

    var nextState = Object.assign({},currentState);
    if(currentState===undefined) {
        nextState = DEFAUT_STATE;
        return nextState;
    }
    switch (action.type){
        case 'DEC':
            nextState.result = currentState.result-1;
            return nextState;
        case 'INC':
            nextState.result = currentState.result+1;
            nextState.loading = false;
            return nextState;
        case 'INC_LOADING':{
            nextState.loading = true;
            return nextState;
        }
        default:
            nextState= currentState;
            return nextState;
    }
}

function summing(currentState, action) {
    var DEFAUT_STATE = 0;
    var nextState;
    if(currentState===undefined) {
        nextState = DEFAUT_STATE;
        return nextState;
    }
    switch (action.type) {
        case 'SUM':
            nextState = action.a + action.b;
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}

function images(currentState, action) {
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

function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);

    nextState = {
        count:counter(nextState.count,action),
        sum:summing(nextState.sum,action),
        img:images(nextState.img,action)
    }
    return nextState;

}
