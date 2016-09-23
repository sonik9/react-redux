/**
 * Created by Vitalii on 9/21/2016.
 */
export default function summing(currentState, action) {
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