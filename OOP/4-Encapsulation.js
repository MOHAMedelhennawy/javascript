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


const user = new User(234, `Mohammed`, `23432 Dolar`);
console.log(user.getSalary())

console.log(obj)