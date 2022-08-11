import prompt from 'prompt';
import { UI } from './constants.js';

export class Player {
  constructor(name) {
    this.name = name;
    this.number = 10;
  }
  async getInput() {
    this.number = await askForNumber();
  }
}

// ask for console input and return that input, if not number, ask again
const askForNumber = async () => {
  return new Promise((resolve, reject) => {
    prompt.get(UI.askInput, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const number = parseInt(result[UI.askInput]);
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
