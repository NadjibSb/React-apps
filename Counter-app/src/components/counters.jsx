import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //console.log("Counters render");
    return (
      <div>
        {this.props.counters.length === 0 && "There is no Tags"}
        <button
          className="btn btn-sm btn-primary m-4"
          onClick={() => this.props.onReset()}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            <span>Counter #{counter.id} : </span>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
