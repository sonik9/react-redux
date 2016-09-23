/**
 * Created by Vitalii on 9/23/2016.
 */
import $ from 'jquery';
export default function youSubReducer(state=[],action) {
    //debugger;
    switch (action.type){
        case 'YOU-SEARCH':{
            return action.list;
        }
        default:{
            return state;
        }
    }
}