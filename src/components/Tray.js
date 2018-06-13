import React, { PureComponent } from 'react';
import Shape from './Shape';
import './Tray.css';

class Tray extends PureComponent {
    render() {
        const { shapes } = this.props
        return (<div className="Tray">
            {shapes && shapes.map((shape, index) => <Shape shape={shape} key={index} />)}
        </div>)
    }
}

export default Tray;