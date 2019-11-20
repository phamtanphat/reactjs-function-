    
import {createStore , applyMiddleware} from 'redux';
import reducers from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga/index';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

export default store;