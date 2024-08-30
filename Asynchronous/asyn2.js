// Using sync programming

let pizza;

function orderPizza() {
    console.log(`Order pizza`);  // @1
    pizza = '🍕';  // @2
    console.log('Pizza is ordered');  // @3
}

orderPizza();
console.log(`Eat ${pizza}\n`);  // @4


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