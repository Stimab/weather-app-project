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
  } else {
    unitSwitch.innerHTML = "Switch to Metric";
    switchToImperial();
    toFahrenheit();
    toMilePerHour();
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

