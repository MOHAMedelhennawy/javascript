const queryAll = document.querySelectorAll('.heading')
const queryAll2 = document.querySelectorAll('.heading')
const getAll = document.getElementsByClassName('heading')
const getAll2 = document.getElementsByClassName('heading')


console.log(queryAll)   // NodeList []
console.log(getAll) // HTMLCollection {}


console.log(queryAll === queryAll2) // flase
console.log(getAll === getAll2) // true