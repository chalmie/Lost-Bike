

var AlarmTime = function(firstName, alarmTime) {
    this.firstName = firstName;
    this.alarmTime = alarmTime;
};

AlarmTime.prototype.setRing = function(alarmTime) {

  var array = [];
  setInterval(function() {
    var startingTime = moment().format('HH:mm');
    if (startingTime === alarmTime) {
      alert("Time to Wake Up!");
    }
    console.log(startingTime);
  }, 60000);
}




exports.AlarmModule = AlarmTime;
