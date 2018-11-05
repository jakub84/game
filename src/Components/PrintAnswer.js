import React from 'react'
const PrintAnswer = (props) => (
    <div className="print-answer">
        <p className="pass-info">This word has <span>{props.password.length}</span> letters.</p>
        <p className="category">Category:
            <span> {props.category}</span>
        </p>
        <p className="pass">{props.password}</p>
        
    </div>
);
export default PrintAnswer