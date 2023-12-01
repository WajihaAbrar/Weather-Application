function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let searchCity = document.querySelector("#search-city");
  let city = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  let weather = response.data.condition.description;
  let humidityDescription = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let windSpeed = document.querySelector("#wind-speed");
  let wind = response.data.wind.speed;
  let dayTime = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);
  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon" />`;
  // console.log(response.data);
  dayTime.innerHTML = formateDate(date);
  humidityDescription.innerHTML = `${humidity}%`;
  windSpeed.innerHTML = `${wind} km/h`;
  weatherDescription.innerHTML = weather;
  searchCity.innerHTML = city;
  temperatureElement.innerHTML = temperature;
  dayTime.innerHTML = time;
}
function formateDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function cityWeather(city) {
  let apiKey = "ofee7b234ec9d8b106dbf7831at13c09";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchHandler(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  cityWeather(searchInput.value);
}

function displayForecast() {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌥️</div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature"><strong>18°</strong></div>
              <div class="weather-forecast-temperature">14°</div>
            </div>
          </div>`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchHandler);

cityWeather("London");
displayForecast();
