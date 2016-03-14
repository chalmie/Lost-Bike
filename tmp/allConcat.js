var journalConstruct = require('./../js/journal.js').journalProperty;

// jquery

$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var subject = $("#subject").val();
    var writing = $("#writing").val();
    var newJournal = new journalConstruct(nombre, subject, writing);

    $('.journal-output').append("<p>" + newJournal.nombre + "</p>" + "<p>" + newJournal.subject + "</p>" + "<p>" + newJournal.writing + "</p>");
  });
});

$(document).ready(function() {
  $('#email').submit(function(event) {
    event.preventDefault();
    var email = $('#user-email').val();
    $('.email-update').append('<p>Your email ' + email + 'has been added to our email list</p>');
  });
});
