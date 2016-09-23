/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoAdd} from '../../redux/actions/todo';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ""}
    }

    render() {
        const {state:{todoText}} = this;

        const onAddTodo = (e) =>{
            e.preventDefault();
            if(!todoText.trim()){
                return;
            }
            this.props.todoAdd(todoText);
            this.setState({todoText:''});
        }

        return (
            <div>
                <form onSubmit={onAddTodo}>
                    <input value={todoText} type="text" onChange={(e)=> {
                        this.setState({todoText: e.target.value})
                    }}/>
                    <button type="submit">Add </button>
                </form>
                    {/*<br/>
                    <ul>
                        {listOfTodo.map((item)=>(<li key={item} style={{color: 'blue'}}>{item}</li>))}
                    </ul>*/}

            </div>
        )
    }
}
//or just send {todoAdd}
const mapDispatchToProps = function (dispatch) {
    return {
        onAdd: function (text) {
            dispatch(todoAdd(text));
        }
    }

}
export default connect(null, {todoAdd})(TodoAdd);
///(dispatch)=>({onAddTodo:(text)=>dispatch(todoAdd(text))})