import React from 'react';
import './styles.css';

const inputText = (props) => {
    const {exportValue, labelValue, inputType} = props;

    return(
        <div className="InputHoc">
            <div className="AppInputText">
                <b className="AppLabel">
                    {labelValue}
                </b>

                <input 
                    className="AppInput"
                    type={inputType}
                    onChange={
                        ( event ) => exportValue(event.target.value) 
                    }
                />
            </div>
        </div>
    );
}

export default inputText;