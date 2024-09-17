/**
 * convert classback to promises
 * 
 * to avoids callback hell
 */


function getWeather() {
    return new Promise(function(resolve, reject) {
        resolve('Sunny')
        // reject('Cloudy')
    })
}

const promise = getWeather()
console.log(promise)    // output => pending: The first phase of 3 promise phases, and that mean that he waiting for something

promise.then(function(data) {
    console.log(data)   //  output => Sunny: The second phase and that mean that the data resolved successfully
                        //  resolve it's work with then only
})

promise.catch(function(data) {
    console.log(data)   // output => Cloud: The third phase, means that promise is done but there unexpected thing
})


// Now let's clarify this code lettle bet

function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}


getWeather().then(onSuccess, onError);