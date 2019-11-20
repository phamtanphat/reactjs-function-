import WordReducers from './WordReducers'
import FilterModeReducers from './FilterModeReducers'
import ShouldShowFormReducers from './ShouldShowFormReducers'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    words : WordReducers,
    filterMode : FilterModeReducers,
    shouldShowForm : ShouldShowFormReducers
})
export default reducers