/**
 * Converting the last exapmle of async to use callback function
 */

let pizza;

function orderPizza(callbackFunc) {
    console.log('Ordering   pizza...')
    setTimeout(() => {
        pizza = '🍕'
        callbackFunc(pizza)
    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log('Calling my friend...');
