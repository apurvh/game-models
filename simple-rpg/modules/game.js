import { Avatar } from './avatar.js';
import { Player } from './player.js';
import { Level } from './level.js';
import { Power } from './power.js';

export class Game {
  constructor() {
    console.log('Game Start');
    this.player = new Player('Player'); // ASSUMPTION: game is single player
    this.level = null;
    this.Avatars = [
      new Avatar('Avatar 1', [new Power('power 1'), new Power('Power 2')]),
      new Avatar('Avatar 2', [new Power('power 3'), new Power('Power 4')]),
      new Avatar('Avatar 3', [new Power('power 5'), new Power('Power 6')]),
    ]; // 3 avatars with 2 powers each
  }

  getPlayer() {
    return this.player;
  }

  levelCleared() {
    this.level = new Level(this.level.name + 1);
    console.log('Level cleared, moving to level:', this.level.name);
    this.level.loadLevel();
  }

  selectAvatar() {
    console.log('Selecting avatar');
    this.player.setAvatar(this.Avatars[0]); // Hardcoded to first avatar
  }

  startGame() {
    // Level is loaded with obstacles and boosters
    this.level = new Level(1);
    this.level.loadLevel();
    console.log('Starting game level:', this.level.name);
  }

  gameOver() {
    console.log('Game over');
  }
}
