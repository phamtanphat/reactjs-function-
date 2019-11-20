import { call , fork } from 'redux-saga/effects';

import { setWord , isToggleWord} from './WordSaga';

function* fetchall(){
    yield fork(setWord)
    yield fork(isToggleWord)
}
export default function* rootSaga() {
    yield call(fetchall)
}