var APIKey = '13aeebf93c9547e3a573810e1a64c2b2';
var APIcall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + APIKey;
var queryURL = 
"https://api.openweathermap.org/data/2.5/forecast?"

var cityName = document.querySelector("#search-city");
var cityQuery = cityName.val();
cityQuery = cityQuery.replace(" ", "_");
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityQuery + "&appid=" + APIKey;


function fetchWeather() {
    userInput = location.value;

    fetch(APIcall)
    .then (function(res) {
        return res.json();
    }) 
    .then (function(data) {
        var lat = "lat=" + data.city.coord.lat;
        var lon = "&lon=" + data.city.coord.lon;
        var ID = "&appid=" + APIKey;
        return fetch(queryURL + lat + lon + ID);
    })
    .then (function(res))
}

fetchWeather();