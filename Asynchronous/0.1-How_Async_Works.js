// Set display function in global memory
function display(data) {
    console.log(data)
}

// Set printHello function in global memory
function printHello() {
    console.log('Hello');
}

// Set printHello2 function in global memory
function printHello2() {
    console.log('Hello2');
}

// Set blockFor1Sec function in global memory
function blockFor1Sec() {
    for (let i = 0; i < 10000; i++) i = i;
}

/**
 * Send to timer browser feature and then the browser store this function 
 * printHello after 0ms in call queue.
 */
setTimeout(printHello, 0);

/**
 * Send to timer browser feature and then the browser store this function 
 * printHello2 after 0ms in call queue.
 */
setTimeout(printHello2, 1000);

/**
 * - set data in global memroy
 * 
 * - The fetch sends a request using XHR (xmlHTTPRequest) or the Fetch API.
 *  and return empty promise object with two properties:
 * {
 * `value`: that value of data will fetches,
 * `onfulfelment`: that array of function that will auto-triggered
 * }
 * 
 * - It returns a promise that is initially in the "pending" state.
 * - The promise will resolve when the data is retrieved, and the `.then()` callback is placed in the Job Queue.
 */

const data = fetch('https://api.chucknorris.io/jokes/random')

/**
 * push to data.onfulfelment array those two function, and then the browser
 * push it in job queue
 */
data.then(d => d.json())
    .then(display)


/**
 * wait for 1 sec
 */
blockFor1Sec()


console.log('Me First!')

/**
 * "Me First!" (from the synchronous console.log)
 * "Hello" (from the setTimeout with 0 ms delay)
 * Fetched data (after the promise is resolved and parsed in the Job Queue)
 * "Hello2" (from the setTimeout with a 1-second delay)
 * 
 * Explanation of ouput:
 *  queue is waiting for call stack to be fully empty to start to work.
 * once that global memory is removed from call stack, the event loop start to get
 * the function from the queue.
 * 
 * in this example it will start with call queue because the job queue it's still empty
 * but in normal it should to start with job queue if is function there.
 * 
 * When the event loop finishes executing the synchronous code, it checks the Callback Queue.
 * Since the `fetch` request hasn't resolved yet, the job queue is still waiting for data.
 * Therefore, `printHello` is executed from the Callback Queue first.

 * however, event loop will start with calling call queue because job queue is still empty. and
 * the printHello function will be executed.
 * 
 * Once the data is fetched, the first `.then(d => d.json())` is placed in the Job Queue.
 * After that, the `.then(display)` is queued, ensuring that the data is parsed before being displayed.
 * 
 * the event loop is send the first function `(d => d.json())` to call stack to jsonify the data,
 * once the call stack is empty the event loop will send the second function from
 * jop queue to call stack. while the timer of printHello2 function is stillcounting.
 * however, the display function will be executed.
 * 
 * finally, once the timer of printHello2 function is done. event loop is send the
 * function from call queue to call stack and then the function will be executed
 */
