class Thermostat {

  constructor() {
    this.temperature = 20
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

}
