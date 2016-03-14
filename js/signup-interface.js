$(document).ready(function() {
  $('#email').submit(function(event) {
    event.preventDefault();
    var email = $('#user-email').val();
    $('.email-update').append('<p>Your email ' + email + 'has been added to our email list</p>');
  });
});
