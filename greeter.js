var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello,' + person.firstName + " " + person.lastName;
}
// let user = {firstName: 'zcdll', lastName: 'zhang'}
// let user = [0, 1, 2]
var user = new Student("zcdll", "M", "zhang");
document.body.innerHTML = greeter(user);
