var apiKey = require('./../.env').apiKey;
var gmapsApi = require('./../.env').gmapsApi;

function initialize(cityName) {
  var mapProp = {
    zoom:4,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var address = cityName;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.bounds);
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});
}


$(document).ready(function() {
  $('#city-search').click(function(event) {
    event.preventDefault();
    var city = $('.actual-search').val();
    $('.actual-search').val("");
    initialize(city);
    $.get('https://bikeindex.org:443/api/v2/bikes_search?per_page=10', function(response) {
      $.each(response.bikes, function(index, value) {
        var cityStolenFrom = value.stolen_location.split(',').shift();
        $('#display-results').append('<p><a href="https://bikeindex.org/bikes/' + value.id + '">' + value.title + '</a>' + ' - ' + '<a href="#">' + cityStolenFrom + '</a></p>');

      });
    });
  });

  $('#display-results').pagination({
    totalPage: 100,
    callback: function(currentPage){
      $.get('https://bikeindex.org:443/api/v2/bikes_search?page=' + currentPage + '&per_page=10', function(response) {
        $.each(response.bikes, function(index, value) {
          var cityStolenFrom = value.stolen_location.split(',').shift();
          $('#display-results').append('<p><a href="https://bikeindex.org/bikes/' + value.id + '">' + value.title + '</a>' + ' - ' + '<a href="#">' + cityStolenFrom + '</a></p>');
        });
      });
    }
  });

});
