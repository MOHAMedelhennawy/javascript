function myFunction() {
    console.log('Hello')
}

const leftClick = document.getElementById('left');

// Attach a function to the `onclick` property using the `element.onevent` method
leftClick.onclick = () => {
    console.log('مرحبا');
};

/**
 * What is the difference between `addEventListener` and `element.onevent`?
 *
 * `element.onevent` (like `element.onclick`) replaces any previously attached event handler. 
 * So if you assign a new function to `leftClick.onclick`, it overwrites the previous one.
 *
 * In the example below, each new assignment to `onclick` replaces the previous one.
 *
 * Which one do you think will be executed? 
 * 1 - all handlers        2 - only the first one      3 - only the last one 👌
 */

leftClick.onclick = () => {
    console.log('Benvenuto');
};

leftClick.onclick = () => {
    console.log('환영');
};

// Output: 환영
// Explanation: Since each assignment to `onclick` overwrites the previous one,
// only the last function (`console.log('환영')`) will be executed when the element is clicked.

/**
 * Now, let's use `addEventListener` to attach event handlers.
 * Unlike `element.onevent`, `addEventListener` allows multiple handlers to be attached
 * to the same event type without replacing the previous ones.
 *
 * Which one do you think will be executed? 
 * 1 - all handlers 👌        2 - only the first one       3 - only the second one
 */

leftClick.addEventListener('click', function() {
    console.log('Benvenuto');
});

leftClick.addEventListener('click', function() {
    console.log('مرحبا');
});

// Output: Benvenuto مرحبا
// Explanation: Both event handlers are executed because `addEventListener` allows
// multiple functions to be attached to the same event, so both messages will be logged.

/**
 * Plus, `addEventListener` avoids errors that could happen with `element.onevent`:
 * - It does not overwrite previous handlers.
 * - It allows attaching multiple event handlers for the same event, improving flexibility.
 */
