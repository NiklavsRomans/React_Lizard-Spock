/* eslint-disable no-shadow */
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { GameTurnInformation } from '../../App';
import GameTurnResult from '../gameturnresult/GameTurnResult';
import './GameTurns.scss';

type TurnResultProps = {
    gameTurnInformation: GameTurnInformation | undefined;
    getTurnIcon: (value: string) => IconDefinition
}

const GameTurns:FC<TurnResultProps> = ({ gameTurnInformation, getTurnIcon }) => (

  <div className="game__turn-wrapper">
    <div className="game__turn-box" style={{ borderColor: gameTurnInformation?.playerColor }}>
      {!gameTurnInformation
        ? <div className="game__turn-empty">Nothing to show</div>
        : (
          <div className="game__turn-active">
            <h2>Player:</h2>
            <div className="game__turn-result">
              {gameTurnInformation && (
                <FontAwesomeIcon
                  className="icon"
                  icon={getTurnIcon(gameTurnInformation.player)}
                />
              )}
            </div>
          </div>
        )}
    </div>

    <GameTurnResult result={gameTurnInformation?.result} />

    <div className="game__turn-box" style={{ borderColor: gameTurnInformation?.computerColor }}>
      {!gameTurnInformation
        ? <div className="game__turn-empty">Nothing to show</div>
        : (
          <div className="game__turn-active">
            <h2>Computer:</h2>
            <div className="game__turn-result">
              {gameTurnInformation && (
                <FontAwesomeIcon
                  className="icon"
                  icon={getTurnIcon(gameTurnInformation.computer)}
                />
              )}
            </div>
          </div>
        )}
    </div>
  </div>
);

export default GameTurns;
