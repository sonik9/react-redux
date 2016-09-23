/**
 * Created by Vitalii on 9/22/2016.
 */
export default function todoSubReducer(state=[], action) {
    switch (action.type){
        case 'TODO-ADD':{
            const newTodo = {
                id: action.id,
                text: action.text,
                completed: false
            }
            return state.concat(newTodo); //Object.assign([newTodo],state);
        }
        case 'TODO-TOGGLE':{
         return state.map((item)=>{
             "use strict";
            if(item.id!==action.id){
                return item;
            }
            console.log(Object.assign({},item,{completed:!item.completed}));
            return Object.assign({},item,{
                completed:!item.completed
            });
         });
        }
        default: {
            return state;
        }
    }
}