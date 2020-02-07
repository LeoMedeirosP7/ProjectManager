import React from 'react';
import './styles.css'

const Mark = (props) => {
    return (
        <div className="Mark">
            <form>
                <input className="Check" type="checkbox" />
            </form>
            <p>{props.mark.name}</p>
            <button 
                className="RemoveButton"
                onClick={props.remove}
            >
                -
            </button>
        </div>
    );
};

export default Mark;