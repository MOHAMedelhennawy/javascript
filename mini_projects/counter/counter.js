
const number = document.querySelector('.number')
const increment = document.querySelector('.increment')
const reset = document.querySelector('.reset')
const decrement = document.querySelector('.decrement')

increment.addEventListener('click', () => {
    let currectNumber = Number(number.innerText)
    number.innerText = String(++currectNumber)
})

decrement.addEventListener('click', () => {
    let currectNumber = Number(number.innerText)
    if (currectNumber != 0) {
        number.innerText = String(--currectNumber)
    }
})

reset.addEventListener('click', () => {
    number.innerText = '0';
})