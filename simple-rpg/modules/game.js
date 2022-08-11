// ASSUMPTION: game is single player

export class Game {
  constructor() {
    this.player = new Player('Player');
    this.level = null;
    this.Avatars = []; // array of avatars created at runtime
  }

  progressToNextLevel() {
    this.level = this.level.id + 1;
  }

  playAgain() {
    console.log('restarting game');
  }
}
