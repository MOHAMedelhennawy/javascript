function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(120);
        }, 1)
    })
}

// Using await
async function start() {
    const res = await getData();    // This await work only with async functions,
                                    // if you move it to global doesn't works
    console.log(res)
}


// Using then
function start2() {
    getData()
        .then((res) => {
            console.log(res)
        })
}

start()
