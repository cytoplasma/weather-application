var APIKey = '13aeebf93c9547e3a573810e1a64c2b2';
var APIcall = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=524901&appid=13aeebf93c9547e3a573810e1a64c2b2";
// var queryURL = 
// "https://api.openweathermap.org/data/2.5/forecast?"

var cityName = document.querySelector("#search-city");
var cityQuery = cityName.value;
cityQuery = cityQuery.replace(" ", "_");
// var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityQuery + "&appid=" + APIKey;
var geoURL = "http://api.openweathermap.org/geo/1.0/direct?&appid=13aeebf93c9547e3a573810e1a64c2b2&q="
var searchBtn = document.querySelector("#search-button");
var searchQuery = document.querySelector("#search-city");


function fetchWeather() {

    userInput = searchQuery.value;

    fetch(geoURL + userInput) 
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        // console.log(data);
        var lat = "&lat=" + data[0].lat;
        var lon = "&lat=" + data[0].lon;
        console.log(APIcall + lat + lon);
        console.log(data[0].lat);
        // return fetch(APIcall + lat + lon);
    })
    // .then(function (response) {
    //     // return response.json();
    // })
    // .then(function(data) {
    //     // console.log(data);
    //     document.getElementById("cityName").textContent = userInput + "'s weather for today."
    //     document.getElementById("cityTempCur").textContent = data.list[3].main.temp;
    // });
}



searchBtn.addEventListener("click", fetchWeather);