/**
 * Created by Vitalii on 9/23/2016.
 */
export default function todoFilterSubReducer(state="ALL",action) {
    switch (action.type){
        case 'TODO-FILTER':{
            return action.filter;
        }
        default: {
            return state;
        }
    }
}