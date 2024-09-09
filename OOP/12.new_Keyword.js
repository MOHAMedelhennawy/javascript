function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

var userFunctionStore = {
    increment() {
        const add = () => {
            this.score++;
        }
        add();
    }
};

const user = userCreator('Mohammed', 34);
console.log(user.score); // 34
user.increment();
console.log(user.score); // 35

/**
 * In the previous version of the function, everything was done manually.
 * Is there another way to achieve the same result automatically?
 */

/**
 * Let's first explain what a function really is.
 * A function in JavaScript is actually two things: a Function and an Object.
 * When you use parentheses `()`, you're accessing the function part. For example: `userCreator()`.
 * When you use a dot `.` notation, you're accessing the object part. For example: `userCreator.property`.
 * 
 * Inside every function object, there is a property called `prototype`.
 * This `prototype` is an empty object by default. When you create a new object that inherits from the function,
 * it actually inherits from this `prototype` object.
 */

function userCreator2(name, score) {
    this.name = name;
    this.score = score;

    // return this      // The constructor implicitly returns `this` here
}

/**
 * So, based on that, when new objects inherit from the `prototype` property,
 * if we need to define any new methods, we should define them on this `prototype`.
 */

userCreator2.prototype.increment = function() {
    this.score++;
};

// But what happens if you do this instead?
userCreator2.increment = function() {
    this.score++;
}; // Notice that here, you're adding the method to the `userCreator2` object itself,
   // not to the `userCreator2.prototype` object. This can cause bugs because 
   // `increment` won't be inherited by instances of `userCreator2`.

const user2 = new userCreator2('Ahmed', 50);
/**
 * Without the new keyword, if you called User('Ahmed', 50),
 * this would refer to the global object (in non-strict mode)
 * or be undefined (in strict mode), and no new object would be created.
 */

/**
 * Using the `new` keyword in this line will return an object structured like this:
 * {
 *      name: 'Ahmed',
 *      score: 50,
 *      __proto__: userCreator2.prototype
 * }
 * 
 * Notice that `__proto__` is pointing to `userCreator2.prototype`, which is where inheritance comes from.
 * So when you try to use the `increment` method, JavaScript first looks for it directly on `user2`.
 * If it doesn't find it there, it looks at what `__proto__` points to, which is `userCreator2.prototype`.
 */

user2.increment();
console.log(user2.score); // 51


console.log(user2.__proto__ === userCreator2.prototype)

/**
 * Summary:
 * The `new` keyword simplifies the process of creating new objects by handling several routine tasks for us.
 * Here’s what the `new` keyword does:
 * - Automatically binds `this` to the newly created object inside the constructor function.
 * - Links the `prototype` property of the constructor function to the `__proto__` of the newly created object.
 * - Implicitly returns `this`, allowing the new object to be created and returned.
 */
