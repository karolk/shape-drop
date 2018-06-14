import React, { Component } from "react";
import { connect } from "react-redux";
import AppComponent from "../components/App";
import shapesActions from "../actions/shapes";

class App extends Component {
  componentDidMount() {
    fetch("https://api.myjson.com/bins/17hwua")
      .then(res => res.json())
      .then(this.props.createShapesFetchSuccess)
      .catch(this.props.createShapesFetchFailure);
  }

  render() {
    return <AppComponent shapes={this.props.shapes} />;
  }
}

const mapStateToProps = ({ shapes }) => ({
  shapes: shapes ? shapes.map(({ type }) => type) : null
});

export default connect(
  mapStateToProps,
  shapesActions
)(App);
