/**
 * Gameplay story:
 * Game starts
 * User selects his/her role/avatar
 * Level 1 loaded with obstacles & boosters
 * User moves through the level by moving around obstacles and acquiring boosters
 * User reaches end and level is cleared
 * User moves to next level
 */

import { Game, Booster, Obstacle } from './modules/index.js';

const simulatedGame = async () => {
  const game = new Game();

  game.selectAvatar();

  game.startGame();

  // play game
  game.getPlayer().move('up');
  game.getPlayer().move('up');
  // move should also update the player's location in the level

  // use 1st power
  game.getPlayer().powers()[0].use();

  // get booster
  game.getPlayer().powers()[0].applyBoost(new Booster('booster 1'));

  // face obstacle
  game.getPlayer().damage(new Obstacle('obstacle 1'));

  game.levelCleared();

  game.gameOver();
};

simulatedGame();
