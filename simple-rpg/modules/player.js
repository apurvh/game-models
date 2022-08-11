export class Player {
  constructor(name) {
    this.name = name;
    this.avatar = null;
    this.level = null;
    this.alive = true;
    this.score = 0;
  }

  setAvatar(avatar) {
    this.avatar = avatar;
    console.log(`${this.name} has now ${avatar.name}`);
  }

  // ASSUMPTION: player can only move 1 space at a time
  move(direction) {
    console.log(`${this.name} is moving ${direction}`);
  }

  powers() {
    return this.avatar.powers;
  }

  damage(obstacle) {
    console.log(`${this.name} is damaged by ${obstacle.name}`);
  }
}
