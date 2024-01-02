const container = document.querySelector(".weather");
const weatherImage = document.querySelector(".weather-image");
const weatherDetails = document.querySelector(".weather-details");
const search = document.querySelector(".search-icon");

const getInitialWeather = () => {
  var apiKey = "4a95700933a291011fe160d07d065788";
  const defaultCity = "Kathmandu";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const image = document.querySelector(".weather-image img");
      const temperature = document.querySelector(".temperature");
      const description = document.querySelector(".description");
      const sunrise = document.querySelector(".sunrise-content p");
      const sunset = document.querySelector(".sunset-content p");
      const humidity = document.querySelector(".humidity-content p");
      const wind = document.querySelector(".wind-content p");
      if (data.cod === "404") {
        alert("Default city not found. Please enter a valid city name.");
        return;
      }

      if (data.weather[0].main == "Clear") {
        image.src = "clear.svg";
      } else if (data.weather[0].main == "Rain") {
        image.src = "rain.svg";
      } else if (data.weather[0].main == "Snow") {
        image.src = "snowy.svg";
      } else if (data.weather[0].main == "Clouds") {
        image.src = "cloudy.svg";
      } else if (data.weather[0].main == "Mist") {
        image.src = "mist.svg";
      } else if (data.weather[0].main == "Haze") {
        image.src = "mist.svg";
      } else {
        image.src = "clear.svg";
      }

      const sunriseTimestamp = data.sys.sunrise * 1000;
      const sunsetTimestamp = data.sys.sunset * 1000;

      const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
      const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

      temperature.innerHTML = `${parseInt(data.main.temp)}<sup>°C</sup>`;
      description.textContent = data["weather"][0]["main"];
      sunrise.innerHTML = sunsetTime;
      sunset.innerHTML = sunriseTime;
      humidity.innerHTML = `${parseInt(data.main.humidity)}%`;
      wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert(
        "An error occurred while fetching weather data. Please try again later."
      );
    });
};

search.addEventListener("click", () => {
  var APIKey = "58835567862e926e7ac413f487f5c7e0";
  const city = document.querySelector(".search-input ").value;
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  console.log("first");
  if (city == "") {
    return;
  }

  fetch(APIurl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const image = document.querySelector(".weather-image img");
      const temperature = document.querySelector(".temperature");
      const location = document.querySelector(".location-name");
      const description = document.querySelector(".description");
      const sunrise = document.querySelector(".sunrise-content p");
      const sunset = document.querySelector(".sunset-content p");
      const humidity = document.querySelector(".humidity-content p");
      const wind = document.querySelector(".wind-content p");

      if (json.weather[0].main == "Clear") {
        image.src = "clear.svg";
      } else if (json.weather[0].main == "Rain") {
        image.src = "rain.svg";
      } else if (json.weather[0].main == "Snow") {
        image.src = "snowy.svg";
      } else if (json.weather[0].main == "Clouds") {
        image.src = "cloudy.svg";
      } else if (json.weather[0].main == "Mist") {
        image.src = "mist.svg";
      } else if (json.weather[0].main == "Haze") {
        image.src = "mist.svg";
      } else {
        image.src = "clear.svg";
      }

      const sunriseTimestamp = json.sys.sunrise * 1000;
      const sunsetTimestamp = json.sys.sunset * 1000;

      const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
      const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

      temperature.innerHTML = `${parseInt(json.main.temp)}<sup>°C</sup>`;
      description.innerHTML = json.weather[0].description;
      location.innerHTML = json.name;
      sunrise.innerHTML = sunsetTime;
      sunset.innerHTML = sunriseTime;
      humidity.innerHTML = `${parseInt(json.main.humidity)}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
