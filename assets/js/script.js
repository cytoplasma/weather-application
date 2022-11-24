var APIKey = '13aeebf93c9547e3a573810e1a64c2b2';
var APIcall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + APIKey;
var queryURL = 
"https://api.openweathermap.org/data/2.5/forecast?"

var cityName = document.querySelector("#search-city");
var cityQuery = cityName.value;
cityQuery = cityQuery.replace(" ", "_");
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityQuery + "&appid=" + APIKey;

var searchBtn = document.querySelector("#search-button");
var searchQuery = document.querySelector("#search-city");


function fetchWeather() {
    userInput = searchQuery.value;

    fetch(APIcall)
    .then (function(res) {
        return res.json();
    }) 
    .then (function(data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var currentQuery = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=13aeebf93c9547e3a573810e1a64c2b2&units=${cityQuery}`;
        return fetch(currentQuery);
    })
    .then (function(res) {
        return res.json();
    })
}

searchBtn.addEventListener("click", fetchWeather);