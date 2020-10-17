const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (event) => {
        event.preventDefault();

        const location = search.value;

        if (location) {
            getWeather(location);
        }
    });

function getWeather(location) {
  var key = "8e0fceb6b98a46196b8205381d4f4cf8";
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + key, {mode: 'cors'})
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    console.log(data);
    displayWeather(data);
  })
  .catch(function() {
  });
}

function displayWeather(data){
  const celsius = Math.floor(data.main.temp-273.15);

  const weather = document.createElement("div");
  weather.classList.add("weatherStyle");
  weather.innerHTML = `
          <h2> ${celsius}°C </h2>
          <small>${data.weather[0].description}</small>
          <p><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></p> `;

          const mainSection = document.getElementById("mainSection");
           mainSection.innerHTML = "";
           mainSection.appendChild(weather);
           }
