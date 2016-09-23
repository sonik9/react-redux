import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import Example from './components/Example';
import Todo from './components/Todo';
import Youtube from './components/Youtube';
import store from './redux/store/config';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

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
        <Router history={history}>
            <Route path={"/react-redux"} component={App}>
                <IndexRoute component={Example}/>
                <Route path={"/react-redux/todo"} component={Todo}/>
                <Route path={"/react-redux/youtube"} component={Youtube}/>
            </Route>
        </Router>
    </Provider>,

document.querySelector('#root')
)
;