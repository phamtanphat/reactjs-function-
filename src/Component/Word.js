import React , {Component} from 'react';
export default class Word extends Component{

    render(){
        const { word } = this.props;
        return(
            <div className="word" key={word._id}>
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button 
                    className={word.isMemorized ? 'btn btn-danger' : 'btn btn-success'}
                    onClick={() => this.props.onToggle(word._id , !word.isMemorized)}>
                    {word.isMemorized ? 'Forgot' : 'Memoried'}
                </button>
        
                <button 
                    className="btn btn-warning"
                    onClick={() => this.props.onRemove(word._id)}>
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

