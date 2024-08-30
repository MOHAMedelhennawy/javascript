#!/usr/bin/node
/**
 * Converting to use callback function
 */

// Using async programming
pizza = undefined;

function orderPizzaAgain() {
    console.log(`Order second pizza`);  // @1
    setTimeout(() => {
        pizza = '🍕';  // @4
        console.log(`${pizza} is ready!`);  // @5
    }, 2000);
    console.log(`Pizza is ordered`);  // @2
}

orderPizzaAgain()
console.log(`Eat ${pizza}`);  // @3

// ===================== Using callback =========================
function orderPizza(callback) {
    setTimeout(() => {
        const pizza = '🍕';
        callback(pizza);
    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`Eat ${pizza}`);
}

orderPizza(pizzaReady);
console.log(`Call mohanad`);