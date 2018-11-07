import React from 'react'
const PrintAnswer = (props) => (
    <div className="print-answer">
        {props.password.length > 0 ? <p className="pass-info">This word has <span>{props.password.length}</span> letters.</p>: <p></p>}
        <p className="category">Category:
            <span> {props.category}</span>
        </p>
        {props.tries < 5 && props.tries >= 0 ? <p>You have {props.tries} tries</p>: <p></p>}
        {props.password && <p className="pass">{props.password}</p>}
        
    </div>
);
export default PrintAnswer