/**
 * Created by Vitalii on 9/23/2016.
 */
import $ from 'jquery';
export let playVideo = function (video) {
    return {
        type:'PLAY-VIDEO',
        video
    }
}
export let closeVideo = ()=>({
   type:'CLOSE-VIDEO'
});
export var youSearch = function (text,dispatch,state) {
    const MAX = 20;
    const API_KEY = 'AIzaSyAD1OiFyXKfa5SSijRXaRLfe4rfOeOTFag';
    let api = 'https://www.googleapis.com/youtube/v3/search';
    api = `${api}?part=snippet&q=${text}&maxResults=${MAX}&order=viewCount&key=${API_KEY}`;
    $.getJSON(api).done(data =>{
        const list = data.items.filter( (d) => d.id && d.id.videoId );
        dispatch({type:'YOU-SEARCH', list});
        //dispatch(setVideo(null));
    });
}
/*
export var youSearch = function (text) {
    //dispatch({type:'IMG_LOADING'});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    $.getJSON(imgurAPI).done(function (data) {
        return ({type:'YOU-SEARCH', data:data.data});
    });
}*/
