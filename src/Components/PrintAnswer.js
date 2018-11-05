import React from 'react'
const PrintAnswer = (props) => (
    <div>
        Your password has {props.password.length} letters: {props.password}
    </div>
);
export default PrintAnswer