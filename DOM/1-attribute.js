/**
 * How to get, set attributes:
 *      - hasAttribute
 *      - hasAttributes
 *      - setAttribute
 *      - getAttribute
 *      - removeAttribute
 */

let greeting = document.querySelector('.greeting')

console.log(greeting)
console.log(typeof greeting)
console.log(greeting.__proto__)
console.log(greeting.className)
console.log(greeting.style)


greeting.className = 'New-Greeting'
console.log(greeting)
console.log(greeting.attributes)
console.log(greeting.attributes[0])
console.log(greeting.attributes[1])
console.log(greeting.className)

console.log(greeting.hasAttribute('id')) // false
console.log(greeting.hasAttribute('class')) // true

console.log(greeting.hasAttributes()) // true

greeting.setAttribute('title', 'Aliens greeting')
greeting.setAttribute('id', 'greetingID')
console.log(greeting)

greeting.removeAttribute('title')
console.log(greeting)