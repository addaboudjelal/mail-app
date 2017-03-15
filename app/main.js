var Varun = (function () {
    function Varun(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Varun;
}());
function greeter(person) {
    return "<div>Hello, "+person.firstName +" "+ person.lastName+"</div>";
}
var user = new Varun("Varun", "Girish");
document.body.innerHTML = greeter(user);
