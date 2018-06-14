import React, { Component } from "react";
import { connect } from "react-redux";
import AppComponent from "../components/App";
import shapesActions from "../actions/shapes";
import { SHAPES_URL } from "../config";

class App extends Component {
  componentDidMount() {
    fetch(SHAPES_URL)
      .then(res => res.json())
      .then(this.props.createShapesFetchSuccess)
      .catch(this.props.createShapesFetchFailure);
  }

  render() {
    const { shapes, error } = this.props;
    return <AppComponent shapes={shapes} error={error} />;
  }
}

const mapStateToProps = ({ shapes, app }) => ({
  shapes: shapes ? shapes.map(({ type }) => type) : null,
  error: app.error
});

export default connect(
  mapStateToProps,
  shapesActions
)(App);
