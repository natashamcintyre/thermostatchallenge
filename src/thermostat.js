class Thermostat {

  constructor() {
    this.temperature = 20;
    this.min = 10;
    this.max = 32;
    this.powersavemax = 25;
    this.powersavemode = true;
  }

  up() {
    if (this.powersavemode === true && this.temperature === this.powersavemax) {
      throw "Maximum powersave temperature reached."
    }
    else if (this.temperature === this.max) {
      throw "Maximum temperature reached."
    }
    ++ this.temperature
  }

  down() {
    if (this.temperature === this.min) {
      throw "Minimum temperature reached"
    }
    -- this.temperature
  } 

  reset() {
    this.temperature = 20
  }

  powersave(instruction) {
    if (instruction === 'on') {
      this.powersavemode = true;
    }
    else if (instruction === 'off') {
      this.powersavemode = false;
    }
  }

}

let newThermostat = new Thermostat