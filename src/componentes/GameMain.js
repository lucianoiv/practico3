import React, { useState } from 'react'

export const GameMain = (props) => {

    let [resultadoComputadora, setresultadoComputadora] = useState(0);
    let [resultadoJugador, setresultadoJugador] = useState(0);

  const [jugadaJugador, setJugada] = useState(props.rock);
  const [jugadaComputadora, setJugadaComputadora] = useState(props.paper);





let i = Math.floor(Math.random() * 5);
let array = [props.rock,props.paper,props.scissors,props.lizard,props.spock];
let jugadaAleatoria = array[i];

  function determinarGanador(jugada,computadora){
        if (
            (jugada === props.rock && computadora === props.scissors) ||
            (jugada === props.rock && computadora === props.lizard) ||
            (jugada === props.paper && computadora === props.rock) ||
            (jugada === props.paper && computadora === props.spock) ||
            (jugada === props.scissors && computadora === props.paper)||
            (jugada === props.scissors && computadora === props.lizard) ||
            (jugada === props.lizard && computadora === props.paper) ||
            (jugada === props.lizard && computadora === props.spock) ||
            (jugada === props.spock && computadora === props.scissors) ||
            (jugada === props.spock && computadora === props.rock)
            
        ){
            setresultadoJugador(resultadoJugador + 1);
            console.log("QUe es eso?"+jugada+computadora)
            console.log("GANA USUARIO");
        } else if (
            (computadora === props.rock && jugada === props.lizard) ||
            (computadora === props.rock && jugada === props.scissors) ||
            (computadora === props.paper && jugada === props.rock) ||
            (computadora === props.paper && jugada === props.spock) ||
            (computadora === props.scissors && jugada === props.paper)||
            (computadora === props.scissors && jugada === props.lizard) ||
            (computadora === props.lizard && jugada === props.paper) ||
            (computadora === props.lizard && jugada === props.spock) ||
            (computadora === props.spock && jugada === props.scissors) ||
            (computadora === props.spock && jugada === props.rock)
            )
        {   setresultadoComputadora(resultadoComputadora + 1)
            console.log("QUe es eso?"+jugada+computadora)
            console.log("GANA computadora");
        } else{
            console.log("Este es el ELSE QUe es eso?"+jugada+computadora)
        }
    }
    
    const resultadoFinal = (a,b)=>{
        console.log("1 set jugada");
        console.log("valor A"+a)
        setJugada(a);
        console.log("2 funcion jugada computadora");
        console.log("jUGADA COMPUTADORA"+b);
        setJugadaComputadora(b);
        console.log("3 Funcion Resultado Final");
        determinarGanador(a,b);
        console.log("4 FIN DE LA FUNCION");
    }

  return (
    <>
        <div className="opciones">

            <button type="button" onClick={()=>resultadoFinal(props.rock,jugadaAleatoria)} id="props.rock"><img src={props.rock} alt=""></img></button>

            <button type="button" onClick={()=>resultadoFinal(props.paper,jugadaAleatoria)} id="props.paper"><img src={props.paper} alt=""></img></button>
            
            <button type="button" onClick={()=>resultadoFinal(props.scissors,jugadaAleatoria)} id="props.scissors"><img src={props.scissors} alt=""></img></button>

            <button type="button" onClick={()=>resultadoFinal(props.lizard,jugadaAleatoria)} id="props.lizard"><img src={props.lizard} alt="" id="props.lizard__btn"></img></button>
            
            <button type="button" onClick={()=>resultadoFinal(props.spock,jugadaAleatoria)} id="props.spock"><img src={props.spock} alt="" id="props.spock__btn"></img></button>
        </div>
        <div>
        <div className="resultado">
            <div>
                <h3 id="player1">{props.nombre}</h3>
                                                
                    <span><img  id="resultado1" src={jugadaJugador} alt=""></img></span>
            </div>
            <div>
                <img id="gameOn" src="" alt=""></img>
            </div>
            <div>
                <h3>Computer</h3>
                    <span><img id="resultado2" src={jugadaComputadora} alt=""></img></span>
            </div>
        </div>
    </div>

        <div className="scoreboard">
            <div className="scoreboard__div">
                <h4 id="player2">{props.nombre}</h4>
                    <p id="player_score">{resultadoJugador}</p>
            </div>
            
            <div className="reset__btn">
                <button className="reset__btn" type="button" onClick={""}>RESET  SCORE</button>
            </div>
            <div className="scoreboard__div">
                <h4>Computer</h4>
                    <p id="computer_score">{resultadoComputadora}</p>
            </div>
        </div>
    </>
  )
}
