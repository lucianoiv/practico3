import rockImg from '../img/rock.png';
import paperImg from '../img/paper.png';
import scissorsImg from '../img/scissor.png';
import lockedImg from '../img/locked.png';

export const GameResult = () => {


  return (
    <div>
        <div className="resultado">
            <div>
                <h3 id="player1">hola</h3>
                    <span><img  id="resultado1" src={rockImg} alt=""></img></span>
            </div>
            <div>
                <img id="gameOn" src="" alt=""></img>
            </div>
            <div>
                <h3>Computer</h3>
                    <span><img id="resultado2" src={rockImg} alt=""></img></span>
            </div>
        </div>
    </div>
  )
}
