import React, { Component } from 'react';

export default class Filter extends Component{
    render(){
        const { filterMode , onChangeFilter } = this.props;
        return(
            <select 
                    className="word"
                    value={filterMode}
                    onChange={evt => {
                        onChangeFilter(evt.target.value)
                    }}>
                    <option value="Show_All">Show All</option>
                    <option value="Show_Memoried">Show Memoried</option>
                    <option value="Show_Forgot">Show Forgot</option>
                </select>
        );
    }
}