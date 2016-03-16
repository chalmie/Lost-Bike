var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#city-search').click(function(event) {
    event.preventDefault();
      var city = $('.actual-search').val();
      $('.actual-search').val("");

      $.get('https://bikeindex.org:443/api/v2/bikes_search?page=1&per_page=10', function(response) {
        console.log(response.bikes);
          $.each(response.bikes, function(index, value) {
            console.log(value.title);
            $('#display-results').append("<p>" + value.title + "</p>");
          });
      });
  });


});
