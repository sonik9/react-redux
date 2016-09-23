/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import YouSearch from '../containers/youtube/YouSearch'
import YouList from '../containers/youtube/YouList'
import YouVideo from '../containers/youtube/YouVideo'
export default class Youtube extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Youtube</h1>
                <YouSearch/>
                <YouList/>

            </div>
        )
    }
}