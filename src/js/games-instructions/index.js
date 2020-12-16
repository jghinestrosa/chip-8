import blinky from './blinky';
import connect4 from './connect4';
import invaders from './invaders';
import landing from './landing';
import maze from './maze';
import pong from './pong';
import tank from './tank';
import tetris from './tetris';
import tictactoe from './tictactoe';
import wall from './wall';

const gameInstructions = {
  BLINKY: blinky,
  CONNECT4: connect4,
  INVADERS: invaders,
  LANDING: landing,
  MAZE: maze,
  PONG: pong,
  TANK: tank,
  TETRIS: tetris,
  TICTACTOE: tictactoe,
  WALL: wall,
};

export default function getInstructions(gameName) {
  return gameInstructions[gameName];
}