class Power {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
    this.use = 5;
  }
  applyBoost(booster) {
    console.log(`${this.player.name} is using ${booster.name}`);
  }
  use() {
    this.use--;
  }
}
