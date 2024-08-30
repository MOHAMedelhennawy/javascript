let myID = document.getElementById('my-div')
console.log(myID)

// Or you can use selector
let mySelector = document.getElementById('.my-div')
console.log(myID)

let myTag = document.getElementsByTagName('p')
console.log(myTag[1])
myTag[1].innerHTML = 'This tag has changed'

let myClass = document.getElementsByClassName('my-span')
console.log(myClass)

let mySelector2 = document.querySelector('.my-span')
console.log(mySelector2)

let mySelectorAll = document.querySelectorAll('.my-span')
console.log(mySelectorAll)

console.log(document.title)
console.log(document.body)
console.log(document.forms)
console.log(document.forms[0])
console.log(document.forms[0].one)
console.log(document.forms[0].one.value)
console.log(document.links)
console.log(document.links[0].href)