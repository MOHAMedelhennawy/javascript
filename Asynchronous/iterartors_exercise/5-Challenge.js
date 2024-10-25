/**
 * Challenge 5
 * Create an iterator with a next method that returns an array with two elements
 * (where the first element is the index and the second is the value at that index) when .next is called. 
 */



// CHALLENGE 5

function indexIterator(arr) {
    let i = 0;
    return {
        next: _ => {
            return [i, arr[i++]]
        }
    }
   
}
  
// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
