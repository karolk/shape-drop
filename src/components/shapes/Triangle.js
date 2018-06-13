import React from 'react';
import './Triangle.css';

const Triangle = (shape) => (
    <div className="Triangle">
        <svg viewBox="0 0 102 102">
            <polygon points="51,1 101,101 1,101" />
        </svg>
    </div>
)

export default Triangle;
