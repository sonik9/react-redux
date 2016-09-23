/**
 * Created by Vitalii on 9/22/2016.
 */
import React, {Component, PropTypes } from 'react'
import { todoToggle } from '../../redux/actions/todo'
import { connect } from 'react-redux'

const TodoItem = ({id, todoToggle, completed, text}) =>  (
    <li
        onClick={ () => {todoToggle(id)} }
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

/*TodoItem.propTypes = {
    todoToggle: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.number.isRequired
}*/

export default connect(null,{todoToggle})(TodoItem)