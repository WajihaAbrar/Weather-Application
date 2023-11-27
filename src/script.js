function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let searchCity = document.querySelector("#search-city");
  searchCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchHandler);

cityWeather("London");
