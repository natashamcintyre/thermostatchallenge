class Thermostat {

  constructor() {
    this.temperature = 20;
    this.min = 10;
    this.max = 32;
    this.powersavemax = 25;
    // this.powersavemode = false;
  }

  up() {
    if (this.temperature === this.powersavemax) {
      throw "Maximum powersave temperature reached."
    }
    ++ this.temperature
  }

  down() {
    if (this.temperature === this.min) {
    throw "Minimum temperature reached"
    }
    -- this.temperature
  }

  powersave(instruction) {
    if (instruction === 'on') {
      this.powersavemode = true;
    }
  }

}
