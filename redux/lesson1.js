/**
 * Created by Vitalii on 9/3/2016.
 */



var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, thunk));
var valEl = document.querySelector(".value");
var sumValEl = document.querySelector('.sumValue');
function render() {
    var state = store.getState();
    valEl.innerHTML = state.count.result;
    sumValEl.innerHTML = state.sum;
    if(state.count.loading){
        document.querySelector('.loading').innerHTML="is loading";
    }else {
        document.querySelector('.loading').innerHTML="loaded";
    }

    $('#imageStatus').html(state.img.loading);
    if(state.img.loading==="loading..."){
        $("#imageList").html("");
    }else if(state.img.loading==="loaded"){
        state.img.data.forEach(function (item) {
           $("#imageList").append("<img src='" +item.link+ "' style='height:200px'>");
        });
    }

}
store.subscribe(render);
render();

document.querySelector('.dec').addEventListener('click', function () {
    store.dispatch(decrease());
});
document.querySelector('.incAsync').addEventListener('click', function () {
    /*setTimeout(function incr() {
        store.dispatch(increment());
    }, 3000);*/
    store.dispatch(asyncIncrease);
});

document.querySelector('.sum').addEventListener('click', function () {

    store.dispatch(summ(Number(document.querySelector('#e1').value), Number(document.querySelector('#e2').value)));
});

document.querySelector('#randomImg').addEventListener('click', function () {
    store.dispatch(getRandomImages);
});