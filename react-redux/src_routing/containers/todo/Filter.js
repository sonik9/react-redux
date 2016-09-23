/**
 * Created by Vitalii on 9/23/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {todoFilter} from '../../redux/actions/todo'
const Filter = ({children, onFilter, active})=> {
    if(active){
        return (<span>{children}</span>);
    }
    return (
        (<a href="#" onClick={(e)=> {
            "use strict";
            e.preventDefault();
            onFilter("");
        }}>{children}</a>)
    )
};

export default connect((state,ownProps)=>{
    //debugger;
    return{
        active: state.todos.filter === ownProps.filter
    }
}, (dispatch, ownProps)=> {
    return {
        onFilter: ()=> {
            dispatch(todoFilter(ownProps.filter));
        }
    }
})(Filter);