class Thermostat {

  constructor() {
    this.temperature = 20;
    this.MIN = 10;
    this.MAX = 32;
    this.POWERSAVEMAX = 25;
    this.powersavemode = true;
  }

  up() {
    if (this.isMaxTemperature()) {
      throw "Maximum temperature reached."
    }
    ++ this.temperature
  }

  down() {
    if (this.temperature === this.MIN) {
      throw "Minimum temperature reached"
    }
    -- this.temperature
  }

  reset() {
    this.temperature = 20
  }

  isPowerSaveModeOn() {
    return this.powersavemode === true;
  }

  powersave(instruction) {
    if (instruction === 'on') {
      this.powersavemode = true;
    }
    else if (instruction === 'off') {
      this.powersavemode = false;
    }
  }

  isMaxTemperature() {
    if (this.isPowerSaveModeOn()) {
      return this.temperature === this.POWERSAVEMAX;
    }
    return this.temperature === this.MAX;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'Low-usage';
    } else if (this.temperature <= 25) {
      return 'Medium-usage'
    } else {
      return 'High-usage'
    }
  }

}

let newThermostat = new Thermostat
