import React, { Component } from 'react';
import './App.css';
import ListContainer from './container/ListContainer';
import {Provider} from 'react-redux';
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ListContainer/>
      </Provider>
    );
  }
}

export default App;
