/**
 * Challenge 2
 * Create an iterator with a next method that returns each value of the array when .next is called. 
 */

// CHALLENGE 2

function nextIterator(arr) {
    let i = 0;
    return {
        next: () => {
            return arr[i++];
        }
    }
  }

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3