/**
 * Created by Vitalii on 9/20/2016.
 */
import $ from 'jquery';
export var decrease = function () {
    return {type:'DEC'};
}
export var summ = function (a,b) {
    return {type:'SUM', a:a, b:b};
}
export var getRandomImages = function (dispatch, state) {
    dispatch({type:'IMG_LOADING'});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    $.getJSON(imgurAPI).done(function (data) {
        dispatch({type:'IMG', data:data.data});
    });
}
