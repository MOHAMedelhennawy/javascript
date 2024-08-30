class Student{
    #year;
  
    constructor(name, year) {
        this.name = year;
        this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }

  const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

console.log(summers.#year); // SyntaxError
