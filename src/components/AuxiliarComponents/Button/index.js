import React from 'react';
import './styles.css';

const Button = (props) => (
    <div className='Button'>
        {props.children}
    </div>
);

export default Button;