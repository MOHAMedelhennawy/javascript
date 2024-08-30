let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));


// Without promise
function compareFiles(fileA, fileB, callback) {
    readTextFile(fileA, contentA => {
        readTextFile(fileB, contentB => {
            callback(contentA == contentB);
        });
    });
}


// With promise
function textFile(filename) {
        return new Promise(resolve => {
        readTextFile(filename, text => resolve(text));
    });
}
textFile("plans.txt").then(console.log);