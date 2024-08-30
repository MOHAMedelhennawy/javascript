let myDiv = document.createElement("div");
myDiv.className = 'New_class';
console.log(myDiv);


let myAttr = document.createAttribute('data-custom');
myDiv.setAttributeNode(myAttr); // 1
myDiv.setAttribute('data-test', 'testing'); //2
console.log(myDiv)


// Append text to element
let myText = document.createTextNode('This text create by JS');
myDiv.appendChild(myText)
console.log(myDiv)

// Append element to body
document.body.appendChild(myDiv)

let myComment = document.createComment("This is div")
myDiv.appendChild(myComment)