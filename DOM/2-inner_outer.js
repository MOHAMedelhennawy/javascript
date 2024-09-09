/**
 * - innerHTML
 * - outerHTML
 * - innerText
 * - outerText
 * - innerContent
 * - outerContent
 */
const container = document.getElementsByClassName('container')[0];

console.log(container)
console.log(container.outerHTML)
console.log(container.innerHTML)
container.outerHTML = '<p>Hello</p>'
console.log(container.outerHTML)
console.log(container.innerHTML)