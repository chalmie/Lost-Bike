
exports.Journal = function Journal(nombre, subject, writing) {
  this.nombre = nombre;
  this.subject = subject;
  this.writing = writing;
};

exports.Journal.prototype.wordCount = function() {
  return this.writing.split(" ").length;
};
