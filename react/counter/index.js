import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './src/components/Counter';
import Sum from './src/components/Sum';
import RandomImage from './src/components/RandomImg';
//import { createStore } from 'redux'
//import Counter from './components/Counter'
//import counter from './reducers'

//const store = createStore(counter)
//const rootEl = document.getElementById('root')

class Describe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <span style={{color:'red'}}>
            Describe:{this.props.describe};
        </span>
        );
    }

}

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {describe:'none'};
        this.upDescribe = this.upDescribe.bind(this);
    }
    upDescribe(name){
        this.setState({describe:name});
    }
    render() {
        const func02 = function () {
            console.log("Hello from func02");
            return "function in render()"
        };
        return (
            <div>
                <h1>React</h1>
                <Describe describe = {this.state.describe}/>
                <Counter upDescribe={this.upDescribe}/>
                <Sum/>
                <RandomImage/>
            </div>
        )
    }
}

ReactDOM.render(
    <Example/>,
    document.getElementById('root')
);
