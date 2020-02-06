import React from 'react';
import './styles.css';

const inputText = (props) => {
    const {exportValue, labelValue, inputType} = props;

    return(
        <div className="InputHoc">
            <div className="AppInputText">

                <b className="AppLabel"> {labelValue} </b>

                <form className="AppInputForm">

                    <input 
                        className="AppInput"
                        type={inputType}
                        onChange={ ( event ) => exportValue(event.target.value) }
                    />

                </form>
            </div>
        </div>
    );
}

export default inputText;