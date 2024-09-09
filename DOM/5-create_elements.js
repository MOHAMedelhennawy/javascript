/**
 * How to create html file with only js
 * 
 * -    createElement
 * -    createTextNode
 * -    appendChild
 */


let container = document.createElement('div');
let head = document.createElement('h1');
let image = document.createElement('img');

let contentText = 'Hello, World';
let headContent = document.createTextNode(contentText);

image.src = 'jquery.jpg'
image.style.width = '300px'
head.appendChild(headContent)
container.appendChild(head)
container.appendChild(image)

document.body.appendChild(container)
console.log(head.innerText)
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.width = '50%'
container.style.background = '#444'
container.style.color = 'white'
container.style.padding = '50px'
container.style.margin = 'auto'