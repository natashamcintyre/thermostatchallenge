$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powermodeindicator').css('color','green');

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + '°C');
  }

  function updateErrorMessage() {
    $('#error_message').text(thermostat.error_message);
    $('#error_message').show('fast', function() {
      setTimeout(function() {
        $('#error_message').hide();
      }, 2000);
    });
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
    $('#powermodeindicator').text('Power Saving Mode ON')
    $('#powermodeindicator').css('color','green');
  })

  $('#powermodeoff').click(function() {
    thermostat.powersave('off');
    $('#powermodeindicator').text('Power Saving Mode OFF')
    $('#powermodeindicator').css('color','red');
  })

  $('#energyusage_button').click(function() {
    $('#energyusage_indicator').text(thermostat.energyUsage());
    $('#energyusage_indicator').attr('class', thermostat.energyUsage());
    $('#energyusage_indicator').show();
    setTimeout(function() {
      $('#energyusage_indicator').hide();
    }, 3000);
  })

  $.get( `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${ENV["APPID"]}&units=metric`, function(response) {
    $('#today_temperature').text(response.main.temp + '°C');
  })

})
