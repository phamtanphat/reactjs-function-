import React, { Component } from 'react';

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
        this.getWordItem = this.getWordItem.bind(this);
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        
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
    toggleForm(){
        this.setState({shouldShowForm : !this.state.shouldShowForm});
    }
    addWord(){
        const new_word = {
            id : Math.random + '',
            en : this.state.txtEn,
            vn : this.state.txtVn,
            isMemorized : false                                    
        };
        const new_words = words.concat(new_word);
        this.setState({words : new_words , txtEn : '' , txtVn : '' , shouldShowForm : false}); 
    }
    get FilterWord(){
        return(
        this.state.words.filter(w => {
            if(this.state.filterMode === 'Show_Memoried' && !w.isMemorized) return false; 
            if(this.state.filterMode === 'Show_Forgot' && w.isMemorized) return false;
            return true;    
        }));
       
    }
    getForm(){
        const { txtEn , txtVn  } = this.state;
        if(!this.state.shouldShowForm) return (
            <button 
                className="btn btn-success"
                style={{width : 200 ,margin : 10}}
                onClick={this.toggleForm}>
                        +
            </button>
        );
        return (
            <div className="form-group word-from" >
                <input
                    placeholder="English"
                    className="form-control"
                    value={txtEn}
                    onChange={evt => this.setState({txtEn : evt.target.value})}/>
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={txtVn}
                    onChange={evt => this.setState({txtVn : evt.target.value})}/>
                <br />
                <div className="btn-container">
                    <button 
                        className="btn btn-success"
                        onClick={this.addWord}>
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.toggleForm}>
                        Cancel
                    </button>
                </div>
            </div>
        );
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
                <div className='App'>
                {this.getForm()}
                <br/>
                <select 
                    className="word"
                    value={this.state.filterMode}
                    onChange={evt => this.setState({filterMode : evt.target.value})}>
                    <option value="Show_All">Show All</option>
                    <option value="Show_Memoried">Show Memoried</option>
                    <option value="Show_Forgot">Show Forgot</option>
                </select>
                {this.FilterWord.map(this.getWordItem)}
            </div>
        );
    }
}