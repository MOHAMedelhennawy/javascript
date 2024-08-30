// The problem

// If you need to build 100 object with small different, Like:
const me = {
    name: "Mohammed",
    talk: () => `${this.name}, is talking`,
}

// Ok it's fine, What about if you need to build another one?
// Let's do it

const borther = {
    name: "Ahmed",
    talk: () => `${this.name}, is talking`,
}

// What if you need to create 100 object more?, here is the problem. 'DRY'
// The solution is `factory`, is to build function that take name as argument and
// return the new object

function personFactory(name) {
    return {
        talk() {
            return `${name}, is talking now`
        }
    }
}

const me2 = personFactory('Mohammed');

console.log(me2.talk());

/**
 * Benefits:
 * -    Easy
 * -    no duplicated
 * -    data privacy
 */