import React, { Component } from 'react';
import {connect} from 'react-redux';
import {summ} from '../../redux/actions/index';
class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {a:1, b:3};
    }

    render(){
        const {state:{a,b},props:{onSum,sum}} = this;
        return(
            <div>
                <p>
                    <input type="text" defaultValue={this.state.a} onChange={(e)=>{this.setState({a:+e.target.value})}} /> +
                    <input type="text" defaultValue={this.state.b} onChange={(e)=>{this.setState({b:+e.target.value})}} /> =
                    <span >{sum}</span>
                    <button onClick={()=>onSum(a,b)}>Sum</button>
                </p>
            </div >
        );
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        onSum: (a,b)=> dispatch(summ(a,b))
    }
}
export default connect((state)=>({sum:state.examples.sum}),mapDispatchToProps)(Sum);

