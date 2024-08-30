let myBtn = document.getElementById('btn');
let myDiv = document.createElement('div')

myBtn.onclick = function() {
    x = prompt("Button is clicked");
    let y = document.createTextNode(x)
    myDiv.appendChild(y);
}

document.body.appendChild(myDiv)

myBtn.onmouseenter = function() {
    console.log('Clicked')
}

myBtn.onmouseleave = function() {
    console.log('UnClicked')
}