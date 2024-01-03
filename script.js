const container = document.querySelector(".weather");
const weatherImage = document.querySelector(".weather-image");
const weatherDetails = document.querySelector(".weather-details");
// const search = document.querySelector(".search-icon");

const getInitialWeather = async () => {
  var apiKey = "4a95700933a291011fe160d07d065788";
  const defaultCity = "kathmandu";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const image = document.querySelector(".weather-image img");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
    const countryName = document.getElementById("country");
    const minTemp = document.querySelector(".min-content p");
    const maxTemp = document.querySelector(".max-content p");
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

    countryName.innerHTML = data.sys.country;
    temperature.innerHTML = `${parseInt(data.main.temp)}<sup>°C</sup>`;
    description.textContent = data["weather"][0]["main"];
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHTML = data.main.temp_max;
    humidity.innerHTML = `${parseInt(data.main.humidity)}%`;
    wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
  } catch (error) {
    alert("Error: " + error);
    console.log(error);
  }
};

async function searchData(event) {
  event.preventDefault();
  var APIKey = "58835567862e926e7ac413f487f5c7e0";
  const city = document.querySelector("#search__input").value;
  if (city == "") {
    alert("Please enter a city name.");
  }
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  if (city == "") {
    return;
  }
  try {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);
    const image = document.querySelector(".weather-image img");
    const temperature = document.querySelector(".temperature");
    const location = document.querySelector(".location-name");
    const country = document.getElementById("country");
    const minTemp = document.querySelector(".min-content p");
    const maxTemp = document.querySelector(".max-content p");
    const description = document.querySelector(".description");
    const humidity = document.querySelector(".humidity-content p");
    const wind = document.querySelector(".wind-content p");

    if (data.cod === "404") {
      alert("City not found. Please enter a valid city name.");
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
    console.log(data.sys.country);
    location.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    temperature.innerHTML = `${parseInt(data.main.temp)}<sup>°C</sup>`;
    description.innerHTML = data.weather[0].description;
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHTML = data.main.temp_max;
    humidity.innerHTML = `${parseInt(data.main.humidity)}%`;
    wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
  } catch (error) {
    console.log(error);
  }
}
