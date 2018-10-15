import React, { Component } from 'react';
import Word from './Word.js';
import Form from './Form.js';
import Filter from './Filter.js';
const words = [
    {id : 'a1' ,  en : 'One' , vn : 'Một' , isMemorized : true},
    {id : 'a2' ,  en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' ,  en : 'Three' , vn : 'Ba' , isMemorized : true},
  ]

export default class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            words : words,
            txtEn : '',
            txtVn : '',
            shouldShowForm : false,
            filterMode : 'Show_All'
        }
        this.onaddWord = this.onaddWord.bind(this);
        this.ontoggleForm = this.ontoggleForm.bind(this);
        this.onremoveword = this.onremoveword.bind(this);
        this.ontoggleWord = this.ontoggleWord.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }
    onremoveword(id){
        const words = this.state.words.filter(w => w.id !== id);
        this.setState({words : words});
    }
    ontoggleWord(id){
        const words = this.state.words.map(w => {
            if(id !== w.id) return w;
            return {...w,isMemorized : !w.isMemorized}
        });
        this.setState({words : words});
    }
    ontoggleForm(){
        this.setState({shouldShowForm : !this.state.shouldShowForm});
    }
    onaddWord(new_word){
        const new_words = words.concat(new_word);
        this.setState({words : new_words  , shouldShowForm : false}); 
    }
    onChangeFilter(filterMode){
        this.setState({filterMode});
    }
    get FilterWord(){
        return(
        this.state.words.filter(w => {
            if(this.state.filterMode === 'Show_Memoried' && !w.isMemorized) return false; 
            if(this.state.filterMode === 'Show_Forgot' && w.isMemorized) return false;
            return true;    
        }));
       
    }
    render(){
        const {filterMode , shouldShowForm} = this.state;
        return(
                <div>
                {<Form 
                    shouldShowForm={shouldShowForm} 
                    ontoggleForm={this.ontoggleForm}
                    onaddWord={this.onaddWord}/>}
                <br/>
                <Filter 
                    filterMode={filterMode}
                    onChangeFilter={this.onChangeFilter} />
                {this.FilterWord.map(w => 
                    <Word
                         word={w} 
                         key={w.id}
                         onremoveword={this.onremoveword}
                         ontoggleWord={this.ontoggleWord}/>)}
            </div>
        );
    }
}