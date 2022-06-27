/* eslint-disable no-shadow */
import { useState } from 'react';
import useSound from 'use-sound';
import interactionSound from './assets/sound/interface.wav';
import clickSound from './assets/sound/click.wav';
import resetSound from './assets/sound/reset.wav';
import GameMoves from './components/gamemoves/GameMoves';
import GameScore from './components/gamescore/GameScore';
import GameTurns from './components/gameturns/GameTurns';
import gameData from './data/gamedata';

const initialScore = {
  wins: 0,
  draws: 0,
  losses: 0,
};

export type GameTurnInformation = {
  player: string;
  computer: string;
  result: string;
  playerColor: string;
  computerColor: string;
}

const App = () => {
  // Hooks
  const [score, setScore] = useState(initialScore);
  const [gameTurnInformation, setGameTurnInformation] = useState<GameTurnInformation>();
  const [playNavigationSound] = useSound(interactionSound, { volume: 0.5 });
  const [playClickSound] = useSound(clickSound, { volume: 0.5 });
  const [playResetSound] = useSound(resetSound, { volume: 0.3 });

  // Get random computer sign
  const getRandomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * gameData.length);
    return gameData[randomNumber].name;
  };

  // Get turn result
  const getTurnResult = (playerSign: string, computerSign: string) => {
    const signIndex = gameData.findIndex((sign) => sign.name === playerSign);

    if (gameData[signIndex].canWinAgainst.includes(computerSign)) {
      return 'wins';
    }

    if (gameData[signIndex].canLoseAgainst.includes(computerSign)) {
      return 'losses';
    }

    return 'draws';
  };

  // Get turn icon
  const getTurnIcon = (value: string) => {
    const signIndex = gameData.findIndex((sign) => sign.name === value);
    return gameData[signIndex].icon;
  };

  // Handle turn
  const handleMakeTurn = (playerSign: string) => {
    const computerSelectedName = getRandomComputerChoice();
    const turnResult = getTurnResult(playerSign, computerSelectedName);

    const getTurnColor = () => {
      if (turnResult === 'wins') {
        return { playerColor: 'lime', computerColor: 'red' };
      }

      if (turnResult === 'losses') {
        return { playerColor: 'red', computerColor: 'lime' };
      }

      return { playerColor: 'blue', computerColor: 'blue' };
    };

    if (turnResult === 'wins') {
      setScore({ ...score, wins: score.wins + 1 });
    } else if (turnResult === 'losses') {
      setScore({ ...score, losses: score.losses + 1 });
    } else {
      setScore({ ...score, draws: score.draws + 1 });
    }

    setGameTurnInformation({
      player: playerSign,
      computer: computerSelectedName,
      result: turnResult,
      playerColor: getTurnColor()?.playerColor,
      computerColor: getTurnColor()?.computerColor,
    });
    playClickSound();
  };

  // Play navigation sound
  const onMouseEnter = () => {
    playNavigationSound();
  };

  // Handle Reset
  const handleReset = () => {
    setScore(initialScore);
    setGameTurnInformation(undefined);
    playResetSound();
  };

  return (
    <div className="App">
      <div className="game__main">
        <GameScore
          score={score}
          handleClick={handleReset}
        />
        <GameTurns
          gameTurnInformation={gameTurnInformation}
          getTurnIcon={getTurnIcon}
        />
        <GameMoves
          onMouseEnter={onMouseEnter}
          handleClick={handleMakeTurn}
        />
      </div>
    </div>
  );
};

export default App;
