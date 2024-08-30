let mySpan = document.querySelector('.js');

console.log(mySpan)
console.log(mySpan.innerHTML)
console.log(mySpan.textContent)

mySpan.innerHTML = "This is HTML <span>File</span>"
console.log(mySpan.innerHTML)


console.log(document.images)
document.images[0].src = 'https://google.com'
document.images[0].alt = 'Google'
document.images[0].title = 'Google'
document.images[0].id = 'img'

let myLink = document.querySelector('.link')
console.log(myLink.getAttribute("class"))
console.log(myLink.getAttribute('href'))

myLink.setAttribute('href', 'https://twitter.com')