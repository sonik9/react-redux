/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeVideo} from '../../redux/actions/youtube';

class YouVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    render() {
        const {state:{visible},props:{video:{id:{videoId}}}} = this;
        //debugger;
        let modalStyle = {
            position: 'fixed',
            height: '100%',
            width: '100%',
            background: 'rgba(0,0,0,.6)'
        }
        let frameStyle = {
            border:'none',
            width: '768px', height: '480px', transform: 'none'
        }
        let butCloseStyle = {
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            cursor: 'pointer',
            color: '#999',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border:'none'
        }
        console.log("https://www.youtube.com/embed/${videoId}");
        return (
            <div style={modalStyle}>
                <div style={{top:'25%',left:'25%',    position: 'fixed'}}>
                    <iframe style={frameStyle} src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            allowFullScreen></iframe>
                    <button onClick={this.props.closeVideo} title="закрыть" style={butCloseStyle}>X</button>
                </div>
            </div>
        )
    }
}
//or just send {todoAdd}

export default connect(null, {closeVideo})(YouVideo);
///(dispatch)=>({onAddTodo:(text)=>dispatch(todoAdd(text))})
