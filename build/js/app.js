(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "59692dc320ba8c4ef8bc11883eaedbd99d894b870ad6ddacabb71109d20a0e7d";
exports.gmapsApi = "AIzaSyA5cewgyxoZWKaQme_7jPk46RwvMOwP__E";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
