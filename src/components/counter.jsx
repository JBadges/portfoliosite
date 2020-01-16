import React, { Component } from "react";
import Particles from "react-particles-js";

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className="m-2">{this.state.count}</span>
        <button onClick={this.increment} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
