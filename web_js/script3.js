console.log(document.getElementsByTagName('p')[0].attributes)

let myP = document.getElementsByTagName('p')[0];
if (myP.hasAttribute('data-src')){
    console.log('is Found')
    if (myP.getAttribute('data-src') === ""){
        myP.removeAttribute('data-src');
    } else {
        myP.setAttribute('data-src', 'new_value');
    }
} else {
    console.log('Not found');
}
console.log(document.getElementsByTagName('p')[0].attributes)


let myDiv = document.getElementsByTagName('div')[0]
console.log(myDiv)

if (myDiv.hasAttributes()) {
    console.log("Div has attributes");
} else {
    console.log("Div has no attriubte");
}