// ============================================================
// 🐛  FETCH API — HOMEWORK  |  DEBUG TASKS
// ============================================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should fetch weather data and log the temperature.
// Instead it logs undefined. What's wrong?

// fetch(WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log("Temperature: " + data.temperature); // undefined
//   })
//   .catch(function(err) {
//     console.error(err.message);
//   });

// What's wrong ↓
// temperature is a key under another key: current_weather. data.temperature doesn't exist and returns undefined.
// Should be data.current_weather.temperature instead

// Your fix ↓

fetch(WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Temperature: " + data.current_weather.temperature); // undefined
  })
  .catch(function(err) {
    console.error(err.message);
  });

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This fetch chain should log the city name and temperature.
// The second .then crashes. What's wrong?

// fetch(WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true")
//   .then(function(response) {
//     if (!response.ok) {
//       throw new Error("HTTP " + response.status);
//     }
//     // missing return
//     response.json();
//   })
//   .then(function(data) {
//     console.log("Temp: " + data.current_weather.temperature);
//   })
//   .catch(function(err) {
//     console.error("Error:", err.message);
//   });

// What's wrong ↓
// The response is not being returned so it's not passed on to the next .then.
// There is no city logged.


// Your fix ↓

fetch(WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    return response.json();
  })
  .then(function(data) {
    console.log("City: New York");
    console.log("Temp: " + data.current_weather.temperature);
  })
  .catch(function(err) {
    console.error("Error:", err.message);
  });


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function fetches weather for a city and renders a card.
// It has TWO bugs — one causes wrong data display, one causes
// a crash on a bad city key.

// const CITIES = {
//   "london": { name: "London", lat: 51.51, lon: -0.13 }
// };

// function fetchCity(cityKey) {
//   const city = CITIES[cityKey];

//   fetch(WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       const temp = data.temperature; // Bug 1: wrong path to temperature
//       console.log(city.name + ": " + temp + "°C");
//     })
//     .catch(function(err) {
//       console.error(err.message);
//     });
// }

// fetchCity("london");  // works (kinda)
// fetchCity("tokyo");   // Bug 2: crashes before even fetching

// Bug 1 ↓
// The temp for London shows as undefined. Temperature key is under current_weather.

// Bug 2 ↓
// Cannot fetch Tokyo because it doesn't exist in the CITIES object. Returns undefined.

// Your fix ↓


const CITIES = {
  "london": { name: "London", lat: 51.51, lon: -0.13 }
};


function fetchCity(cityKey) {
  const city = CITIES[cityKey];

  if (!city) {
    console.error("City not found");
    return;
  }

  fetch(WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const temp = data.current_weather.temperature; // Bug 1: corrected to data.current_weather.temperature
      console.log(city.name + ": " + temp + "°C");
    })
    .catch(function(err) {
      console.error(err.message);
    });
}

fetchCity("london");
fetchCity("tokyo");   // Bug 2: added error message saying "City not found"