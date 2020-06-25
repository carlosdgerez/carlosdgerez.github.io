function apiCall() {
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=426ea6dd30efaa6a3321c678df5eef94&units=imperial"



    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            const currentWeather = document.querySelector('#current');
            const currentTemp = document.querySelector('#temp');
            const humidity = document.querySelector('#humidity');
            const wind = document.querySelector('#wind');

            currentWeather.textContent = jsObject.weather[0].description;
            currentTemp.textContent = jsObject.main.temp;
            humidity.textContent = jsObject.main.humidity;
            wind.textContent = jsObject.wind.speed;

        });

    const apiURLF = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=426ea6dd30efaa6a3321c678df5eef94&units=imperial"



    fetch(apiURLF)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
            console.log(fivedayforecast);



            /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
            const desc = jsObject.weather[0].description; // note how we reference the weather array
            document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
            document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
            document.getElementById('icon').setAttribute('alt', desc); */


        });
}







function windChills() {
    var wind = parseFloat(document.getElementById("wind").textContent);
    var temp = parseFloat(document.getElementById("temp").textContent);
    var chill = "N/A"

    if (wind > 3 && temp < 50) {
        var s = Math.pow(wind, 0.16);
        chill = (35.74 + (0.6215 * temp) - (35.75 * s) + (0.4275 * temp * s)).toPrecision(2);;


    }

    document.getElementById("chill").innerHTML = chill;




}