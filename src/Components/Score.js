import React from 'react'
const Score = (props) => (
    <div className = "score">
        {props.isWinner && <p className="score-winner">You Won a game!</p>}
        {props.isLoose && <p className="score-looser">You loose a game!</p>}
    </div>
);
export default Score