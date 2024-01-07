const apiKey="6656bb0df19d0756897fb023c7c0e19d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIMG=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity-text").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-text").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIMG.src="Images/clouds.png"
    }
    if(data.weather[0].main=="Rain"){
        weatherIMG.src="Images/clouds.png"
    }
    if(data.weather[0].main=="Clear"){
        weatherIMG.src="Images/clear.png"
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIMG.src="Images/drizzle.png"
    }
    if(data.weather[0].main=="Mist"){
        weatherIMG.src="Images/mist.png"
    }
    if(data.weather[0].main=="Snow"){
        weatherIMG.src="Images/snow.png"
    }
}

searchBtn.addEventListener("click",()=>{
    const cityname=searchBox.value;
    checkWeather(cityname);
});