import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };

  constructor() {
    super();
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App mounted");
  }

  handleIncrementClick = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrementClick = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handlehandleDeleteClick = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleResetClick = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters });
  };

  render() {
    console.log("App render");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleResetClick}
            onIncrement={this.handleIncrementClick}
            onDecrement={this.handleDecrementClick}
            onDelete={this.handlehandleDeleteClick}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
