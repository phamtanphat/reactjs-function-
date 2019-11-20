import * as actionTypes from '../actions/actionTypes'
function ShouldShowFormReducers(state = false , action){
    switch(action.type){
        case actionTypes.TOGGLE_FORM : return !state;
        case actionTypes.ADD_WORD : return !state;
        default : return state;
        
    }
}

export default ShouldShowFormReducers;