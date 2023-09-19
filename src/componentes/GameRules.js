import React from 'react'

export const GameRules = (props) => {
  return (
    <>
        <div className="rules"  id="rules">
        <button onClick={props.rules}>CLOSE</button>
            <h3>Really? You don't know hoy to play?!</h3>
            <h3>RULES FOR ROCK PAPER SCISSORS</h3>
            <div className="video">
                <ul>
                    <li>Scissors cuts Paper</li>
                    <li>Paper covers Rock</li>
                    <li>Rock crushes Scissors.</li>
                </ul>
            </div>
        </div>
    </>
  )
}
