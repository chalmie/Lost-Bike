//
// exports.Journal = function Journal(nombre, subject, writing) {
//   this.nombre = nombre;
//   this.subject = subject;
//   this.writing = writing;
// };
//
// exports.Journal.prototype.wordCount = function() {
//   return this.writing.split(" ").length;
// };



var Journal = function Journal(nombre, subject, writing) {
  this.nombre = nombre;
  this.subject = subject;
  this.writing = writing;
};

Journal.prototype.wordCount = function() {
  return this.writing.split(" ").length;
};

exports.JournalModule = Journal;
