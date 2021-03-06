/**
 * Created by Vitalii on 9/20/2016.
 */
//middleware
export const logger = function (store) {
    return function (next) {
        return function (action) {
            next(action);
        }
    }
}

export const thunk = function (store) {
    return function (next) {
        return function (action) {
            if(typeof action === 'function'){
                action(store.dispatch, store.getState());
            }else {
                next(action);
            }
        }
    }
}