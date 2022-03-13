const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName, lastName;
  this.getFullName = function () {
    return [firstName, lastName].join(" ");
  };
  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
  this.setFirstName = function (name) {
    firstName = name;
  };
  this.setLastName = function (name) {
    lastName = name;
  };
  this.setFullName(firstAndLast);
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };

  return firstAndLast;
};

const bob = new Person("Bob Ross");
console.log(bob instanceof Person);
bob.setFullName("Kristóf");
bob.setLastName("Cserjési");
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFirstName());
