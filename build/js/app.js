(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "59692dc320ba8c4ef8bc11883eaedbd99d894b870ad6ddacabb71109d20a0e7d";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
