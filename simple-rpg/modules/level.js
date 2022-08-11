export class Level {
  constructor(name) {
    this.name = name;
    this.obstacles = null;
    this.boosters = null;
    this.playerLocation = null;
  }
  loadLevel() {
    console.log('Loading level:', this.name);
    // obstacles and boosters are also loaded from the level file
  }
  updatePlayerLocation(player) {
    player.location = this.playerLocation;
  }
}
