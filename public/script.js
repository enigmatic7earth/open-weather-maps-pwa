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
let lat = 0.0;
let long = 0.0;

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
  icon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  temp_min.innerHTML = "Min: " + parseInt(jsonObject.main.temp_min - 273) + "°";
  temp_max.innerHTML = "Max: " + parseInt(jsonObject.main.temp_max - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
  weather.innerHTML = jsonObject.weather[0].description;
}

function httpRequestAsync(url, callback)
{
  console.log("httpRequestAsync");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

function getLocation() {
  if (navigator.geolocation) {
    console.log('getting user location!')
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    console.log('Geolocation is not supported by this browser');
  }
}
function showPosition(position) {
  let locationString = "Lat: " + position.coords.latitude + "Long: " + position.coords.longitude;
  console.log(locationString);
  lat =  parseFloat(position.coords.latitude);
  long = parseFloat(position.coords.longitude);
  getInitWeather(lat,long);
  
   
}
function getInitWeather(lat,long){
  let requestlink = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + appKey;
  httpRequestAsync(requestlink, theResponse);
  
}
// Install Script functions

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} evt
 */
function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');

}


/**
 * Event handler for butInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute('hidden', true);

  // CODELAB: Log user response to prompt. Installation via icon
  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });

}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);



// Adding own code to detect successful installation


/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log('App was installed.', evt);

}