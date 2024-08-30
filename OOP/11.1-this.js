function talk(lang) {
    if (lang === 'en') {
        return `I am ${this.name}`
    } else if (lang === 'it') {
        return `I sono ${this.name}`
    }
}

const user1 = { 
    name: 'Mohammed',
    talk
}

const user2 = { 
    name: 'Khaled',
    talk
}

// console.log(talk() === window.talk())   // true, don't worry. it's work in the browser.
// console.log(talk === window.talk)   // true
console.log(user1.talk('it')) //  I sono Mohammed
console.log(user2.talk('it')) //  I sono Khaled

// OR you can do simply that
const user3 = {
    name: 'Ahmed',
}

console.log(talk.bind(user3, 'en')()) //  I am Ahmed
