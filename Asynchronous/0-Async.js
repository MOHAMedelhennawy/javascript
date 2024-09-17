/** Synchronous programming
 * In synchronous programming, each line of code waits for the previous one to finish.
 * This means the code executes in a step-by-step, sequential manner.
 */

let pizza;

function orderPizza() {
    console.log(`Ordering pizza...`);  // @1
    pizza = '🍕';  // @2
    console.log(`${pizza} is ordered`);  // @3
}

orderPizza();
console.log(`Eat ${pizza}\n`);  // @4    output: Eat 🍕

/** ============================================== */

/** 
 * Asynchronous programming
 * 
 * Imagine you're ordering a pizza. You don't just sit and wait for it to be ready, 
 * right? While waiting, you can do other things, like calling a friend.
 * In asynchronous programming, the code continues running without waiting for tasks 
 * (like the pizza being ready) to finish, allowing other operations to occur in the meantime.
 */
pizza = undefined;

function orderPizzaAgain() {
    console.log(`Ordering second pizza...`);  // @1
    setTimeout(() => {
        pizza = '🍕';  // @4
        console.log(`${pizza} is ready!`);  // @5   output: 🍕 is ready!
    }, 2000);  // Simulate pizza preparation time
    console.log(`Pizza has been ordered.`);  // @2
}

orderPizzaAgain();
console.log(`Eat ${pizza}`);  // @3    output: Eat undefined

/**
 * Why is it undefined? 
 * The pizza isn't ready yet! The setTimeout delays the pizza being ready by 2 seconds, 
 * but the rest of the code continues executing, leading to the 'undefined' output.
 * You need to wait for the pizza.
 */

// You can call your friend while waiting for the pizza to be ready.

console.log('Calling my friend...');
setTimeout(() => {
    console.log(`Eat ${pizza}`);  //  output: Eat 🍕
}, 2000);  // Same delay as the pizza
