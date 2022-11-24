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


const d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
var dayMonth = month + "/" + day;
var card1 = document.getElementById("day1");
var card2 = document.getElementById("day2");
var card3 = document.getElementById("day3");
var card4 = document.getElementById("day4");

card1.textContent = month + "/" + (day + 1);
card2.textContent = month + "/" + (day + 2);
card3.textContent = month + "/" + (day + 3);
card4.textContent = month + "/" + (day + 4);

function fetchWeather() {

    userInput = searchQuery.value;

    console.log(userInput);

    fetch(geoURL + userInput) 
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        // console.log(data);
        var lat = "&lat=" + data[0].lat;
        var lon = "&lon=" + data[0].lon;
        // console.log(APIcall + lat + lon);
        // console.log(data[0].lat);
        return fetch(APIcall + lat + lon);
    })
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // current weather
        document.getElementById("cityName").textContent = userInput + "'s weather for today."
        document.getElementById("cityTempCur").textContent = data.list[3].main.temp + "°F";
        document.getElementById("cityWindCur").textContent = data.list[3].wind.speed + "MPH";
        document.getElementById("cityHumCur").textContent = data.list[3].main.humidity + "%";
        
        // forecast weather 11, 19, 27, 35
        document.getElementById("cityTemp1").textContent = data.list[11].main.temp + "°F";
        document.getElementById("cityWind1").textContent = data.list[11].wind.speed + "MPH";
        document.getElementById("cityHumidity1").textContent = data.list[11].main.humidity + "%";

        document.getElementById("cityTemp2").textContent = data.list[19].main.temp + "°F";
        document.getElementById("cityWind2").textContent = data.list[19].wind.speed + "MPH";
        document.getElementById("cityHumidity2").textContent = data.list[19].main.humidity + "%";

        document.getElementById("cityTemp3").textContent = data.list[27].main.temp + "°F";
        document.getElementById("cityWind3").textContent = data.list[27].wind.speed + "MPH";
        document.getElementById("cityHumidity3").textContent = data.list[27].main.humidity + "%";

        document.getElementById("cityTemp4").textContent = data.list[35].main.temp + "°F";
        document.getElementById("cityWind4").textContent = data.list[35].wind.speed + "MPH";
        document.getElementById("cityHumidity4").textContent = data.list[35].main.humidity + "%";

        // document.getElementById("cityTemp5").textContent = data.list[39].main.temp + "°F";
        // document.getElementById("cityWind5").textContent = data.list[39].wind.speed + "MPH";
        // document.getElementById("cityHumidity5").textContent = data.list[39].main.humidity + "%";

    });
}



searchBtn.addEventListener("click", fetchWeather);