import { Player } from './player.js';

// game definition assumes that there are two players with names player1 and player2
export class Game {
  constructor() {
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
  }
  // find winner
  findWinner = function () {
    return findWinner(this.player1, this.player2, this.targetNumber);
  };
}

// compare number and determine winner
const findWinner = (player1, player2, targetNumber) => {
  if (player1.number === player2.number) {
    return 'No one';
  } else if (
    Math.abs(player1.number - targetNumber) <
    Math.abs(player2.number - targetNumber)
  ) {
    return player1.name;
  } else {
    return player2.name;
  }
};
