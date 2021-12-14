// console.log("testing");
// to call API use fetch() function
// q means query

var loc = "Kuala Lumpur"

// define element
var locationEle = document.getElementById('location');
var iconEle = document.getElementById('icon')
var weatherEle = document.getElementById('weather');
var tempEle = document.getElementById('temp');
var humidityEle = document.getElementById('humidity');

// template String use `inside the back tick everything become a string so can use variable together

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=ad77f935d5fc7f9e923946ccd13ff20e`
)
    .then((response) => response.json())
    .then((data) => {
        console.log("DATA....", data);
        console.log("DATA....", data.name);
        console.log("Temp", data.main.temp);

        var tempData = data.main.temp - 273.15;
        console.log("CEL:", tempData)
    });

// find Weather fields in API response to see the API codes format

function getWeather(locPara) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locPara}&appid=ad77f935d5fc7f9e923946ccd13ff20e`
    )
        .then((response) => response.json())
        .then((data) => {
            var name = data.name;
            var weather = data.weather[0].main;
            var icon = data.weather[0].icon;
            var temp = data.main.temp - 273.15;
            var humidity = data.main.humidity;

            // update element
            locationEle.innerHTML = name;
            weatherEle.innerHTML = weather;
            iconEle.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            // iconEle.src = 'icons/${icon}.png';
            // tempEle.innerHTML = temp;
            // tempEle.innerHTML = temp.toFixed(2);
            tempEle.innerHTML = Math.round(temp);
            humidityEle.innerHTML = humidity;

        });
}