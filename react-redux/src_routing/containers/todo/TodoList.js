/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        //this.state = {listOfTodo:[]};
    }
    render() {
        console.log(this.props.todoOfList);
        return (
            <ul>
                {this.props.todoOfList.map((item)=>(
                    <TodoItem key={item.id}  id={item.id} completed={item.completed} text={item.text}/>
                ))}
            </ul>
        )
    }
}
export default connect((state)=>{
    const {todo, filter} = state.todos;
    switch (filter){
        case 'ALL':{
            return {todoOfList:todo};
        }
        case 'SHOW_COMPLETED':{
            return {todoOfList:todo.filter((items)=>items.completed)};
        }
        case 'SHOW_ACTIVE':{
            return {todoOfList:todo.filter((items)=>!items.completed)};
        }
        default:{
            return console.error('unexpected "todosFilter" : ', todosFilter)
        }
    }

},null)(TodoList);