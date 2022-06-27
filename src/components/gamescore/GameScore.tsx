import { FC } from 'react';
import './GameScore.scss';

type GameScoreProps = {
    score: {
        wins: number;
        draws: number;
        losses: number;
    }
    handleClick: () => void

}

const GameScore:FC<GameScoreProps> = ({ score, handleClick }) => (
  <div className="score__board">
    <div className="score__info">
      <p>
        {`Player: ${score.wins}`}
      </p>
      <p>
        {`Draws: ${score.draws}`}
      </p>
      <p>
        {`Computer: ${score.losses}`}
      </p>
    </div>
    <div className="reset__box">
      <button onClick={() => handleClick()} className="reset__btn">RESET</button>
    </div>
  </div>
);

export default GameScore;
