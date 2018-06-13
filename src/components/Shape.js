import React, { PureComponent } from 'react';
import { getComponentFromType } from './shapes';

class Shape extends PureComponent {
    handleDragStart = event => {
        event.dataTransfer.setData('text/plain', this.props.shape)
    }

    render() {
        const { shape } = this.props
        const Component = getComponentFromType(shape)
        return (
            <div
                draggable
                onDragStart={this.handleDragStart}
            >
                {Component ? <Component shape={shape} /> : null}
            </div>);
    }
}

export default Shape;