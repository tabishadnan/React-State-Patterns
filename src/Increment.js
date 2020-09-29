import React, { Component } from 'react';

class Increment extends Component {

    state = {
        isIncrement : 0
    }

    render() {
        return (
            <div>
                <h3>isIncrement :  {this.state.isIncrement}</h3>
                <p>
                    <button onClick={this.increment}>Increment</button>
                </p>
            </div>
        );
    }
}

export default Increment;