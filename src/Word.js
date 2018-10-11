import React from 'react';

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
const Word = (props) =>{
    return(
        <div>
            <h3>{props.wordinfo.en}</h3>
            <p3>Mot</p3>
        </div>
    );
}
export default Word;