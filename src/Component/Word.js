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

class Word extends Component{
    getButton(){
        if(this.props.wordInfo.isMemorized) return <button className="btn btn-danger">Forgot</button> ;
        return(
            <button className="btn btn-success">Memoried</button> 
        );
    }
    render(){
        const { wordInfo } = this.props;
        const {en , vn , isMemorized} = wordInfo;
        return(
        <div className="word">
            <div className="word-container">
            <h3 className="text-success">{en}</h3>
            <h3 className="text-danger">
                {isMemorized ? '----' : vn}
            </h3>
            </div>
            <div className="btn-container">
            {this.getButton()}
    
            <button className="btn btn-warning" >
                Remove
            </button>
            </div>
        </div>
        );
    }
}
export default Word;
