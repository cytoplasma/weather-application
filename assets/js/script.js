var searchHistory = [];
var APIKey = '13aeebf93c9547e3a573810e1a64c2b2';
var geoURL =
  "http://api.openweathermap.org/geo/1.0/direct?&appid=99886c59c78ad6d91177b0fde1bce458&q=";
var cityURL =
  "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=99886c59c78ad6d91177b0fde1bce458";
// var queryURL = 
// "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;


var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var submitBtn = document.querySelector("#search-button");
var searchHistory = document.querySelector("#history");
var todayDash = document.querySelector("#today");
var forecastDash = document.querySelector("#forecast");


function fetchWeather(location) {
    var userInput = location.value;

    fetch(geoURL + userInput)
    .then (function(res) {
        return res.json();
    }) 
    .then (function(data) {
        console.log(data);
    })
}