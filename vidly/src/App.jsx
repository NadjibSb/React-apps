import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Movies />
      </div>
    );
  }
}

export default App;
