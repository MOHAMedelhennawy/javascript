/**
 * Challenge 3
 * Write code to iterate through an entire array using your nextIterator and sum the values. 
 */


// CHALLENGE 3
function nextIterator(arr) {
    let i = 0;
    return {
        next: () => {
            return arr[i++];
        }
    }
}

function sumArray(arr) {
    let sum = 0;
    const iterator = nextIterator(arr);
    let element = iterator.next()

    while(element) {
        sum += element
        element = iterator.next()
    }

    return sum
}
// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10
