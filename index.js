const unitSwitch = document.querySelector(".js-unit-switch");
const degreeCel = document.querySelector(".js-degree-cel");
const degreeFahr = document.querySelector(".js-degree-fahr");
const celCheck = document.querySelector(".js-cel-check");
const fahrCheck = document.querySelector(".js-fahr-check");
const speedOpt1 = document.querySelector(".js-speed-opt-1");
const speedOpt1Check = document.querySelector(".js-speed-opt-1-check");
const speedOpt2 = document.querySelector(".js-speed-opt-2");
const speedOpt2Check = document.querySelector(".js-speed-opt-2-check");
const precipitOpt1 = document.querySelector(".js-precipit-opt-1");
const precipitOpt1check = document.querySelector(".js-precipit-opt-1-check");
const precipitOpt2 = document.querySelector(".js-precipit-opt-2");
const precipitOpt2check = document.querySelector(".js-precipit-opt-2-check");

function switchToMetric() {
  if (!degreeCel.classList.contains("degree-cel-metric")) {
    degreeCel.classList.add("degree-cel-metric");
    degreeFahr.classList.remove("degree-fahr-imperial");
    celCheck.classList.replace("cel-check", "cel-check-opacity");
    fahrCheck.classList.replace("fahr-check-opacity", "fahr-check");
  }

  if (!speedOpt1.classList.contains("speed-opt-1-metric")) {
    speedOpt1.classList.add("speed-opt-1-metric");
    speedOpt2.classList.remove("speed-opt-2-imperial");
    speedOpt1Check.classList.replace(
      "speed-opt-1-check",
      "speed-opt-1-check-opacity",
    );
    speedOpt2Check.classList.replace(
      "speed-opt-2-check-opacity",
      "speed-opt-2-check",
    );
  }

  if (!precipitOpt1.classList.contains("precipit-opt-1-metric")) {
    precipitOpt1.classList.add("precipit-opt-1-metric");
    precipitOpt2.classList.remove("precipit-opt-2-imperial");
    precipitOpt1check.classList.replace(
      "precipit-opt-1-check",
      "precipit-opt-1-check-opacity",
    );
    precipitOpt2check.classList.replace(
      "precipit-opt-2-check-opacity",
      "precipit-opt-2-check",
    );
  }
}

function switchToImperial() {
  if (!degreeFahr.classList.contains("degree-fahr-imperial")) {
    degreeFahr.classList.add("degree-fahr-imperial");
    degreeCel.classList.remove("degree-cel-metric");
    fahrCheck.classList.replace("fahr-check", "fahr-check-opacity");
    celCheck.classList.replace("cel-check-opacity", "cel-check");
  }

  if (!speedOpt2.classList.contains("speed-opt-2-imperial")) {
    speedOpt2.classList.add("speed-opt-2-imperial");
    speedOpt1.classList.remove("speed-opt-1-metric");
    speedOpt2Check.classList.replace(
      "speed-opt-2-check",
      "speed-opt-2-check-opacity",
    );
    speedOpt1Check.classList.replace(
      "speed-opt-1-check-opacity",
      "speed-opt-1-check",
    );
  }

  if (!precipitOpt2.classList.contains("precipit-opt-2-imperial")) {
    precipitOpt2.classList.add("precipit-opt-2-imperial");
    precipitOpt1.classList.remove("precipit-opt-1-metric");
    precipitOpt2check.classList.replace(
      "precipit-opt-2-check",
      "precipit-opt-2-check-opacity",
    );
    precipitOpt1check.classList.replace(
      "precipit-opt-1-check-opacity",
      "precipit-opt-1-check",
    );
  }
}

unitSwitch.addEventListener("click", () => {
  if (unitSwitch.innerHTML === "Switch to Metric") {
    unitSwitch.innerHTML = "Switch to Imperial";
    switchToMetric();
    toCelsius();
    toKilometerPerHour();
    toMillimeter();
  } else {
    unitSwitch.innerHTML = "Switch to Metric";
    switchToImperial();
    toFahrenheit();
    toMilePerHour();
    toInches();
  }
  console.log("hello");
});

const units = document.querySelector(".js-unit");
const unitOptions = document.querySelector(".js-unit-options");

units.addEventListener("click", () => {
  if (!unitOptions.classList.contains("unit-options-opacity")) {
    unitOptions.classList.add("unit-options-opacity");
  } else {
    unitOptions.classList.remove("unit-options-opacity");
  }
});

function toCelsius() {
  let fahreheit = document.querySelectorAll(".temp");

  fahreheit.forEach((value) => {
    let f = value.innerHTML;
    f = parseFloat(f);
    let celsius = ((f - 32) * 5) / 9;
    value.innerHTML = `${celsius.toFixed(0)}&deg;`;
  });

  // console.log(celsius);
}

