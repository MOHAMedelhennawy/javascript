/**
 * How to manipulate css style with js
 */
const container = document.querySelector('#container')
console.log(container)

container.innerHTML = '<h1>Hello, World</h1>'

// method: #1
container.style.backgroundColor = '#444'
container.style.padding = '10px';
container.style.borderLeft = '7px solid #fa0'

/**
 * You can do the same thing useing this syntax:    `container.style.cssText`
 */


// method: #2
container.style.cssText = `
    background: #444;
    padding: 10px;
    border-left: 7px solid #fa0
`


// you can remove property
container.style.removeProperty('background');


// method: #3
// you can set this property again
container.style.setProperty('background', '#555');
