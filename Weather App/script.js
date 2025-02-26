const apikey = "23152d87dd07ae20287cba9d74fb9604";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let weathericon = document.getElementById("weather-icon");
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")
// let inputval = parseFloat(document.getElementById("search_box").value);
// let num_value = Number(inputval);
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";

        let cityElement = document.querySelector(".city");
        let tempElement = document.querySelector(".temp");
        let humidityElement = document.querySelector(".humidity");
        let windElement = document.querySelector(".wind");

        if (cityElement) cityElement.innerHTML = data.name;
        if (tempElement) tempElement.innerHTML = Math.round(data.main.temp) + "°C";
        if (humidityElement) humidityElement.innerHTML = Math.round(data.main.humidity) + "%";
        if (windElement) windElement.innerHTML = (data.wind.speed) + "km/hr";

        if(data.weather[0].main == "Clouds" && weathericon){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain" && weathericon){
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Clear" && weathericon){
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Snow" && weathericon){
            weathericon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Thunderstorm" && weathericon){
            weathericon.src = "images/thunderstorm.png";
        }
        else if(data.weather[0].main == "Drizzle" && weathericon){
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist" && weathericon){
            weathericon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Smoke" && weathericon){
            weathericon.src = "images/smoke.png";
        }
    } 
    
searchbtn.addEventListener("click", function(){
    checkWeather(searchbox.value);
    searchbox.value = "";
});




