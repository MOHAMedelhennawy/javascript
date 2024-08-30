// How to update properites and use geter and seter

class User{
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    updateName(newName) {
        this.name = newName;
    }
}


const ahmedUser = new User(35, 'Ahmed', 2400);

console.log(ahmedUser.name);
ahmedUser.updateName('AhmedElhennawy');
console.log(ahmedUser.name);


let strOne = 'Mohammed';
let strTwo = new String('Mohammed');