var person = {firstName: "Colin", lastName: "But", age: 50, eyeColor: "Brown"};

var student = {
  firstName: "Colin",
  lastName: "But",
  age: 50,
  eyeColor: "Brown"
};

var employee = {
  firstName: "Colin",
  lastName: "But",
  age: 50,
  eyeColor: "Brown",
  fullName: function() {
    return firstName + " " + lastName;
  }
}

console.log(person.firstName + " " + person.lastName);
console.log(student["firstName"]);
console.log(employee.fullName());
