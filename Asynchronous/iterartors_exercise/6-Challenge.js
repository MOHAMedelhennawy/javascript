/**
 * Challenge 6
 * Create an iterator that returns each word from a string of words on the call of its .next method
 * (hint: use regex!)
 * Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator! 
 */


// CHALLENGE 6

function Words(string) {
    this.str = string;
}
  
  Words.prototype[Symbol.iterator] = function() {
    // YOUR CODE HERE
  
}
  
  // Uncomment the lines below to test your work
  // const helloWorld = new Words('Hello World');
  // for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
  