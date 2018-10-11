import React, { Component } from 'react';

//stateful component
class ListWord extends Component{
    render(){
        return(
            <div>
                {this.props.title}
            </div>
        );
    }
}
export default ListWord;