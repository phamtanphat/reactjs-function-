import {connect} from 'react-redux'
import * as action from '../actions/index'
import Filter from '../Component/Filter';
const mapStateToProps = (state) =>{
    return {filterMode : state.filterMode}
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onChangeFilter : (filtermode) => {
            dispatch(action.onFiltermode(filtermode))
        }
    }
}

const FillterModeContainer = connect(mapStateToProps,mapDispatchToProps)(Filter)
export default FillterModeContainer