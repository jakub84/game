import React from 'react'
const InputField = (props) => (
    <div>
            <form className="form"
                onSubmit={props.onFormSubmit}
                id="form">
            <input type='text'
                value={props.inputValue}
                onChange={props.onChangeInput}
                placeholder="Type your answer"
                autoComplete="off"
                name="Your answer" 
                id="answer" 
                maxLength={props.maxLength} />
            <button
            onClick = {props.checkAnswers}
            >Click</button>
            </form>
    </div>
);
export default InputField