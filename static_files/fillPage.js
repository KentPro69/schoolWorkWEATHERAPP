function loadWeatherData(city) {
  // Fetch the weather data for the specified city
  fetch(`http://127.0.0.1:2000/api/${city}`)
    .then((response) => response.json())
    .then((data) => {
      // Extract the relevant data from the response
      const cityName = data.name;
      const currentTemperature = data.current_temperature;
      const dayTemperature = data.day_temperature;
      const nightTemperature = data.night_temperature;
      const conditions = data.conditions;

      // Update the HTML page with the data
      document.getElementById("city-name").innerHTML = cityName;
      document.getElementById(
        "current-temperature"
      ).innerHTML = `${currentTemperature} &deg;C`;
      document.getElementById(
        "day-temperature"
      ).innerHTML = `High: ${dayTemperature} &deg;C`;
      document.getElementById(
        "night-temperature"
      ).innerHTML = `Low: ${nightTemperature} &deg;C`;
      document.getElementById("conditions").innerHTML = conditions;
    })
    .catch((error) => {
      console.error(`Error loading weather data: ${error.message}`);
    });
}

window.onload = function () {
  const path = window.location.pathname;
  const currentPage = path.split("/").pop();
  loadWeatherData(currentPage);
};
