import React, { Component } from 'react'
import WordContainer from '../container/WordContainer';
import FillterModeContainer from '../container/FillterModeContainer';
import ShouldShowFormContainer from '../container/ShouldShowFormContainer';

export default class List extends Component {
  componentDidMount(){
    this.props.onFetchdata()
  }
  render() {
    return (
      <div>
        <ShouldShowFormContainer/>
        <FillterModeContainer/>
        {this.props.words.filter(w => {
            if(this.props.filterMode === 'Show_Forgot' && !w.isMemorized) return false
            if(this.props.filterMode === 'Show_Memoried' && w.isMemorized) return false
            return true
        }).map(word => 
          <WordContainer 
            word={word} 
            key={word._id}/>)}
      </div>
    )
  }
}
