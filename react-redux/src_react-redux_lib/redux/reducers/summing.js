/**
 * Created by Vitalii on 9/21/2016.
 */
export default function summing(currentState=4, action) {
    switch (action.type) {
        case 'SUM': {
            return  action.a + action.b;
        }
        default:
            return currentState;
    }
}