const getWeather = async (city) => {
    try {
        const API_key = '8394341b2fe3bf74057e0320421a8c5c';
        const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        const weatherData = await weatherFetch.json();

        return weatherData
    }
    catch(error) {
        console.log(error);
    }
}

function updateWeatherUI(weatherData) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date()
    const location = document.querySelector('.location');
    const weatherDescription = document.querySelector('.weatherDescription');
    const weatherIcon = document.querySelector('.weatherIcon');
    const temperature = document.querySelector('.temperature');
    const tempMax = document.querySelector('.tempMax');
    const tempMin = document.querySelector('.tempMin');

    if (!weatherData || !weatherData.weather) {
        console.log("Invalid weather data");
        return;
    }

    document.querySelector('.date').innerText = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    location.innerText = weatherData.name
    weatherDescription.innerText = weatherData.weather[0].main
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    temperature.innerText = `${Math.round(weatherData.main.temp - 273.15)}°C`;  
    tempMax.innerText = `${Math.round(weatherData.main.temp_max - 273.15)}°C`;
    tempMin.innerText = `${Math.round(weatherData.main.temp_min - 273.15)}°C`;
}

document.querySelector('#searchBtn').onclick = () => {
    (async () => {
        const city = document.querySelector('#searchInput').value
        const weatherData = await getWeather(city)

        updateWeatherUI(weatherData);
    })()
}