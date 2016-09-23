/**
 * Created by Vitalii on 9/22/2016.
 */
import React, {Component, PropTypes} from 'react'
import {playVideo} from '../../redux/actions/youtube'
import {connect} from 'react-redux'

class YouItem extends Component {
    render() {
        const onPlayVideo=(e)=> {
            e.preventDefault();
            this.props.playVideo(this.props.video);

        }

        const {snippet:{title, description, thumbnails:{medium:{url}}}} = this.props.video;
        return (
            <li onClick={onPlayVideo}>
                <div><h3> {title}</h3></div>
                <div><p><span style={{color: 'red'}}>Description:</span> {description}</p></div>
                <div><img src={url} alt=""/></div>
            </li>
        )
    }
}
export default connect(null, (dispatch)=>({
    playVideo:(video)=>{dispatch(playVideo(video))}
}))(YouItem);