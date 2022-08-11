export class Power {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
    this.amount = 5;
  }
  applyBoost(booster) {
    console.log(`${this.name} is boosted by ${booster.name}`);
  }
  use() {
    this.amount--;
    console.log(`${this.name} is used, and has ${this.amount} uses remaining`);
  }
}
