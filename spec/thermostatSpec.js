describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('thermostat set to 20', function() {
    it ("the thermostat is set to 20", function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('power save mode is on by default', function() {
    it ('immediately sets powersave mode to true', function() {
      expect(thermostat.powersavemode).toBe(true);
    });
  });

  describe('up function', function() {
    it ('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe('down function', function(){
    it('decreases the temperature by 1 degree', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });
  });

  describe('has a minimum temperature', function() {
    it('will not go below 10', function() {
      for (let i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function() { thermostat.down() } ).toThrow('Minimum temperature reached');
      expect(thermostat.temperature).toEqual(10)
    });
  });

  describe('has a power saving mode', function() {
    it('that can be turned on', function(){
      thermostat.powersave('on');
      expect(thermostat.powersavemode).toBe(true);
    });

    it('that can be turned off', function() {
      thermostat.powersave('off');
      expect(thermostat.powersavemode).toBe(false);
    });
  });

  describe('powersaving mode', function() {
    it('has a max temp of 25', function() {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() } ).toThrow("Maximum temperature reached.");
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('isPowerSaveModeOn', function() {
    it('returns true if on', function() {
      expect(thermostat.isPowerSaveModeOn()).toBe(true);
    });

    it('returns false when off', function() {
      thermostat.powersave('off');
      expect(thermostat.isPowerSaveModeOn()).toBe(false);
    });
  })

  describe('maximum temperature', function(){
    it ('has a max temp of 32', function(){
      thermostat.powersave('off');
      for (let i = 0; i < 12; i++) {
        thermostat.up()
      }
      expect(function() {thermostat.up() } ).toThrow("Maximum temperature reached.");
      expect(thermostat.temperature).toEqual(32)
    });
  });

  describe('reset', function() {
    it('immediately sets the temperature to 20', function() {
      for (let i = 0; i < 3; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function() {
    it('should show low energy usage below 18°C', function() {
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toBe('Low-usage')
    });

    it('should show medium usage for 18°C to 25°C', function() {
      expect(thermostat.energyUsage()).toBe('Medium-usage');
    });

    it('should show high usage for 26°C and above', function() {
      thermostat.temperature = 27
      expect(thermostat.energyUsage()).toBe('High-usage')
    });
  });

});
