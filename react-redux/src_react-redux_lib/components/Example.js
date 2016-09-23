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
        return (
            <div>
                <h1>React</h1>
                <Counter/>
                <Sum/>
                <RandomImage/>
            </div>
        )
    }
}