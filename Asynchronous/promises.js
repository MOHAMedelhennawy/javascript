function getWeather() {
    return new Promise(function(resolve, reject) {
        resolve('Sunny');
        // reject('Sunny')
    })
}

// #1
// const promise = getWeather();
getWeather().then((data) => {
    console.log(data)
}, (data) => {
    console.log(`Not ${data}, Error is happen.`);
})


// You can do the same thing but in more clear code

// #2
function onSuccess(data) {
    console.log(data);
}

function onError(data) {
    console.log(`Not ${data}, Error is happen.`);
}

getWeather().then(onSuccess, onError);
