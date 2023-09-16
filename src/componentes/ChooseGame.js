import React, { useState } from 'react'
import select from '../img/select.jpg';
import poster from '../img/poster.png';




export const ChooseGame = (props) => {

  const [tipo, setTipo] = useState("");



  return (
    <div>
        <h2 className="title">CHOOSE GAME</h2>
        
        <div className="button">
            <input 
            type="radio" 
            id="btn_rps" 
            className="jugada" 
            name="tipo"
            value="3"
            onClick={e=>setTipo(e.target.value)} //nombre funcion (parametro)    //cambia el estado de la variable primera, el parametro se convierte en la variable
            ></input>
            <label htmlFor="btn_rps" className="jugada"><img src={select} alt=""></img></label>
    

            <input 
            type="radio" 
            id="btn_rpsls" 
            className="jugada" 
            name="tipo"
            value="5"
            onClick={e=>setTipo(e.target.value)}
            ></input>
            <label htmlFor="btn_rpsls" className="jugada"><img src={poster} alt=""></img></label>
        </div>
    </div>
  )
}

