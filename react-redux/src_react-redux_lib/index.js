import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Example from './components/Example'
import store from './redux/store/config'

//const store = createStore(counter)
//const rootEl = document.getElementById('root')

/*function render() {
    ReactDOM.render(
        <Example value={store.getState()}
                 onDecrement={()=>store.dispatch(decrease())}
                 onSum={(a,b)=>store.dispatch(summ(a,b))}
                 onRandomImage = {()=> store.dispatch(getRandomImages)}
        />,
        document.getElementById('root')
    );
}*/

render(
  <Provider store={store}>
      <Example/>
  </Provider>,
    document.querySelector('#root')
);
//render();
//store.subscribe(render);