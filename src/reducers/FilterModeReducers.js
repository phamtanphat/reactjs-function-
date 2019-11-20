import * as actionTypes from '../actions/actionTypes'
function FilterModeReducers(filter = 'Show_All' , action){
    switch(action.type){
        case actionTypes.SET_FILTER_MODE : return action.filtermode
        default : return filter
    }

}

export default FilterModeReducers;