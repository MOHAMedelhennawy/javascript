function* creatFlow() {
    const num = 10;
    const newNum = yield num;   // here it's will return 10, and then when you call next method again it replace
                                // it with whatever argument you passing
    
    yield 5 + newNum        // because when you pass 2 in the second call it replace 'yield num' with `2` in line 3
    yield 3;    // pause and return 3
}

/**
 * Here he is immedietly return 'object' with next 'method' and sorrounding data in this casae
 * is num and newNum, and the position of code 'line' its stored in hidden property called '[[gereratorLocation]]
 */
const returnNextElement = creatFlow();
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next(2)  // 7
const element3 = returnNextElement.next()   // 3

console.log(element1)
console.log(element2)
console.log(element3)


/**
 * i asked chatGPT: where the execution context is stored when calling generator function?
 * 
 * answer:
 * 
 * When a generator function is called in JavaScript, it returns a generator object,
 * which is an instance of the Generator class. The execution context of the generator
 * function is not fully executed at once but is stored internally in this generator object.
 * This allows the function to be paused and resumed, maintaining its state across multiple invocations.
 * Here’s how it works:
 * 
 * - Execution Context Storage: When a generator function is called,
 *   an execution context is created but not run to completion. Instead,
 *   the generator's state (its local variables, the current value of the
 *   function’s execution, and the position of the control flow) is saved
 *   internally within the generator object.
 *
 * - Paused State: Every time you call .next() on the generator object,
 *   the function resumes from where it was last paused, using the stored
 *   execution context. The generator function runs until it encounters the
 *   next yield statement or completes.
 * 
 * - Resuming: After yielding, the generator function’s state
 *   (its local variables, current execution position, and other contextual information)
 *   is stored again so that the function can be resumed later with another .next() call.
 * 
 * 
 * Essentially, the execution context of a generator function
 * is stored in the generator object itself, allowing it to
 * preserve the function’s state between pauses and resumes.
 */