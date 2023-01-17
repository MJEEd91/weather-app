const apiKey = "61413c988edae2d531b1bf633e92d8bf";
const weatherContainer = document.getElementById("weather-container");
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");

searchButton.addEventListener("click", getWeather);

function getWeather() {
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0];
      const temp = data.main.temp;
      weatherContainer.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>${weather.main} - ${weather.description}</p>
        <p>Temperature: ${temp}°C</p>
      `;
    })
    .catch(error => console.log(error));
}
