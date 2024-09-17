function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(55);
        }, 1)
    })
}


// Using the .then
function start() {
    const data = getData();
    data
        .then(result => {
            console.log(result);
        })
}

// Using await
/**
 * First, you should to know that await dosen't work with a sync
 * functions, it's only work inside async functions
 */

async function newStart() {
    const data = await getData();
    console.log(data)
}

newStart()