var Journal = require('./../js/journal.js').JournalModule;
var moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
// jquery

$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var subject = $("#subject").val();
    var writing = $("#writing").val();
    var newJournal = new Journal(nombre, subject, writing);


    $('.journal-output').append("<p>" + newJournal.nombre + "</p>" + "<p>" + newJournal.subject + "</p>" + "<p>" + newJournal.writing + "</p><p>Word Count: " + newJournal.wordCount() + " " + now + "</p>");

  });
});
