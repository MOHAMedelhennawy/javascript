class User {
    talk() {
        return `Talking`
    }
}

function User2() {}

User3 = {}

const user = new User()
const user2 = new User2()
const user3 = Object.create(User3)  // inheritance in objects
// Object.setPrototypeOf(obj, another obj)

console.log(typeof User)    // Funtion
console.log(typeof User2)    // Funtion
console.log(typeof User3)   // Object

console.log()
console.log(typeof user)    // Object
console.log(typeof user2)    // Object
console.log(typeof user3)    // Object

console.log(user instanceof User)    // true
console.log(User instanceof User)    // false
console.log(user2 instanceof User2)    // true
console.log(User2 instanceof User2)    // true
console.log(user instanceof Object)    // true
console.log(user2 instanceof Object)    // true
console.log(user3 instanceof Object)    // true
console.log(User instanceof Object)    // true
console.log(User2 instanceof Object)    // true
console.log(User3 instanceof Object)    // true

// console.log(user3 instanceof User3)    // TypeError

console.log(User.prototype === user.__proto__)  // true

/*  
==================================================================
==================================================================
*/

console.log(user.talk())    // Talking

// user.prototype.talk = function() {return `New talking`}  // Error
User.prototype.talk = function() {return `New talking`}
console.log(user.talk())    // New talking


const userr = new User()

user.__proto__.talk = function() {return `user is fucking talking`}
console.log(user.talk() )   // user is fucking talking
console.log(userr.talk())   // user is fucking talking
