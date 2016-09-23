/**
 * Created by Vitalii on 9/21/2016.
 */
import React, { Component } from 'react';
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.decrease = this.decrease.bind(this);
    }
    decrease(){
        this.setState({count:this.state.count-1});
        this.props.upDescribe('jenjinrejr');
    }
    render(){
        return(
            <div>
                <p>
                    Clicked : <span >{this.state.count}</span> times
                    <button onClick={this.decrease}>Decrement</button>
                    <button>Increment Async</button>
                </p>
            </div>
        );
    }
}
