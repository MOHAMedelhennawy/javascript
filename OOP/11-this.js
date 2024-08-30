function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

var userFunctionStore = {
    increment() {
        function add() {
            this.score++;
        }
        add();
    }
};

const user = userCreator('Mohammed', 34);

console.log(user.score);   // 34
user.increment();          // You expect that score will increase by 1, but let's see what happens
console.log(user.score);   // 34!.. Why didn't it increase?

// /**
//  * Actually, this happens because `this` in the `add` function doesn't refer to the `user` object. 
//  * By default, `this` inside a regular function refers to the global object (or `undefined` in strict mode), 
//  * not the `user` object where `increment` was called. 
//  */


// // How to fix this?

// /**
//  * To fix the issue with `this`, we create a variable `that` to store the reference to `this` (which points to the `user` object).
//  * Inside the `add` function, we use `that` instead of `this` because `this` inside a regular function refers to the global object
//  * (or `undefined` in strict mode) when the function is called. By using `that`, we ensure that we are modifying the correct object's `score` property.
//  */


// var userFunctionStore = {
//     increment() {
//         const that = this; // Store the reference to `this` in `that` to use inside the `add` function
//         function add() {
//             that.score++;  // Use `that` to correctly reference the `user` object
//         }
//         add();
//     }
// };


// // Or
// var userFunctionStore = {
//     increment() {
//         function add() {
//             this.score++;
//         }
//         add.call(this);
//     }
// };