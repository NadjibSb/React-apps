import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("Actual Props", this.props);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value)
      console.log("Counter changed");
  }

  style = {
    fontSize: 22,
    fontWeight: "bold",
  };

  render() {
    //console.log("couter render");
    return (
      <div className="row">
        <div className="col-2" style={this.style}>
          {this.props.children}
        </div>
        <div className="col-1">
          <span className={this.formateClasses()} style={{ fontSize: 20 }}>
            {this.formateCount()}
          </span>
        </div>
        <div className="col">
          <button
            disabled={this.props.counter.value === 0 ? true : false}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  formateClasses() {
    let classes = "badge m-6 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formateCount(count) {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
