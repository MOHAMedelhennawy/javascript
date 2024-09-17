function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Rainy')
        }, 1000)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('🌞')
                    break;
                case 'Cloudy':
                    resolve('🌁')
                    break;
                case 'Rainy':
                    resolve('🌧️')
                    break;
                default:
                    reject('No Icon Found');
            }
        }, 1000);
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(data) {
    console.log(`Not ${data}, Error is happen.`);
}

// Chaining
getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onError);
