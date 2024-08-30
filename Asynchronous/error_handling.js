function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout( _ => {
            reject('Something ment wrong!');
            // resolve('Here is you data!')
        }, 1);
    })
}

function onFailure(error) {
    console.log(`Error: ${error}`)
}

async function start() {
    try{
        const res = await getData()
        console.log(`Success: ${res}`);
    } catch(error) {
        onFailure(error)
    }
}

async function start2() {
    const res = await getData()
        .catch(error => {
            console.log(`Error: ${error}`)
        })

        console.log(res)
}

start()