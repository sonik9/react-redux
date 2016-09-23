/**
 * Created by Vitalii on 9/20/2016.
 */

var decrease = function () {
    return {type:'DEC'};
}
var increment = function () {
    return {type:'INC'};
}

var summ = function (a,b) {
    return {type:'SUM', a:a, b:b};
}
var asyncIncrease = function (dispatch, state) {
    dispatch({type:'INC_LOADING'});
    (function(currentCount, cb) {
        setTimeout(function(){
            cb(currentCount+1);
        },3000);
    })(state.count.result,function (data) {
        dispatch({type:'INC'});
    });
}

var getRandomImages = function (dispatch, state) {
    dispatch({type:'IMG_LOADING'});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    $.getJSON(imgurAPI).done(function (data) {
        dispatch({type:'IMG', data:data.data});
    });
}
