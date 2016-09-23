/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import $ from 'jquery';
export default class RandomImg extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], loading: 'Please click random button'};
        this.randomImg = this.randomImg.bind(this);
    }

    randomImg() {
        this.setState({loading: 'loading...'});
        var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
        let $this = this;
        $.getJSON(imgurAPI).done(function (data) {
            //dispatch({type:'IMG', data:data.data});
            $this.setState({data: data.data, loading:'loaded'});
        });
    }

    render() {
        function ImageList(props){
            //const mapImages = data.map((item)=>("<img src='"+item.link+"' style='height:200px'/>"));
            return (
                <div>
                    {props.data.map((item)=>(<img key={item.id} src={item.link} style={{height:'200px'}}/>))}

                </div>
            )
        }

        return (
            <div>
                <p>
                    <button onClick={this.randomImg}>Random Image</button>
                    <br/>
                    CountStatus: <span> {this.state.loading}</span>

                </p>
                <ImageList data={this.state.data}/>
            </div>
        );
    }
}