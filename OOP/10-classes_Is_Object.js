/**
 * What is the difference between class and object inheritance in JS?
 * 
 * JavaScript is indeed a prototype-based language, but it also
 * supports object-oriented programming (OOP). The class syntax
 * in JavaScript is syntactic sugar over prototypal inheritance,
 * making it easier for developers from classical OOP backgrounds
 * to use. So, JavaScript can be considered an OOP language,
 * but it uses prototypes instead of classes in the traditional sense.
 * 
 * Does this make a difference?
 * 
 * Let's say you build a class like this:
 */

class Me {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        reutrn `${this.name} is talking now`;
    }
}

// And my son who inherits from me
class Son extends Me{
    constructor(name, age) {
        super(name, age);
    }
}

/**
 * When you build a class like that in other languages you can't change it
 * letter 'I mean at a run time', because it's compiled once in the compilation phase.
 * 
 * ``BUT``, in JS you can change it at runtime. Why? Because it is an object under the hood.
 * In JavaScript, everything (including functions and classes) is an object.
 * 
 * The class keyword in JavaScript creates a constructor function,
 * and methods defined in a class are added to the prototype of the
 * objects created by that constructor. It is not a "class" in the
 * traditional sense but is syntactically similar to make it more familiar
 * to those who know class-based OOP languages.
 * 
 */

const me = {
    name: "",
    age: 0,
    talk() {
        return `${this.name} is talking now`;
    }
};

// Object representing the son that inherits from Me
const son = Object.create(me);
son.name = "";
son.age = 0;
console.log(son)
/**
 * There is another way to inherit but it's not recommended
 */

const grandson = {};
grandson.__proto__ = son;
grandson.name = 'Mohammed'
grandson.age = 1;
console.log(grandson)
console.log(grandson.talk())
/**
 * As you see you can add properties at run time! ('line 49, 50')
 */

/**
 * Or methods like that:
 */

son.cry = function() {
    return `${this.name} crying now :)`;
}

console.log(son)

/**
 * Don't forget you can do the same thing in classes using prototypes. because
 * classes are objects.
 */

const mySon = new Son('Yassen', 2)
Son.prototype.cry = function() {
    return `${this.name} crying now :)`;
}

console.log(mySon.cry())