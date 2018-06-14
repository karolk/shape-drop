import React, { PureComponent } from "react";
import Shape from "./Shape";
import "./Shelf.css";

class Shelf extends PureComponent {
  handleDragOver = e => {
    e.preventDefault();
  };

  handleDrop = e => {
    e.preventDefault();
    // TODO change source of truth to be currently moving shape
    const type = e.dataTransfer.getData("text/plain");
    this.props.handleShapeMove({ type });
  };

  render() {
    const { weight, weightUnit, shelf, canAcceptMovingShape } = this.props;
    const { items } = shelf;
    const className = [
      "Shelf",
      canAcceptMovingShape ? "" : "Shelf-closed"
    ].join(" ");
    return (
      <div className={className}>
        <div
          className="Shelf-shapes"
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        >
          {items.map((shape, index) => (
            <Shape shape={shape.type} key={index} />
          ))}
        </div>
        <p>
          Total weight: {weight.toFixed(2)} {weightUnit}
        </p>
      </div>
    );
  }
}

export default Shelf;
