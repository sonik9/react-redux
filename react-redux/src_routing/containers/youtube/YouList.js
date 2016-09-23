/**
 * Created by Vitalii on 9/23/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import YouItem from './YouItem';
class YouList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.youList);
        return (
            <ul>
                {this.props.youList.map((item)=> {
                        return (
                            <YouItem key={item.etag} video = {item}/>
                        )
                    }
                )}
            </ul>
        )
    }
}
export default connect((state)=> {
    const {youList} = state.youtube;
    return {youList};
}, null)(YouList);