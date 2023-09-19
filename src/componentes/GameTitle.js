import React from 'react'

export const GameTitle = (props) => {


  return (
    <>
        <h1 className="title">YOU CAN PLAY 2 GAMES</h1>
        <nav>
            <a href="#rules"><button onClick={props.rules}>ROCK PAPER SCISSORS</button></a>
            <a href="#video"><button onClick={props.rulesVideo}>ROCK PAPER SCISSORS LIZARD SPOCK</button></a>
        </nav>
    </>
  )
}
