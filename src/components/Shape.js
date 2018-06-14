import React, { PureComponent } from "react";
import { getComponentFromType } from "./shapes";

class Shape extends PureComponent {
  handleDragStart = event => {
    event.dataTransfer.setData("text/plain", this.props.shape);
  };

  render() {
    const { shape, draggable } = this.props;
    const Component = getComponentFromType(shape);
    return (
      <div
        draggable={draggable}
        onDragStart={this.handleDragStart}
        className="Shape"
      >
        {Component ? <Component shape={shape} /> : null}
      </div>
    );
  }
}

export default Shape;
