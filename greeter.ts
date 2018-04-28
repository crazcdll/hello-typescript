class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + middleInitial + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return 'Hello,' + person.firstName + " " + person.lastName;
}

// let user = {firstName: 'zcdll', lastName: 'zhang'}
// let user = [0, 1, 2]
let user = new Student("zcdll", "M", "zhang")

document.body.innerHTML = greeter(user)