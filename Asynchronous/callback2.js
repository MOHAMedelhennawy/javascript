// V1
let weather = getWeather();

function getWeather(){
    setTimeout(() => {
        weather = 'Sunny';
        console.log(weather);
    }, 2000);
}
// it's look like fine but there getWeather do two function

// V2
function weatherReceived(data) {
    let weather = data;
    console.log(weather);
}

function getWeather(){
    setTimeout(() => {
        weatherReceived('Sunny')
    }, 2000);
}

getWeather()

// It's fine too, but each function can't work separately. to execute getWeather
// you should to execute weatherReceived. Solution is to convert to callback function


// V3 : Uinsg callback function
function weatherReceived(data) {
    let weather = data;
    console.log(weather);
}

function getWeather(callback) {
    setTimeout(() => {
        callback('Sunny');
    }, 2000)
}

getWeather(weatherReceived);
