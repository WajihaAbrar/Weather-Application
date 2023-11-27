function eventHandler(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchCity = document.querySelector("#search-city");
  searchCity.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", eventHandler);
