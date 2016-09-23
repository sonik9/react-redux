/**
 * Created by Vitalii on 9/21/2016.
 */
import React, { Component } from 'react';
export default class Counter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        //Object Destructuring for :16,17 lines
        const {count:{result},onDecrement} = this.props;
        return(
            <div>
                <p>
                    Clicked: <span >{result}</span> times
                    <button onClick={onDecrement}>Decrement</button>
                    <button>Increment Async</button>
                </p>
            </div>
        );
    }
}
