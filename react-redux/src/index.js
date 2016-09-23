import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example'
import store from './redux/store/config'
import {decrease, summ, getRandomImages} from './redux/actions/index'
//import { createStore } from 'redux'
//import Counter from './components/Counter'
//import counter from './reducers'

//const store = createStore(counter)
//const rootEl = document.getElementById('root')

function render() {
    ReactDOM.render(
        <Example value={store.getState()}
                 onDecrement={()=>store.dispatch(decrease())}
                 onSum={(a,b)=>store.dispatch(summ(a,b))}
                 onRandomImage = {()=> store.dispatch(getRandomImages)}
        />,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);