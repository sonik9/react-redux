/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import Counter from './Counter';
import Sum from './Sum';
import RandomImage from './RandomImg';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //Object Destructuring for :19,20,21 lines
        const {value:{count,sum,img},onDecrement,onSum,onRandomImage} = this.props;
        return (
            <div>
                <h1>React</h1>
                <Counter count={count} onDecrement={onDecrement}   />
                <Sum sum={sum} onSum={onSum}   />
                <RandomImage img={img} onRandomImage={onRandomImage}   />
            </div>
        )
    }
}