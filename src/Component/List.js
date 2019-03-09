import React, { Component } from 'react'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
const words = [
    {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
    {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : true}
 ]
export default class List extends Component {
  constructor(props){
    super(props);
    this.state = {words  , shouldShowForm : false , filterMode : 'Show_All'}
    this.ontoggleForm = this.ontoggleForm.bind(this);
    this.onremoveWord = this.onremoveWord.bind(this);
    this.ontoggleWord = this.ontoggleWord.bind(this);
    this.onaddWord = this.onaddWord.bind(this);
    this.onChangeFilterMode = this.onChangeFilterMode.bind(this);
  }
  onremoveWord(id){
    const newWords = this.state.words.filter(w => w.id !== id);
    this.setState({words :newWords});
  }
  ontoggleWord(id){
    const newWords = this.state.words.map(w =>{
      if(w.id !== id) return w;
      // const {id , en , vn  } = word;
      const newWord = {...w , isMemorized :!w.isMemorized}
      return newWord;
  })
  this.setState({words : newWords});
  }
  ontoggleForm(){
    this.setState({shouldShowForm : !this.state.shouldShowForm})
  }
  getFiltermode(){
    const {words , filterMode} = this.state;
    const newWords = words.filter(w => {
      if(filterMode === 'Show_Forgot' && w.isMemorized) return false;
      if(filterMode === 'Show_Memorized' && !w.isMemorized) return false;
      return true;
    })
    return newWords
  }
  onaddWord(newWord){    
    const newWords = this.state.words.concat(newWord);
    this.setState({words : newWords , shouldShowForm : false });
  }
  onChangeFilterMode(filterMode){
    this.setState({filterMode})
  }
  render() {
    return (
      <div>
        {<Form 
            shouldShowForm={this.state.shouldShowForm}
            ontoggleForm={this.ontoggleForm}
            onaddWord={this.onaddWord}
        />}
        {<Filter 
            filterMode={this.state.filterMode}
            onChangeFilterMode={this.onChangeFilterMode}/>}
        {this.getFiltermode().map(word => 
          <Word 
            word={word} 
            key={word.id}
            onremoveWord={this.onremoveWord}
            ontoggleWord={this.ontoggleWord}/>)}
      </div>
    )
  }
}
