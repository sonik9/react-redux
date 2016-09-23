import React, { Component } from 'react';

export default class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {sum:4, a:1, b:3};
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" defaultValue={this.state.a} onChange={(e)=>{this.setState({a:+e.target.value})}} /> +
                    <input type="text" defaultValue={this.state.b} onChange={(e)=>{this.setState({b:+e.target.value})}} /> =
                    <span >{this.state.sum}</span>
                    <button onClick={()=>{this.setState({sum:this.state.a + this.state.b})}}>Sum</button>
                </p>
            </div>
        );
    }
}