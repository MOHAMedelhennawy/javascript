function creatFunction() {
    const num = 5;

    function sum(num1) {
        return num1 + num
    }

    
    /**
     * When you return sum, its returns the sum function definition "And" surrounding data "Backpack".
     * in this case is num.
     * 
     * "Backpack" has another names:
     * - "P.L.S.R.D" persistent lexical scope referenced data.
     * - "C.O.E.V" Close Over Enviroment Variable.
     * 
     */
    return sum
}

const newFunction = creatFunction()

console.log(newFunction(5))