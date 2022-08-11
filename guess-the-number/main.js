// create a game that will ask 2 user to guess a number between 1 and 100.
// between user 1 and user 2, whoever guesses the number closest to the target number wins.
// if both users guess the same number, the game should say "Draw".
// once the game is over, the user should be asked if they want to play again.
// input comes from the user through the console (i.e. prompts)
// and output goes to the console (i.e. console.log).

// require readline module
// import prompt as ES6 module
import prompt from 'prompt';
import { Game } from './modules/game.js';
import { UI } from './modules/constants.js';

// main game loop
const gameLoop = async () => {
  // create game
  const game = new Game();

  // ask player to input number
  await game.player1.getInput();
  await game.player2.getInput();

  // compare number and determine winner
  const winner = game.findWinner();
  console.log(`${winner} wins!, the number is ${game.targetNumber}`);

  // ask if player wants to play again
  playAgain();
};

// run
gameLoop();

// play again?
const playAgain = () => {
  prompt.get(UI.playAgain, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result[UI.playAgain] === 'y') {
        gameLoop();
      } else {
        console.log(UI.thankYou);
      }
    }
  });
};
