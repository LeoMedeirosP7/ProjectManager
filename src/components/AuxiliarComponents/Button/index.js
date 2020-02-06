import React from 'react';
import './styles.css';

const Button = (props) => (
    <div className='Button' onClick={props.onClick}>
        {props.children}
    </div>
);

export default Button;