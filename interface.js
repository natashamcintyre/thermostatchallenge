$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powermodeindicator').css('color','green');

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

  function updateErrorMessage() {
    $('#error_message').text(thermostat.error_message)
  }

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
    updateErrorMessage();
  })

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
    updateErrorMessage();
  })

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powermodeon').click(function() {
    thermostat.powersave('on');
    $('#powermodeindicator').text('ON')
    $('#powermodeindicator').css('color','green');
  })

  $('#powermodeoff').click(function() {
    thermostat.powersave('off');
    $('#powermodeindicator').text('OFF')
    $('#powermodeindicator').css('color','red');
  })

  $('#energyusage_button').click(function() {
    $('#energyusage_indicator').text(thermostat.energyUsage());
    $('#energyusage_indicator').attr('class', thermostat.energyUsage());
    $('#energyusage_indicator').show();
    setTimeout(function() {
      $('#energyusage_indicator').hide();
    }, 4000);
  })

})
