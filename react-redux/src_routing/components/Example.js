/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import Counter from '../containers/examples/Counter';
import Sum from '../containers/examples/Sum';
import RandomImage from '../containers/examples/RandomImg';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Examples</h1>
                <Counter/>
                <Sum/>
                <RandomImage/>
            </div>
        )
    }
}