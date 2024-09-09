let greetingClass = document.getElementsByClassName('greetingClass')  // The output will be array
let greetingId = document.getElementById('greetingId'); // The ouput will be the first id, because the id should always unique
let allGreetings = document.getElementsByTagName('h1');  // Array of all h1

/**
 * Or you can instead use `querySelector()`, but it's retrieve the first element only.
 */

let greetingClass2 = document.querySelector('.greetingClass')  // get the first greetingClass class
let greetingId2 = document.querySelector('#greetingId')  // get the first greetingId id
let allGreetings2 = document.querySelector('h1')    // get the first h1

/**
 * to retrieve all elements you should use `querySelectorAll()`, here you can return all elemnts.
 * even if you use id
 */

let greetingClass3 = document.querySelectorAll('.greetingClass')  // get all classes
let greetingId3 = document.querySelectorAll('#greetingId')  // get all id
let allGreetings3 = document.querySelectorAll('h1') // get all h1

let secondGreeting = greetingClass[1];
secondGreeting.innerText = 'Hello, again!'
secondGreeting.style.color = 'red'
greetingId.style.color = 'blue'

console.log(greetingClass3)  // len: 3
console.log(greetingId3) //  len: 1
console.log(allGreetings3)   // len: 6

// if you need to access the body
let body = document.body;
body.style.background = '#444'      // change body color
console.log(body)

// access bage title
let title = document.title = 'Javascript tutorial';
console.log(title)


// access images if exists
let images = document.images;
let alt = images[0].alt
