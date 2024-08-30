// Old
function User(id, name, salary) {
    this.id = id;
    this.name = name || 'Unknown';
    this.salary = salary < 600 ? salary + 500 : salary;
}

class User2 {
        constructor(id, name, salary) {
            // Properties
            this.id = id;
            this.name = name || 'Unknown';
            this.salary = salary < 600 ? salary + 500 : salary;
            this.msg = _ => `Hello ${this.name} your salary is ${this.salary}`
        }

        // Method
        sayMsg() {
            return `Hello ${this.name} your salary is ${this.salary}`
        }
}


const mohammedObject = new User2(132, "Mohammed", 2000)

console.log(mohammedObject) // User { id: 132, name: 'Mohammed', salary: 2000 }
console.log(typeof mohammedObject)


console.log()

console.log(mohammedObject.id)
console.log(mohammedObject.name)
console.log(mohammedObject.salary)
console.log(mohammedObject.msg())   // Here properites that runs
console.log(mohammedObject.sayMsg())    // Here methods that runs
console.log(mohammedObject.msg) // Native code 
console.log(mohammedObject.sayMsg) // Native code 

console.log();
console.log(mohammedObject instanceof User)
console.log(mohammedObject.constructor === User)

console.log(mohammedObject instanceof User2)
console.log(mohammedObject.constructor === User2)


