function startThen() {
    const data = fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    data.then(result => result.json())
        .then(weather => console.log(weather.properties.periods[3].detailedForecast))
}

async function startAwait() {

    const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
    const weather = await data.json();

    console.log(weather.properties.periods[3].detailedForecast)
}

startAwait()


console.log(startAwait)