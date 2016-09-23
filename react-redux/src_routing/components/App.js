/**
 * Created by Vitalii on 9/22/2016.
 */

import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router'
import YouVideo from '../containers/youtube/YouVideo';
import {connect} from 'react-redux';
class App extends Component {

    render() {
        const {props:{children, state:{youtube}}} = this;

        function showPlayer() {
            if (youtube.youVideo !== null) {
                return <YouVideo video={youtube.youVideo}/>;
            }
        }

        return (
            <div>
                {showPlayer()}
                <header>
                    <h1>React examples</h1>
                    {'   '}
                    <Link to={"/react-redux"}>Home</Link>
                    {'   '}
                    <Link to={"/react-redux/todo"}>Todo example</Link>
                    {'   '}
                    <Link to={"/react-redux/youtube"}>Youtube example</Link>
                </header>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}
export default connect((state)=> {
    return {state};
}, null)(App);