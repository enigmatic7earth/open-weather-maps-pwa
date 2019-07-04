/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const appKey = "4467881e4d57e4a8d97aed2e9fd2ad12";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let temp_min = document.getElementById("temp-min");
let temp_max = document.getElementById("temp-max");
let humidity = document.getElementById("humidity-div");
let weather = document.getElementById("weather-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  temp_min.innerHTML = "Min: " + parseInt(jsonObject.main.temp_min - 273) + "°";
  temp_max.innerHTML = "Max: " + parseInt(jsonObject.main.temp_max - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
  weather.innerHTML = jsonObject.weather[0].description;
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}