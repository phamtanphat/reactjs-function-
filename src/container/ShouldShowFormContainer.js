import ShouldShowForm from '../Component/Form'
import * as action from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        shouldShowForm : state.shouldShowForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        ontoggleForm : () =>{
            dispatch(action.onToggleForm())
        },
        onaddWord : (word) =>{
            dispatch(action.onAddWord(word))
        }
        
    }
}

const ShouldShowFormContainer = connect(mapStateToProps,mapDispatchToProps)(ShouldShowForm)
export default ShouldShowFormContainer