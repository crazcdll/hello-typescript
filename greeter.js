class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
}
function greeter(person) {
    return 'Hello,' + person.firstName + " " + person.lastName;
}
// let user = {firstName: 'zcdll', lastName: 'zhang'}
// let user = [0, 1, 2]
let user = new Student("zcdll", "M", "zhang");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map