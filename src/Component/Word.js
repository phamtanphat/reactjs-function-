import React , {Component} from 'react';

//stateless component
//functional component
// export function Word(){
//     return(
//         <div>
//             <h3>One</h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// const Word = (props) =>{
//     return(
//         <div>
//             <h3 style={{color : props.wordinfo.isMemorized ? 'green' : 'red'}}>
//                 {props.wordinfo.en}
//             </h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// export default Word;

export default class Word extends Component{

    render(){
        const { word , onremoveword , ontoggleWord} = this.props;
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
                    onClick={() => ontoggleWord(word.id)}>
                    {word.isMemorized ? 'Forgot' : 'Memoried'}
                </button>
        
                <button 
                    className="btn btn-warning"
                    onClick={() => onremoveword(word.id)}>
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

