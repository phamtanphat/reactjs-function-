import React, { Component } from 'react';

const words = [
    {id : 'a1' ,  en : 'One' , vn : 'Một' , isMemorized : true},
    {id : 'a2' ,  en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' ,  en : 'Three' , vn : 'Ba' , isMemorized : true},
  ]

export default class List extends Component{
    constructor(props){
        super(props)
        this.state = {words : words}
        this.getWordItem = this.getWordItem.bind(this);
        
    }
    removeword(id){
        const words = this.state.words.filter(w => w.id !== id);
        this.setState({words : words});
    }
    toggleWord(id){
        const words = this.state.words.map(w => {
            if(id !== w.id) return w;
            return {...w,isMemorized : !w.isMemorized}
        });
        this.setState({words : words});
    }
    getWordItem(word){
        return(
            <div className="word" key={word.id}>
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button 
                    className={word.isMemorized ? 'btn btn-danger' : 'btn btn-success'}
                    onClick={() => this.toggleWord(word.id)}>
                    {word.isMemorized ? 'Forgot' : 'Memoried'}
                </button>
        
                <button className="btn btn-warning"
                    onClick={() => this.removeword(word.id)}>
                    Remove
                </button>
                </div>
            </div>
        );
    }
    render(){
        return(
            <div className='App text-center'>
                {this.state.words.map(this.getWordItem)}
            </div>
        );
    }
}