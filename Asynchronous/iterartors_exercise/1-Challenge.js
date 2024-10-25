/**
 * Challenge 1
 * A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
 * B) Create a functional iterator for an array that returns each value of the array when called, one element at a time. 
 */


console.log('CHALLENGE 1-A')

function sumFunc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
	
}

// // Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10


console.log('==================');
function returnIterator(arr) {
  let i = 0;
  
  function nextElement() {
    // const element = arr[i];
    // i++;
    return arr[i++];
  }

  return nextElement;
}


console.log('CHALLENGE 1-B')
// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> swhould log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'
