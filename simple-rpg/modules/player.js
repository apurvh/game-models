export class Player {
  constructor(name) {
    this.name = name;
    this.role = null;
    this.level = null;
    this.lives = 1;
    this.score = 0;
    this.location = [0, 0]; // ASSUMPTION: level is a 2D array
  }

  setRole(role) {
    this.role = role;
  }

  move(direction) {
    console.log(`${this.name} is moving ${direction}`);
  }
}
