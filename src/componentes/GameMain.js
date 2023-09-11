import React from 'react'
import rockImg from '../img/rock.png';
import paperImg from '../img/paper.png';
import scissorsImg from '../img/scissor.png';
import lockedImg from '../img/locked.png';

export const GameMain = () => {
  return (
    <>
        <div className="opciones">
            <button id="rock" type="button" onClick="obtenerJugadaUsuario(rock)"><img src={rockImg} alt=""></img></button>

            <button type="button" onClick="obtenerJugadaUsuario(paper)" id="paper"><img src={paperImg} alt=""></img></button>

            <button type="button" onClick="obtenerJugadaUsuario(scissors)" id="scissors"><img src={scissorsImg} alt=""></img></button>

            <button type="button" onClick="obtenerJugadaUsuario(lizard)" id="lizard"><img src={lockedImg} alt="" id="lizard__btn"></img></button>
            
            <button type="button" onClick="obtenerJugadaUsuario(spock)" id="spock"><img src={lockedImg} alt="" id="spock__btn"></img></button>
        </div>
    </>
  )
}
