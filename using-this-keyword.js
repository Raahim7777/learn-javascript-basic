class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const person = new Person();

person.setName("John");

console.log(person.getName());

