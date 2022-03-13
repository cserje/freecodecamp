class Person {
  firstName: string | undefined;
  lastName: string | undefined;
  setFullName(firstAndLastname: string) {
    this.firstName = firstAndLastname.split(" ")[0];
    this.lastName = firstAndLastname.split(" ")[1];
  }
  constructor(firstAndLastname: string) {
    this.setFullName(firstAndLastname);
  }
  getFullname() {
    return [this.firstName, this.lastName].join(" ");
  }
  getFirstName() {
    this.firstName;
  }
  getLastName() {
    this.lastName;
  }
  setFirstName(firstName : string) {
    this.firstName = firstName;
  }
  setLastName(lastName : string) {
    this.lastName = lastName;
  }
}

const bob = new Person("Bob Ross");
console.log(bob.getFullname());
console.log(Object.keys(bob));