function apiCall(townCode) {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + townCode + "&APPID=426ea6dd30efaa6a3321c678df5eef94&units=metric"



    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

            const currentWeather = document.querySelector('#current');
            const currentTemp = document.querySelector('#temp');
            const humidity = document.querySelector('#humidity');
            const wind = document.querySelector('#wind');

            currentWeather.textContent = jsObject.weather[0].description;
            currentTemp.textContent = jsObject.main.temp.toFixed(0) + "  ";
            humidity.textContent = jsObject.main.humidity.toFixed(0) + "  ";
            wind.textContent = jsObject.wind.speed.toFixed(0) + "  ";

        });

    const apiURLF = "https://api.openweathermap.org/data/2.5/forecast?id=" + townCode + "&APPID=426ea6dd30efaa6a3321c678df5eef94&units=metric"



    fetch(apiURLF)
        .then((response) => response.json())
        .then((jsObject) => {


            const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));


            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let day = 0;
            let imagesrc = "";
            let desc = "";
            fivedayforecast.forEach(forecast => {
                let d = new Date(forecast.dt_txt);
                document.getElementById(`temp${day+1}`).textContent = forecast.main.temp.toFixed(0) + "° C";
                document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
                desc = forecast.weather[0].description;
                imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
                document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
                document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
                day++;
            });




        });
}