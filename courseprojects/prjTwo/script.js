document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector("#searchBox");
  const weatherBtn = document.querySelector("#weatherBtn");
  const weatherOutput = document.querySelector("#weatherOutput");
  const date = document.querySelector("#date");
  const city = document.querySelector("#city");
  const temp = document.querySelector("#temp");
  const weatherType = document.querySelector("#weatherType");
  const errorMessage = document.querySelector("#error-message");

  const API_KEY = "22333e0de4c73aa107f953c4fed951f7";
  weatherBtn.addEventListener("click", async () => {
    const cityName = searchBox.value.trim();
    if (!cityName) return;
    // server may thrown an error
    // server / database is always in anothe continent
    try {
      const weatherData = await fetchWeatheData(cityName);
      displayWeatheData(weatherData);
    } catch (error) {
      showError();
    }
  });
  async function fetchWeatheData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    if (!response.ok) {
      throw new Error("City not Found");
    }
    const data = await response.json();
    return data;
  }
  function displayWeatheData(data) {
    console.log(data);
    const {name , main , weather} = data
    date.textContent = new Date().toDateString();
    city.textContent= name;
    temp.textContent = main.temp;
    weatherType.textContent = weather[0].description


    weatherOutput.classList.remove('hidden');
    errorMessage.classList.add('hidden');

  }
  function showError(error) {
    weatherOutput.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
