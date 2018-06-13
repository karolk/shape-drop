import React, { PureComponent } from 'react';
import getComponentFromType from './shapes';
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
        const { shelf } = this.props; 
        return (
            <div className="Shelf" onDragOver={this.handleDragOver} onDrop={this.handleDrop} />
        );
    }
}

export default Shelf;