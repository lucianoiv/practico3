import React from 'react'
import video from '../video/video.mp4'

export const GameRulesVideo = (props) => {
  return (
    <>
        
        <div className="rules" id="video">
        <button className='title__btn' onClick={props.rulesVideo}>CLOSE</button>
            <h3>RULES FOR ROCK PAPER SCISSORS LIZARD SPOCK</h3>
            <div className="video">
                <ul>
                    <li>Scissors cuts Paper</li>
                    <li>Paper covers Rock</li>
                    <li>Rock crushes Lizard</li>
                    <li>Lizard poisons Spock</li>
                    <li>Spock smashes Scissors</li>
                    <li>Scissors decapitates Lizard</li>
                    <li>Lizard eats Paper</li>
                    <li>Paper disproves Spock</li>
                    <li>Spock vaporizes Rock</li>
                    <li>Rock crushes Scissors.</li>
                </ul>
                <video src={video} width="320" height="240" controls></video>
            </div>
        </div>
    </>
  )
}
