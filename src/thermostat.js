class Thermostat {

  constructor() {
    this.temperature = 20;
    // this.powersavemode = false;
  }

  up() {
    ++ this.temperature
  }

  down() {
    if (this.temperature === 10) {
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