function toFahrenheit() {
  const celsius = document.querySelectorAll(".temp");

  celsius.forEach((value) => {
    let c = value.innerHTML;
    c = parseFloat(c);
    let fahrenheit = (c * 9) / 5 + 32;

    // console.log(celsius);
    value.innerHTML = `${fahrenheit.toFixed(0)}&deg;`;
  });
}

function toKilometerPerHour() {
  const windCon = document.querySelector(".wind-container");
  if (windCon.classList.contains("wind-container")) {
    windCon.classList.replace("wind-container", "wind-container-rpd");
  }
  const mph = document.querySelector(".js-wind-data");
  let m = mph.innerHTML;
  m = parseFloat(m);
  let kmh = m * 1.60934;

  mph.innerHTML = `${kmh.toFixed(0)} km/h`;
}

function toMilePerHour() {
  const windCon = document.querySelector(".wind-container-rpd");
  if (windCon.classList.contains("wind-container-rpd")) {
    windCon.classList.replace("wind-container-rpd", "wind-container");
  }
  const kmh = document.querySelector(".js-wind-data");
  let k = kmh.innerHTML;
  k = parseFloat(k);
  let mph = k / 1.60934;

  kmh.innerHTML = `${mph.toFixed(0)} mph`;
}

function toMillimeter() {
  const precip = document.querySelector(".precip-data");
  let p = precip.innerHTML;
  p = parseFloat(p);
  let mm = p * 25.4;
  precip.innerHTML = `${mm.toFixed(1)} mm`;
}

function toInches() {
  const precip = document.querySelector(".precip-data");
  let p = precip.innerHTML;
  p = parseFloat(p);
  let inches = p / 25.4;
  precip.innerHTML = `${inches.toFixed(2)} in`;
}

const daySelectElement = document.querySelector(".day-selection");
const daysElement = document.querySelector(".js-days-element");
const dayDisplay = document.querySelector(".hours-day");
const monday = document.querySelector(".mon");
const tuesday = document.querySelector(".tue");
const wednesday = document.querySelector(".wed");
const thursday = document.querySelector(".thurs");
const friday = document.querySelector(".fri");
const saturday = document.querySelector(".sat");
const sunday = document.querySelector(".sun");
const hoursDay = document.querySelector(".hours-day");

daySelectElement.addEventListener("click", () => {
  if (!daysElement.classList.contains("days-of-the-week-opacity")) {
    daysElement.classList.add("days-of-the-week-opacity");
  } else {
    daysElement.classList.remove("days-of-the-week-opacity");
  }
});

monday.addEventListener("click", () => {
  if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!monday.classList.contains("selected-day")) {
    monday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Monday";
});

tuesday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!tuesday.classList.contains("selected-day")) {
    tuesday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Tuesday";
});

wednesday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!wednesday.classList.contains("selected-day")) {
    wednesday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Wednesday";
});

thursday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!thursday.classList.contains("selected-day")) {
    thursday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Thursday";
});

friday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!friday.classList.contains("selected-day")) {
    friday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Friday";
});

saturday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  } else if (sunday.classList.contains("selected-day")) {
    sunday.classList.remove("selected-day");
  }

  if (!saturday.classList.contains("selected-day")) {
    saturday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Saturday";
});

sunday.addEventListener("click", () => {
  if (monday.classList.contains("selected-day")) {
    monday.classList.remove("selected-day");
  } else if (wednesday.classList.contains("selected-day")) {
    wednesday.classList.remove("selected-day");
  } else if (thursday.classList.contains("selected-day")) {
    thursday.classList.remove("selected-day");
  } else if (friday.classList.contains("selected-day")) {
    friday.classList.remove("selected-day");
  } else if (saturday.classList.contains("selected-day")) {
    saturday.classList.remove("selected-day");
  } else if (tuesday.classList.contains("selected-day")) {
    tuesday.classList.remove("selected-day");
  }

  if (!sunday.classList.contains("selected-day")) {
    sunday.classList.add("selected-day");
  }

  hoursDay.innerHTML = "Sunday";
});

const searchInput = document.querySelector(".search-container-input");

const searchDropdown = document.querySelector(".search-dropdown");

searchInput.addEventListener("click", () => {
  if (!searchDropdown.classList.contains("search-dropdown-display")) {
    searchDropdown.classList.add("search-dropdown-display");
  } else {
    searchDropdown.classList.remove("search-dropdown-display");
  }
});

const searchBtn = document.querySelector(".search-button");
const searching = document.querySelector(".searching");

// searchBtn.addEventListener("click", () => {
//   if (searchDropdown.classList.contains("search-dropdown-display")) {
//     searchDropdown.classList.remove("search-dropdown-display");
//   }

