// ============================================================
// 🐛  AXIOS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Same three bug categories as the fetch homework's debug set —
// find and fix each one, then explain what was wrong.
// (axios must be loaded — run these from index.html.)
// ============================================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should fetch weather data and log the temperature.
// Instead it logs undefined. What's wrong?

// async function getLondonTemp() {
//   const response = await axios.get(
//     WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true"
//   );
//   console.log("Temperature: " + response.data.temperature); // undefined
// }

// getLondonTemp();

// What's wrong ↓
// temperature belongs within current_weather

// Your fix ↓
async function getLondonTemp() {
  const response = await axios.get(
    WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true"
  );
  console.log("Temperature: " + response.data.current_weather.temperature);
}

getLondonTemp();


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should log New York's temperature. Instead it crashes
// with a TypeError — and it happens INSTANTLY, before the
// request could possibly have finished. That timing is a clue.

// async function getNYTemp() {
//   const response = axios.get(
//     WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true"
//   );
//   console.log("Temp: " + response.data.current_weather.temperature);
// }

// getNYTemp();

// What's wrong ↓
// Needs await to wait to fetch and parse the data.
// response.data shows undefined because without await, it is still just a Promise that's pending.
// At a restaurant, response with no await is the buzzer (Promise), response with await waits for the buzzer and then hands over the food (the data)

// Your fix ↓

async function getNYTemp() {
  const response = await axios.get(
    WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true"
  );
  console.log("Temp: " + response.data.current_weather.temperature);
}

getNYTemp();


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function fetches weather for a city and logs it.
// It has TWO bugs — one causes wrong data display, one causes
// a crash on a bad city key.

// const CITIES = {
//   "london": { name: "London", lat: 51.51, lon: -0.13 }
// };

// async function fetchCity(cityKey) {
//   const city = CITIES[cityKey];

//   try {
//     const response = await axios.get(
//       WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true"
//     );
//     const temp = response.data.temperature; // Bug 1: wrong path to temperature
//     console.log(city.name + ": " + temp + "°C");
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// fetchCity("london");  // works (kinda)
// fetchCity("tokyo");   // Bug 2: crashes before even fetching

// Bug 1 ↓
// Incorrect pathway to temperature. Should be data.current_weather.temperature

// Bug 2 ↓
// There is no tokyo in the CITIES object. Need to add a guard for bad city argument

// Your fix ↓

const CITIES = {
  "london": { name: "London", lat: 51.51, lon: -0.13 }
};

async function fetchCity(cityKey) {
  const city = CITIES[cityKey];

  if (!city) {
    console.error("City not found.");
    return;
  }

  try {
    const response = await axios.get(
      WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true"
    );
    const temp = response.data.current_weather.temperature; // Bug 1: corrected path to data.current_weather.temperature
    console.log(city.name + ": " + temp + "°C");
  } catch (err) {
    console.error(err.message);
  }
}

fetchCity("london");  
fetchCity("tokyo");   // Bug 2: added guard for bad city argument