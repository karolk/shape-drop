import React, { PureComponent } from "react";
import Shelf from "../containers/Shelf";
import "./Desk.css";

class Desk extends PureComponent {
  static defaultProps = {
    shelves: []
  };

  render() {
    const { shelves } = this.props;
    return (
      <div className="Desk">
        {shelves.map(shelf => <Shelf key={shelf.id} shelf={shelf} />)}
      </div>
    );
  }
}

export default Desk;
