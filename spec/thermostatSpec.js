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

});
