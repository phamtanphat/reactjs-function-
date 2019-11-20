
import { connect } from 'react-redux';
import Word from '../Component/Word';
import * as action from'../actions/index'
const mapStateToProps = (state) =>{
    return {words : state.words}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onToggle : (newId , isMemorized) => {
            dispatch(action.fetchtoggle(newId,isMemorized))
        },
        onRemove : (newId)=> {
            dispatch(action.onRemoveWord(newId))
        }
    }
}

const WordContainer = connect(mapStateToProps,mapDispatchToProps)(Word)
export default WordContainer