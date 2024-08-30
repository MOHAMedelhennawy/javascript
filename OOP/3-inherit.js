#!/usr/bin/node

const { contains } = require("jquery");


// Parent Class
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    sayHello() {
        return `Hello, ${this.name}`;
    }
}


// Derived Class
class Admin extends User{
    constructor(id, name, permission) {
        super(id, name);
        this.permission = permission;
    }
}

class Hero extends Admin {
    constructor(id, name, permission, ability) {
        super(id, name, permission)
        this.ability = ability;
    }
}

const user = new User(14, 'Mohammed');
const admin = new Admin(14, 'Admin', ['Delete', 'Update', 'Insert']);
const hero = new Hero(3, 'spiderman', 1, ['Fly'])

console.log()
console.log(`User information:`);
console.log(user.id)
console.log(user.name)
console.log(user.sayHello())
// =============================
console.log()
console.log(`Admin information:`);
console.log(admin.id)
console.log(admin.name)
console.log(admin.permission)
console.log(admin.sayHello())
// =============================
console.log()
console.log(`Hero information:`);
console.log(hero.id)
console.log(hero.name)
console.log(hero.permission)
console.log(hero.ability)
console.log(hero.sayHello())