//   searching.classList.add("searching-display");

//   clearTimeout(timeoutId);

//   timeoutId = setTimeout(() => {
//     searching.classList.remove("searching-display");
//   }, 10000);

//   const city = searchInput.value.trim();
//   if (city) {
//     getWeather(city);
//   } else {
//     console.log("Please enter a city name");
//   }
// });

// let timeoutId;

// searchBtn.addEventListener("click", async () => {
//   if (searchDropdown.classList.contains("search-dropdown-display")) {
//     searchDropdown.classList.remove("search-dropdown-display");
//   }

//   searching.classList.add("searching-display");

//   const city = searchInput.value.trim();
//   if (city) {
//     const data = await getWeather(city);
//     searching.classList.remove("searching-display");

//     if (data) {
//       updateUI(data);
//     } else {
//       document.querySelector(".no-result").classList.add("no-result-display");
//     }
//   }
// });

// async function getWeather(locationInput) {
//   let name = "";
//   let countryName = "";
//   try {
//     let city = locationInput;
//     let country = "";

//     if (locationInput.includes(",")) {
//       [city, country] = locationInput.split(",").map((item) => item.trim());
//     }

//     // Geocoding
//     let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
//     if (country) geoUrl += `&country=${country}`;

//     const geoRes = await fetch(geoUrl);
//     const geoData = await geoRes.json();

//     if (!geoData.results?.length) throw new Error("Location not found");

//     // const {
//     //   latitude,
//     //   longitude,
//     //   name,
//     //   country: countryName,
//     // } = geoData.results[0];
//     const { latitude, longitude } = geoData.results[0];
//     name = geoData.results[0].name;
//     countryName = geoData.results[0].country;

//     // Weather request with imperial + hourly + daily
//     const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}
//       &current_weather=true
//       &temperature_unit=fahrenheit
//       &windspeed_unit=mph
//       &precipitation_unit=inch
//       &hourly=temperature_2m,relative_humidity_2m
//       &daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`;

//     const weatherRes = await fetch(weatherUrl.replace(/\s+/g, ""));
//     const weatherData = await weatherRes.json();

//     console.log(weatherData);

//     return {
//       location: `${name}, ${countryName}`,
//       current: weatherData.current_weather,
//       hourly: weatherData.hourly,
//       daily: weatherData.daily,
//       latitude,
//       longitude,
//     };
//   } catch (error) {
//     console.error(error);
//     return null;
//   }

//   // console.log(`${name}, ${countryName}`);
// }

const details = document.querySelector(".details");

function clearMessages() {
  noResult.classList.remove("no-result-display");
  networkError.classList.remove("network-error-display");
}

searchBtn.addEventListener("click", async () => {
  if (searchDropdown.classList.contains("search-dropdown-display")) {
    searchDropdown.classList.remove("search-dropdown-display");
  }

  const city = searchInput.value.trim();
  if (!city) return;

  clearMessages();

  searching.classList.add("searching-display");

  const data = await getWeather(city);

  searching.classList.remove("searching-display");

  if (!data || data.error) {
    // Hide details, show error message
    details.classList.add("details-not-displayed");

    if (data?.error === "not_found") {
      noResult.classList.add("no-result-display");
    } else {
      networkError.classList.add("network-error-display");
    }
    return;
  }

  // Success — show details, hide any errors
  details.classList.remove("details-not-displayed");
  updateUI(data);
});

