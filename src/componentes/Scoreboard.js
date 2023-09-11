import React from 'react'

export const Scoreboard = () => {
  return (
    
        <div className="scoreboard">
            <div className="scoreboard__div">
                <h4 id="player2">player</h4>
                    <p id="player_score">0</p>
            </div>
            
            <div className="reset__btn">
                <button className="reset__btn" type="button" onClick="reset()">RESET  SCORE</button>
            </div>
            <div className="scoreboard__div">
                <h4>Computer</h4>
                    <p id="computer_score">0</p>
            </div>
        </div>
    
  )
}
