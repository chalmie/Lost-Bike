var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " " + response.weather[0].description + " is " + response.main.humidity + "%");
      console.log(response);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
