/**
 * Created by Vitalii on 9/22/2016.
 */
let nextd =0;
export var todoAdd = function (todoText) {
    return {
        type:'TODO-ADD',
        id:nextd++,
        text:todoText
    };
}
export var todoToggle = function (id) {
    return {
        type:'TODO-TOGGLE',
        id:id
    };
}
export let todoFilter = function (filter) {
    return {
        type:'TODO-FILTER',
        filter
    }
}