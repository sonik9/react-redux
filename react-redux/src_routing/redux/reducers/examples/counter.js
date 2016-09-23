/**
 * Created by Vitalii on 9/21/2016.
 */
export default function counter(currentState, action) {
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
        default:
            nextState= currentState;
            return nextState;
    }
}