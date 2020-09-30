import React, { Component } from 'react';

class StatePatterns extends Component {

    state = {
        score: 0
    }

    increment = () => {
        this.setState(curSte => ({ score: curSte.score + 1}));
    }

    decrement = () => {
        this.setState(curSte => ({ score : curSte.score - 1}));
    }

    render() {
        return (
            <div>
                <h1>Socre : {this.state.score}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default StatePatterns;