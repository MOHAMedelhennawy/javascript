async function getWeather() {
    const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
    const res = await data.json();
    console.log(res.properties.periods[1].detailedForecast)
}

// async/await
//     VS
// async/then
function getWeather2() {
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(data => data.json())
        .then(res => {
            console.log(res.properties.periods[1].detailedForecast)
        })
}
getWeather2()