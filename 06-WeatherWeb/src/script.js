    const apikey = "22333e0de4c73aa107f953c4fed951f7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
      document.querySelector(".error").style.display = "block"
      document.querySelector(".weather").style.display = "none"
    }
    else{
          var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humid-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed + "km/h";
      

    if(data.weather[0].main == "Clouds"){

      weatherIcon.src = "../assets/temp2-cloud.svg"
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "../assets/temp1-sun.svg"

    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "../assets/temp5-rain.svg"

    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "../assets/temp3-drizzil.svg"

    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "../assets/temp4-mist.svg"

    }
    else{
      weatherIcon.src = "Not Valid"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    }


    }

    searchBtn.addEventListener("click" , () => {
      checkWeather(searchBox.value);
    })