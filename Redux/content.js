import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.value}</h1>
        <button onClick={this.props.onIncrement}>Add</button>
        <button onClick={this.props.onDecrement}>Subtract</button>
      </div>
    );
  }
};
