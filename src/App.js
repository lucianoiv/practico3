import './App.css';
import rockImg from './img/rock.png';
import paperImg from './img/paper.png';
import scissorsImg from './img/scissor.png';
import lizardImg from './img/lizard.png';
import spockImg from './img/spock.png';
import lockedImg from './img/locked.png';
import { useState } from 'react';
import { ChooseGame } from './componentes/ChooseGame';
import { GameMain } from './componentes/GameMain';
import { GameRules } from './componentes/GameRules';
import { GameTitle } from './componentes/GameTitle';





function App() {

  let [nombre, setNombre] = useState("Player");
  

  

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);  
  }

  return (
    <div className="body">

      <GameTitle/>

      <>
        <p className="title">Enter your name</p>
        <input type="text" className="nombre" id="nombre" maxLength="10" onChange={e => cambiarNombre(e.target.value)} placeholder="Enter name"></input>
      </>

      <ChooseGame nombre={nombre}/>

      <div id="container" className="container">
        <GameMain rock={rockImg} paper={paperImg} scissors={scissorsImg} lizard={lizardImg} spock={spockImg} locked={lockedImg} nombre={nombre}/>
      </div>

      <GameRules/>

    </div>
  );
}

export default App;
