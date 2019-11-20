import * as action from '../actions/index'
import {connect} from 'react-redux'
import List from '../Component/List';

const mapStateToProps = (state) =>{
    return {words : state.words ,filterMode : state.filterMode}
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onFetchdata : () =>{
            dispatch(action.fetchdata())
        }
    }
}

const ListContainer = connect(mapStateToProps,mapDispatchToProps)(List)
export default ListContainer