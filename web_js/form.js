

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

window.onload = function() {
    userInput.focus()
}

document.forms[0].onsubmit = function (event) {

    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
        console.log('Username is True');
    }

    if (ageInput.value !== "") {
        ageValid = true;
        console.log('age is True');
    }
    if (!userValid || !ageValid){
        event.preventDefault();
    }
}