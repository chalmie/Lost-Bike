var AlarmTime = require('./../js/alarm.js').AlarmModule;

$(document).ready(function() {
  setInterval(function() {
    var time = moment().format('HH:mm');
    $('#time').html(time);
  }, 1000);

  $('.enterTime').submit(function(event){
    event.preventDefault();

    setInterval(function() {
      var time = moment().format('HH:mm');
    }, 1000);
    var firstName = $('#firstName').val();
    var alarmTime = $('#alarm-time').val();
    console.log( alarmTime);
    var newAlarm = new AlarmTime(firstName, alarmTime);
    $('.display-area').append(newAlarm.firstName + "<p></p>");
    $('.display-area').append(newAlarm.alarmTime);
    $('.display-alarm').append(alarmTime);
    console.log(newAlarm.alarmTime);
    newAlarm.setRing(newAlarm.alarmTime);
  });

  // newAlarm.setRing(time, enterTime)

});
