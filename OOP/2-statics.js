// How to update properites and use geter and seter

class User{
    count = 0;
    static staticCount = 0;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        User.staticCount++;
        
    }

    // Static method
    static sayHello() {
        return `Hello, World!`;
    }

    static numberOfUsers() {
        return User.staticCount;
    }
}


const newUser = new User(234, 'Mohammed', 234234);
console.log(newUser.count); // 0
console.log(newUser.staticCount);   // undefiend

// static is accessaple from the class it self only. not the object
console.log(User.count); // undefiend
console.log(User.staticCount);   // 1


// The same with methods
// console.log(newUser.sayHello());    // TypeError
console.log(User.sayHello());   // Hello, World!


console.log(User.numberOfUsers())

const newUser2 = new User(234, 'Mohammed', 234234);
const newUser3 = new User(234, 'Mohammed', 234234);
const newUser4 = new User(234, 'Mohammed', 234234);
console.log(User.numberOfUsers())
