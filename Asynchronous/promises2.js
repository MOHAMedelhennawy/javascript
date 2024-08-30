function func1() {
    console.log('Function 1')
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('404');
        }, 100)
    })
}

function func2() {
    console.log('Function 2')
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Every Thing is Goooood!');
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(data) {
    console.log(`Error: ${data}`);
}

function finalyAtTheEnd() {
    console.log('FINALLY WE BE DONE YO')
}

func2()
    .then(func1)
    .then(onSuccess)
    .catch(onError)
    .finally(finalyAtTheEnd)