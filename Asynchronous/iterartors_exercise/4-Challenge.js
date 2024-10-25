/**
 * Challenge 4
 * Create an iterator with a next method that returns each value of a set when .next is called 
 */

// CHALLENGE 4

function setIterator(set) {
    let i = 0;
    const arr = Array.from(set);

    return {
            next: () => {
            return arr[i++];
        }
    }
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'