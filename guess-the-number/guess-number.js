// create a game that will ask 2 user to guess a number between 1 and 100.
// between user 1 and user 2, whoever guesses the number closest to the target number wins.
// if both users guess the same number, the game should say "Draw".
// once the game is over, the user should be asked if they want to play again.
// input comes from the user through the console (i.e. prompts)
// and output goes to the console (i.e. console.log).

// require readline module
var prompt = require('prompt');

// constants
const GAME = {
  askInput: 'Enter your number: ',
  playAgain: 'Do you want to play again? (y/n) ',
  thankYou: 'Thanks for playing!',
};

class Player {
  constructor(name) {
    this.name = name;
    this.number = 10;
  }
  setNumber(number) {
    this.number = number;
  }
}

// game definition assumes that there are two players with names player1 and player2
class Game {
  constructor() {
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
  }
}

// ask players to input number and save it to the player object
const askPlayerToInputNumber = async (player) => {
  return new Promise((resolve, reject) => {
    const input = player.name + GAME.askInput;
    prompt.get(input, (err, result) => {
      if (err) {
        reject(err);
      } else {
        player.setNumber(result[input]);
        resolve(player);
      }
    });
  });
};

// ask for conole input and return that input, if not number, ask again
const askForNumber = async () => {
  return new Promise((resolve, reject) => {
    prompt.get(GAME.askInput, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const number = parseInt(result[GAME.askInput]);
        if (isNaN(number)) {
          console.log('Please enter a number');
          askForNumber().then(resolve).catch(reject);
        } else {
          resolve(number);
        }
      }
    });
  });
};

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

// play again?
const playAgain = () => {
  prompt.get(GAME.playAgain, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result[GAME.playAgain] === 'y') {
        gameLoop();
      } else {
        console.log(GAME.thankYou);
      }
    }
  });
};

// game loop
const gameLoop = async () => {
  // create game
  const game = new Game();

  // ask player to input number
  game.player1.setNumber(await askForNumber());
  game.player2.setNumber(await askForNumber());

  // compare number and determine winner
  const winner = findWinner(game.player1, game.player2, game.targetNumber);
  console.log(`${winner} wins!, the number is ${game.targetNumber}`);

  // ask if player wants to play again
  playAgain();
};

gameLoop();
