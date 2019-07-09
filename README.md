Weather PWA using JavaScript and OpenWeather API
=================
Following the tutorial on [Boostlog.io](https://boostlog.io/@israrawan/weather-application-using-javascript-5b0abc27a374750053e319f8), this PWA shows weather information taken from [OpenWeatherMaps API](https://openweathermap.org/api)



Project description
---
The PWA displays basic weather information about a city, state or country based on what the user types in the search textbox.
By default it desplays the user's current location's weather information, provided the user has granted **location access**.



On the front-end,
- `public/index.html` : The main as well as start page of the PWA. 
- `public/offline.html` : The webpage that is displayed to the users when they are offline.
- `public/manifest.json` : The manifest JSON file required by PWAs.
- `public/service-worker.js`: The service worker responsible to handle the PWA.
- `public/style.css` : The stylesheet of the PWA.
- `public/script.js` : The javascript file responsilble for fetching and displaying information from [openweathermaps](https://openweathermap.org/api) via its API.
- `public/images` : Folder holding the required images as well as icons.

On the back-end,
- your app starts at `server.js`, which is basically a Glitch-hosted, Express server.
- add frameworks and packages in `package.json`



Made with [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

Installation
-----
- To install the PWA on your device, go to [OpenWeatherMaps API PWA](https://enigmatic7earth-open-weather-maps-pwa.glitch.me/) and click the install icon: ![alt text](https://github.com/enigmatic7earth/open-weather-maps-pwa/blob/master/public/images/install.svg "Install PWA")

Screenshot
----
<img src="https://github.com/enigmatic7earth/open-weather-maps-pwa/blob/master/enigmatic7earth-open-weather-maps-pwa.glitch.me.png" width="621">
