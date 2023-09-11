import React from 'react'
import select from '../img/select.jpg';
import poster from '../img/poster.png';

export const ChooseGame = () => {
  return (
    <div>
        <h2 className="title">CHOOSE GAME</h2>

        <div className="button">
            <input type="radio" id="btn_rps" onClick="tipoDeJuego(3)" className="jugada" name="tipo"></input>
            <label htmlFor="btn_rps" className="jugada"><img src={select} alt=""></img></label>
    

            <input type="radio" id="btn_rpsls" onClick="tipoDeJuego(5)" className="jugada" name="tipo"></input>
            <label htmlFor="btn_rpsls" className="jugada"><img src={poster} alt=""></img></label>
        </div>
    </div>
  )
}
