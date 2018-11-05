import React from 'react'
const InputField = (props) => (
    <div className="input-field-body">
         <button
            className="user-btn-generate"
            onClick = {props.chooseBtn}
            >Generate</button>
            <form className="user-form"
                
                onSubmit={props.onFormSubmit}
                id="form">
            <input type='text'
                className="user-form-input"
                disabled = {props.isInputDisabled}
                value={props.inputValue}
                onChange={props.onChangeInput}
                placeholder={props.placeholder}
                autoComplete="off"
                name="Your answer" 
                id="answer" 
                maxLength={props.maxLength} />
            <button
            className="user-form-btn"
            onClick = {props.checkAnswers}
            disabled = {props.isBtnDisabled}
            >Check</button>
            </form>
           
    </div>
);
export default InputField