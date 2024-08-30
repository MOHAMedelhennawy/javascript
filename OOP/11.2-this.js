var score = 0;

/**
 * Case 1: using arrow function. in this example this is pointing to window
 *         because Arrow functions inherit this from their surrounding lexical
 *         context, which is where the function is defined.
 */


// **Warning**: you cannot access the window object in Node.js. So, go to the browser :)

/** 
 * **WARNING2**: you should to define global score using var, because var is related to
 *               window object, while let and const not
 */
var userFunctionStore = {
    score: 1,
    increment: () => {
        console.log(this === window)    // true
        this.score++;   // Here you access window object
    }
};

console.log(score)  // 0
userFunctionStore.increment()
console.log(score)  // 1


/**
 * Case 2: using method, in this case this in pointing to what ever is in the left side of the call
 */
const userFunctionStore2 = {
    score: 2,
    increment() {
        this.score++;
    }
}

userFunctionStore2.increment()  // here you access userFunctionStore2 object
console.log(userFunctionStore2.score)

/**
 * Let's create new object and inherit from userFunctionStore2
 */

const userFunctionStore3 = Object.create(userFunctionStore2);
userFunctionStore3.score = 5;
userFunctionStore3.increment();
console.log(userFunctionStore3.score)   // 6


/**
 * Case 3: regular function inside method
 */

const userFunctionStore4 = {
    score: 10,
    increment() {
        function add() {
            console.log(this === window)    // true
            this.score++;
        }
        add()
    }
}

console.log('Global: ', score)  // 0
console.log('userFunctionStore4: ', userFunctionStore4.score)   // 10
userFunctionStore4.increment()
console.log('Global: ', score)  // 1
console.log('userFunctionStore4: ', userFunctionStore4.score)   // 10

/**
 * If you inseste to use the same you then you should use one method of those:
 *      - call          - apply         - bind
 */
userFunctionStore4 = {
    score: 10,
    increment() {
        function add() {
            console.log(this === window)    // flase, because your pass `this` value, that in this case is userFunctionStore4
            this.score++;
        }
        add.call(this);
    }
}
console.log('Global: ', score)  // 0
console.log('userFunctionStore4: ', userFunctionStore4.score)   // 10
userFunctionStore4.increment()
console.log('Global: ', score)  // 0
console.log('userFunctionStore4: ', userFunctionStore4.score)   // 11

/**
 * Case 4: arrow function inside method. The arrow function add does
 *         not have its own this context. Instead, it inherits this from the
 *         surrounding scope. In this example, this means `this` refers to
 *         the window object.
 */

const userFunctionStore5 = {
    score: 100,
    increment() {
        const add = () => {
            this.score++;
        }
        add()
    }
}

console.log(userFunctionStore5.score)   // 100
userFunctionStore5.increment()
console.log(userFunctionStore5.score)   // 101