import React, { useState } from 'react'
import poster from '../img/poster.png';
import InvalidName from './InvalidName';





export const ChooseGame = (props) => {

  const [valid, setValid] = useState(false)

  const nombreValidacion = (nombre) => {
    ;
    if (nombre.length > 3 && /^[a-zA-Z]+$/.test(nombre)){
      console.log("NOMBRE VALIDO");
      props.setInicio();
    } else {
      console.log("INVALIDO")
      setValid(true)
      setTimeout(() => {
        console.log("set time out")
        setValid(false)
      }, 3000);
      //setTimeout(setValid(false), 2000);
    }
  }

  



  return (
    <div>
      
        <h2 className="title">CHOOSE GAME</h2>
        
        <div className="button">
            
            <input 
            type="radio" 
            id="btn_rpsls" 
            className="jugada" 
            name="tipo"
            value="5"
            onClick={()=>nombreValidacion(props.nombre)}
            ></input>
            <label htmlFor="btn_rpsls" className="jugada"><img src={poster} alt=""></img></label>
        </div>
        {valid ? <InvalidName/> : ""}
    </div>
  )
}

