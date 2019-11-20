import * as actionTypes from '../actions/actionTypes'
import {Api} from './Api'
import { takeLatest , put } from 'redux-saga/effects'; 


function* getData(){
    try {
        const receiveData = yield Api.getWord()
        yield put({ type: actionTypes.SET_WORD, words: receiveData }); 
    } catch (error) {
        
    }
}
function* toggleData(action){
    const data = yield Api.fetchtoggle(action._id , action.isMemorized)
    yield put({type : actionTypes.TOGGLE_WORD , _id : data._id , isMemorized : data.isMemorized})
}

export function* isToggleWord(){
    yield takeLatest(actionTypes.FETCH_TOGGLE,toggleData)
}
export function* setWord() {
    yield takeLatest(actionTypes.FETCH_DATA, getData);
}