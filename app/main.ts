interface Person{
  firstName: string;
  lastName: string;
}
class Varun {
  fullName: string;
  constructor(public firstName, public lastName){
    this.fullName = firstName + lastName;
  }
}

function greeter(person:Person){
  return '<div>"Hello, "+person.firstName +" "+ person.lastName</div>';
}

var user = new Varun("Varun", "Girish");

document.body.innerHTML = greeter(user);
