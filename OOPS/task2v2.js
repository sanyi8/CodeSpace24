//class with properties
class User {

  //Encapsulation (means PRIVATE)! class constructor
  constructor(firstName, lastName) {

    //Initialise / Declared Class Properties/ Attributes
    this._firstName = firstName;  // _firstName no access to this
    this._lastName = lastName;
  }

  //Getters
  get firstName() {
    return this._firstName; //access to private property
  }

  get lastName() {
    return this._lastName;
  }

  //Setters
  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  //hello method
  hello() {
    return "Hello World!";
  }
}

// Create an user1 Instance (object).
// Use the new keyword to create an object from the class.

const user = new User("John", "Doe");

// Show info to the user
// Call hello() method
console.log(user.hello());
// Show here firstName and lastName (get methods) getting access to the method
// _firstName means is a private 
console.log(`My name is ${user.firstName} ${user.lastName}`);

// Set a new first and last name( using the set method)
// we calling here
user.firstName = "Jane";
user.lastName = "Doe";


// do the same for user2
const user2 = new User("Jane", "Doe");

// Get user2 first and last name and say
console.log(user2.hello());
console.log(`My name is ${user2.firstName} ${user2.lastName}`);


