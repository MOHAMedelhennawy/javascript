function* creatFlow() {
    /**
     * yield: is a command that return number and pause for a while
     */
    yield 3
    yield 4
    yield 5
}

/**
 * here the generator function is return object with next methon
 * on it:   {next: function()}
 */
const returnNextElement = creatFlow();
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()
const element3 = returnNextElement.next()
const element4 = returnNextElement.next()

console.log(returnNextElement)
console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)