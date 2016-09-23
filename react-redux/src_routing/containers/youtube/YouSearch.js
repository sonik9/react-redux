/**
 * Created by Vitalii on 9/23/2016.
 */
/**
 * Created by Vitalii on 9/21/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {youSearch} from '../../redux/actions/youtube';

class YouSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText:'eminem'};
    }

    render() {
        const {searchText} = this.state;
        const onSearch = (e) =>{
            e.preventDefault();
            if(!searchText.trim()){
                return;
            }
            this.props.youSearch(searchText);
            this.setState({searchText:''});
        }

        return (
            <div>
                <form onSubmit={onSearch}>
                    <input value={searchText} type="text" onChange={(e)=> {
                        this.setState({searchText: e.target.value})
                    }}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
//or just send {todoAdd}
const mapDispatchToProps = function (dispatch) {
    return {
        youSearch:(text)=>{
            dispatch(youSearch.bind(null,text));
        }
    }

}
export default connect(null, mapDispatchToProps)(YouSearch);
///(dispatch)=>({onAddTodo:(text)=>dispatch(todoAdd(text))})
