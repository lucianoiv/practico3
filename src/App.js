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
import { GameRulesVideo } from './componentes/GameRulesVideo';

function App() {

  let [nombre, setNombre] = useState("");
  
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);  
  }

  const [start, setStart] = useState(false);
  const [gameRules, setGameRules] = useState(false);
  const [videoRules, setVideoRules] = useState(false);

  const setInicio = () => {
    setStart(true)
  }

  const Restart = () =>  {
    setStart(false)
  }

  const rules = () => {
    setGameRules(!gameRules)
  }

  const rulesVideo = () => {
    setVideoRules(!videoRules)
  }

  return (
    <div className="body">

      <GameTitle  rulesVideo={rulesVideo} rules={rules}/>

      { !start ? 
      <div>
          <p className="title">Enter your name</p>
          <input 
          type="text" 
          className="nombre" 
          id="nombre" 
          maxLength="10"
          minLength="3"
          
          onChange={e => cambiarNombre(e.target.value)} 
          placeholder="Enter name"
          ></input>
      </div> : "" }

      <ChooseGame nombre={nombre} setInicio={setInicio}/> 

      {start ? 
      <div id="container" className="container">
        <GameMain rock={rockImg} paper={paperImg} scissors={scissorsImg} lizard={lizardImg} spock={spockImg} locked={lockedImg} nombre={nombre} restart={Restart} />
      </div> : "" }
    
      {gameRules ? <GameRules rules={rules}/> : "" }
      {videoRules ? <GameRulesVideo rulesVideo={rulesVideo}/> : "" }
    </div>
  );
}

export default App;
