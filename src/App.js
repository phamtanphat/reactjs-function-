import React, { Component } from 'react';
import './App.css';
import Word from './Word';
import ListWord from './ListWord';
class App extends Component {
  render() {
    const word1 = {en : 'One' ,vn : 'Mot'};
    return (
      <div className="App">
        <Word wordinfo={word1}></Word>
        <ListWord title="English - Vietnam"></ListWord>
      </div>
    );
  }
}

export default App;
