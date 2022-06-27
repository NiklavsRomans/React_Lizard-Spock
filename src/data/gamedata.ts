import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHandLizard, faHandPaper, faHandRock, faHandScissors, faHandSpock,
} from '@fortawesome/free-solid-svg-icons';

export type GameData = {
    name: string;
    canWinAgainst: string[];
    canLoseAgainst: string[];
    icon: IconDefinition;
}

const gameData:GameData[] = [
  {
    name: 'rock',
    canWinAgainst: ['scissors', 'lizard'],
    canLoseAgainst: ['paper', 'spock'],
    icon: faHandRock,
  },
  {
    name: 'paper',
    canWinAgainst: ['rock', 'spock'],
    canLoseAgainst: ['scissors', 'lizard'],
    icon: faHandPaper,
  },
  {
    name: 'scissors',
    canWinAgainst: ['paper', 'lizard'],
    canLoseAgainst: ['rock', 'spock'],
    icon: faHandScissors,
  },
  {
    name: 'lizard',
    canWinAgainst: ['paper', 'spock'],
    canLoseAgainst: ['rock', 'scissors'],
    icon: faHandLizard,
  },
  {
    name: 'spock',
    canWinAgainst: ['scissors', 'rock'],
    canLoseAgainst: ['paper', 'lizard'],
    icon: faHandSpock,
  },
];

export default gameData;
