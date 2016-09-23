/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';

export default class RandomImg extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        //Object Destructuring for :19,20,21 lines
        const {data,img,onRandomImage} = this.props;
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
                    <button onClick={onRandomImage}>Random Image</button>
                    <br/>
                    CountStatus: <span> {img.loading}</span>
                </p>
                <ImageList data={img.data}/>
            </div>
        );
    }
}