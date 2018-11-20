import React from 'react'
const Letters = (props) => (
    <div className = 'letters-container'>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="a"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="b"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="c"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="d"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="e"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="f"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="g"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="h"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="i"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="j"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="k"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="l"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="m"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="n"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="o"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="p"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="r"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="s"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="t"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="u"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="w"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="y"/>
        <input className="letter" type="button" onClick = {props.onClickLetters} disabled={props.isDisabled} value="z"/>
        <input className="next-game" type="button" onClick = {() => location.reload()} disabled={props.isDisabled} value="New Game"/>
        
        
        {/* <input className="letter" type="button" onClick = {props.letFindPass} value="Password"/> */}

    </div>
);
export default Letters