class User {
    // Private property
    #salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return parseInt(this.#salary);
    }
}

class Admin extends User {
    constructor(id, name, salary) {
        super(id, name, salary)
    }
}

const admin = new Admin(3, 'Ah', 234);
console.log(admin.getSalary())


User.prototype.sayHello = function () {
    return `Hello, ${this.name}`
}

console.log(admin.sayHello())


String.prototype.addDotBeforeAndAfter = function(val) {
    return `..${this}..`
}

const strTest = 'Elhennawy';
console.log(strTest.addDotBeforeAndAfter());