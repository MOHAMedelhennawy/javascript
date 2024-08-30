function User(name, score) {

    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };

    return newUser;
}

const user = User('Mohammed', 33); 
console.log(user);
user.increment();
console.log(user);


/**
 * There two problem with this approach:
 * 1-   This means that if you create multiple users,
 *      each user will have its own copy of the increment function,
 *      leading to a higher memory usage because the same function logic is duplicated for each user.
 *
 * 2-   If you need to add a new feature you have to add to each user
 * 
 */

function createUser(name, score) {
    const newUser = Object.create(userFunctionScore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionScore = {
    increment: function(){this.score++},
    login: () => {console.log('Logged in');},
};

const user1 = createUser('Ahmed', 32);
const user2 = createUser('Mona', 341);

user1.increment();

/**
 * What is the solution?
 * - The solution is to separate the function using the prototype chain.
 * 
 * Explanation of how the prototype chain works:
 * 
 * When you create an object that inherits from another object, like in the example below,
 * the `user` object inherits from the `userFunctionStore` object. So, when you try to access 
 * the `increment` method directly from `user`, it first checks if the method exists on the `user` object itself.
 * If it doesn't find it there, it continues to look up the prototype chain, checking the parent object.
 * If the method is not found in the parent, it checks the grandparent, and so on, until it either finds the method
 * or reaches the end of the chain.
 * 
 * If the method is not found anywhere in the prototype chain, a TypeError is raised.
 */