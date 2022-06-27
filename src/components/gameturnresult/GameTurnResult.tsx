import { FC } from 'react';
import './GameTurnResult.scss';

type GameTurnResultProps = {
    result: string | undefined
}

const GameTurnResult:FC<GameTurnResultProps> = ({ result }) => (

  <div className="game__result-info">
    {result === 'wins' && 'Player wins!'}
    {result === 'losses' && 'Computer wins!'}
    {result === 'draws' && 'Its a draw!'}
  </div>
);

export default GameTurnResult;
