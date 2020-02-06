import React from 'react';
import './styles.css'

const Mark = (props) => {
    return (
        <div className="Mark">
            <form>
                <input className="Check" type="checkbox"/>
            </form>
            <p>{props.markName}</p>
            <button className="RemoveButton">-</button>
        </div>
    );
};

export default Mark;