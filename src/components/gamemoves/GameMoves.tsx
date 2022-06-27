import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import gameData from '../../data/gamedata';
import './GameMoves.scss';

type GameMovesProps = {
    handleClick: (value: string) => void
    onMouseEnter: () => void
}

const GameMoves:FC<GameMovesProps> = ({ handleClick, onMouseEnter }) => (
  <div className="game__moves-box">
    {gameData.map((button) => (
      <div
        className="hex-button"
        key={button.name}
        onMouseEnter={() => onMouseEnter()}
        onClick={() => handleClick(button.name)}
      >
        <FontAwesomeIcon
          className="button__icon"
          icon={button.icon}
        />
      </div>
    ))}
  </div>
);

export default GameMoves;
