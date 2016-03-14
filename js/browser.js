function Journal(nombre, subject, writing) {
  this.nombre = nombre;
  this.subject = subject;
  this.writing = writing;
}


// jquery


$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var subject = $("#subject").val();
    var writing = $("#writing").val();
    var newJournal = new Journal(nombre, subject, writing);

    $('.journal-output').append("<p>" + newJournal.nombre + "</p>" + "<p>" + newJournal.subject + "</p>" + "<p>" + newJournal.writing + "</p>");
  });
});
