/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import TodoAdd from '../containers/todo/TodoAdd';
import TodoList from '../containers/todo/TodoList';
import TodoFilter from '../containers/todo/TodoFilter';
export default class Example extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <TodoAdd/>
                <TodoList/>
                <TodoFilter/>
            </div>
        )
    }
}