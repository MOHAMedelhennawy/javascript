/**
 * How to access siblings and parent?:
 *  - `previousElementSibling`
 *  - `nextElementSibling`
 *  - `nextSibling`
 *  - `previousSibling`
 */

let element = document.querySelector('.two')
console.log('The element', element)
console.log('previous element sibling', element.previousElementSibling)
console.log('next element sibling', element.nextElementSibling)
element.nextElementSibling.innerText = 'inner text is hacked'
console.log('next element', element.nextSibling)


// element.nextElementSibling.remove()
