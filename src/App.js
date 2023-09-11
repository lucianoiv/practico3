import './App.css';
import { ChooseGame } from './componentes/ChooseGame';
import { EnterName } from './componentes/EnterName';
import { GameMain } from './componentes/GameMain';
import { GameResult } from './componentes/GameResult';
import { GameRules } from './componentes/GameRules';
import { GameTitle } from './componentes/GameTitle';
import { Scoreboard } from './componentes/Scoreboard';




function App() {
  return (
    <div className="body">
      <GameTitle/>

      <EnterName/>

      <ChooseGame/>

      <div id="container" className="container">
        <GameMain/>
        <GameResult/>
        <Scoreboard/>
      </div>

      <GameRules/>

    </div>
  );
}

export default App;
