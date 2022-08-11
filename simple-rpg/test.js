/**
 * Gameplay story:
 * Game starts
 * User selects his/her role/avatar
 * Level 1 loaded with obstacles & boosters
 * User moves through the level by moving around obstacles and acquiring boosters
 * User reaches end and level is cleared
 * User moves to next level
 */

import { Game, Player, Avatar, Level, Booster, Obstacle } from './modules';

// create game loop
const gameLoop = async () => {
  // create game
  const game = new Game();

  // select role for player
  game.player.setRole();

  // load level 1
  game.setLevel();

  // play game
  // move player
  // get booster
  // face obstacle

  // level cleared
  // load new level to game

  // player move
  // player dies

  // ask if player wants to play again
  game.playAgain();
};

// where to you call gameLoop?
