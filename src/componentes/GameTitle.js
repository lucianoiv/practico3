import React from 'react'

export const GameTitle = (props) => {


  return (
    <>
        <h1 className="title">ROCK PAPER SCISSORS LIZARD SPOCK</h1>
        <nav>
            <a href="#rules"><button className='title__btn' onClick={props.rules}>ROCK PAPER SCISSORS RULES</button></a>
            <a href="#video"><button className='title__btn' onClick={props.rulesVideo}>ROCK PAPER SCISSORS LIZARD SPOCK RULES</button></a>
        </nav>
    </>
  )
}
