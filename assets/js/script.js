var searchHistory = [];
var APIKey = '13aeebf93c9547e3a573810e1a64c2b2';
var lat = city.coord.lat;
var lon = city.coord.lon;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;


var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var searchHistory = document.querySelector("#history");
