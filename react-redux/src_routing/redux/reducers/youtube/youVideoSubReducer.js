/**
 * Created by Vitalii on 9/23/2016.
 */
export default function (state=null,action) {
    switch (action.type){
        case 'PLAY-VIDEO':{
            return action.video;
        }
        case 'CLOSE-VIDEO':{
            return null;
        }
        default:{
            return state;
        }
    }
}