import React, { PureComponent } from 'react';
import Shape from './Shape';
import './Shelf.css';

class Shelf extends PureComponent {
    handleDragOver = e => {
        e.preventDefault();
    }

    handleDrop = e => {
        e.preventDefault();
        const type = e.dataTransfer.getData('text/plain');
        this.props.handleShapeMove({ type })
    }

    render() {
        const { items } = this.props.shelf;
        return (
            <div className="Shelf" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                {items.map((shape, index) => <Shape shape={shape.type} key={index} />)}
            </div>
        );
    }
}

export default Shelf;