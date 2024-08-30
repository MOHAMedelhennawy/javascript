let myContainerDiv = document.createElement('div')
myContainerDiv.className = 'products'
for (let i = 0; i < 100; i++){
// let productDiv = document.createElement('div')
let H = document.createElement('h2')
let P = document.createElement('p')

let textH = document.createTextNode('Name')
let textP = document.createTextNode('description')

H.appendChild(textH)
P.appendChild(textP)

myContainerDiv.append(H)
myContainerDiv.append(P)

document.body.appendChild(myContainerDiv)
}