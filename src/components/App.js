import React, { Component } from "react";
import ErrorMessage from "./ErrorMessage";
import Tray from "./Tray";
import Desk from "../containers/Desk";
import "./App.css";

class App extends Component {
  render() {
    const { error, shapes } = this.props;
    return (
      <div className="App">
        {error && <ErrorMessage error={error} />}
        <Tray shapes={shapes} />
        <Desk />
      </div>
    );
  }
}

export default App;
