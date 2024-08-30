function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

var userFunctionStore = {
    increment() {
        const add = () => {
            this.score++;
        }
        add();
    }
};

const user = userCreator('Mohammed', 34);
console.log(user.score)
user.increment()
console.log(user.score)