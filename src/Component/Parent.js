import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.onReset = this.onReset.bind(this);
        this.onDescrease = this.onDescrease.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
    }
    onIncrease(){
        this.setState({count : this.state.count + 1});
    }
    onDescrease(){
        this.setState({count : this.state.count - 1});
    }
    onReset(){
        this.setState({count : 0});
    }
    render() {
        return (
            <div>
                <h3>Value : {this.state.count} </h3>
                <Child 
                    onDescrease={this.onDescrease}
                    onIncrease={this.onIncrease}
                    onReset={this.onReset}
                />
            </div>
        );
    }
}

class Child extends Component {
    render() {
        const { onDescrease , onIncrease ,onReset } = this.props;
        return (
            <div>
                <button className="btn btn-success" onClick={onIncrease}>Increase</button>
                <button className="btn btn-danger" onClick={onDescrease}>Descrease</button>
                <button className="btn btn-warning" onClick={onReset}>Reset</button>
            </div>

        );
    }
}