async function getWeather(locationInput) {
  let name = "";
  let countryName = "";
  try {
    let city = locationInput;
    let country = "";

    if (locationInput.includes(",")) {
      [city, country] = locationInput.split(",").map((item) => item.trim());
    }

    // Geocoding
    let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    if (country) geoUrl += `&country=${country}`;

    let geoRes;
    try {
      geoRes = await fetch(geoUrl);
    } catch (networkError) {
      return { error: "network" };
    }

    const geoData = await geoRes.json();

    if (!geoData.results?.length) return { error: "not_found" };

    const { latitude, longitude } = geoData.results[0];
    name = geoData.results[0].name;
    countryName = geoData.results[0].country;

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}
      &current_weather=true
      &current=apparent_temperature
      &temperature_unit=fahrenheit
      &windspeed_unit=mph
      &precipitation_unit=inch
      &hourly=temperature_2m,relative_humidity_2m,weathercode
      &daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,sunrise,sunset`;

    let weatherRes;
    try {
      weatherRes = await fetch(weatherUrl.replace(/\s+/g, ""));
    } catch (networkError) {
      return { error: "network" };
    }

    const weatherData = await weatherRes.json();

    return {
      location: `${name}, ${countryName}`,
      current: weatherData.current_weather,
      currentExtra: weatherData.current,
      hourly: weatherData.hourly,
      daily: weatherData.daily,
      latitude,
      longitude,
    };
  } catch (error) {
    console.error(error);
    return { error: "network" };
  }
}

const noResult = document.querySelector(".js-no-result");
const networkError = document.querySelector(".js-network-error");

function clearMessages() {
  noResult.classList.remove("no-result-display");
  networkError.classList.remove("network-error-display");
}

searchBtn.addEventListener("click", async () => {
  if (searchDropdown.classList.contains("search-dropdown-display")) {
    searchDropdown.classList.remove("search-dropdown-display");
  }

  const city = searchInput.value.trim();
  if (!city) return;

  // Clear any previous error messages
  clearMessages();

  searching.classList.add("searching-display");

  const data = await getWeather(city);

  searching.classList.remove("searching-display");

  if (!data || data.error) {
    if (data?.error === "not_found") {
      noResult.classList.add("no-result-display");
    } else {
      // network error or anything unexpected
      networkError.classList.add("network-error-display");
    }
    return;
  }

  updateUI(data);
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

function updateUI(data) {
  // ── Location & Date ──────────────────────────────
  document.querySelector(".location").textContent = data.location;
  document.querySelector(".date").textContent = formatDate(new Date());

  // ── Current Temperature ──────────────────────────
  document.querySelector(".display-temp").innerHTML =
    `${Math.round(data.current.temperature)}&deg;`;

  // ── Weather icon (main display) ──────────────────
  document.querySelector(".display-weather-icon").src = getWeatherIcon(
    data.current.weathercode,
  );

  // ── Weather Attributes ───────────────────────────
  document.querySelector(".feels-data").innerHTML =
    `${Math.round(data.current.apparent_temperature ?? data.current.temperature)}&deg;`;

  document.querySelector(".humidity-data").textContent =
    `${data.hourly.relative_humidity_2m[0]}%`;

  document.querySelector(".wind-data").textContent =
    `${Math.round(data.current.windspeed)} mph`;

  document.querySelector(".precip-data").textContent =
    `${data.daily.precipitation_sum?.[0] ?? 0} in`;

  // ── Hourly Forecast (8 slots) ────────────────────
  const now = new Date();
  const currentHour = now.getHours();

  for (let i = 1; i <= 8; i++) {
    const hourIndex = currentHour + i;
    const temp = data.hourly.temperature_2m[hourIndex];
    const timeLabel = formatHour(hourIndex);
    const weathercode = data.hourly.weathercode?.[hourIndex] ?? 0;

    document.querySelector(`.hour-${i}-time`).textContent = timeLabel;
    document.querySelector(`.hour-${i}-degree`).innerHTML =
      `${Math.round(temp)}&deg;`;
    document.querySelector(`.hour-${i}-weather-icon`).src =
      getWeatherIcon(weathercode);
  }

  // ── Daily Forecast (7 days) ──────────────────────
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayLabel = i === 0 ? "Today" : dayNames[date.getDay()];
    const maxTemp = data.daily.temperature_2m_max[i];
    const minTemp = data.daily.temperature_2m_min[i];
    const weathercode = data.daily.weathercode?.[i] ?? 0;

    const dayNum = i + 1;
    document.querySelector(`.day-${dayNum}-text`).textContent = dayLabel;
    document.querySelector(`.day-${dayNum}-first-degree`).innerHTML =
      `${Math.round(maxTemp)}&deg;`;
    document.querySelector(`.day-${dayNum}-second-degree`).innerHTML =
      `${Math.round(minTemp)}&deg;`;
    document.querySelector(`.day-${dayNum}-weather-icon`).src =
      getWeatherIcon(weathercode);
  }
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  // outputs: "Tuesday, Apr 22, 2025"
}

function formatHour(hour24) {
  const h = hour24 % 24;
  const period = h >= 12 ? "PM" : "AM";
  const display = h % 12 === 0 ? 12 : h % 12;
  return `${display} ${period}`;
}

function getWeatherIcon(code) {
  if (code === 0 || code === 1) return "assets/images/icon-sunny.webp";
  if (code === 2) return "assets/images/icon-partly-cloudy.webp";
  if (code === 3) return "assets/images/icon-overcast.webp";
  if (code === 45 || code === 48) return "assets/images/icon-fog.webp";
  if (code >= 51 && code <= 57) return "assets/images/icon-drizzle.webp";
  if (code >= 61 && code <= 67) return "assets/images/icon-rain.webp";
  if (code >= 71 && code <= 77) return "assets/images/icon-snow.webp";
  if (code >= 80 && code <= 82) return "assets/images/icon-rain.webp";
  if (code === 95 || code >= 96) return "assets/images/icon-storm.webp";
  return "assets/images/icon-sunny.webp"; // fallback
}
