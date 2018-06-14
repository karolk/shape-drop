import React, { Component } from "react";
import Tray from "./Tray";
import Desk from "../containers/Desk";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tray shapes={this.props.shapes} />
        <Desk />
      </div>
    );
  }
}

export default App;
