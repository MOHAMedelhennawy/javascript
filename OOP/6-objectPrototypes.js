const myObj = {
    a: 1,
    b: 2,
};


// To define new property with full control how you ned to define it
Object.defineProperty(myObj, 'c', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3
});
console.log(myObj);

// ==========   Writable    ==========

// At this point you can to assign a property. becouse `writable` is true.
// But what if you change to false?
myObj.c = 100;
console.log(myObj); // 100

// Let's try
Object.defineProperty(myObj, 'c', {
    writable: false,
});
myObj.c = 1030;
console.log(myObj); // 100, Oob! it doesn't work

// ==========   enumerable    ==========

// You can loop in the object if you like.
for (let obj in myObj) {
    console.log(obj, `:`, myObj[obj])   // a : 1, b : 2, c : 100
}

// What if you like looping in your new property?
Object.defineProperty(myObj, 'c', {
    enumerable: false,
});

console.log()
// Now let's try again.
for (let obj in myObj) {
    console.log(obj, `:`, myObj[obj])   // a : 1, b : 2
}                                       // OMG!!. Where our new property!
console.log(myObj); // Even here! .. { a: 1, b: 2 }

console.log()


Object.defineProperty(myObj, 'c', {
    enumerable: true,     // first let's get it back to be enumerable again
});

// ==========   configurable    ==========
console.log(myObj); // { a: 1, b: 2, c: 100 }
console.log(delete myObj.c) // if you try to delete is deletes successfully!
console.log(myObj); // { a: 1, b: 2 }

// But what if you don't need this happen?
// SET config => false. This to prevents you to re-define your property again
Object.defineProperty(myObj, 'c', {
    enumerable: true,     // first let's get it back to be enumerable again
    configurable: false,    // and make configurable to false to prevents us to re-define again
    value: 500
});


// Now if you try to re-deinfe the property value
Object.defineProperty(myObj, 'c', {
    value: 300,
});
console.log(myObj); // Error!!

// What about delete may it work!
console.log(delete myObj.c)
