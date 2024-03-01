// Coding Task 3 - Inheritance (Subclass and Superclass)
// In this task your are required to create an Admin class, which is a  child class of the User  class:

// 1. Create a  User class:
// § Add to the class a property with the name of username.

// § Create a setter method that can set the value of the username.

// 2. Create the Admin class that inherits the User class:
// § Add a method by the name of expressYourRole(), and make it return the string: "Admin".

// § Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.

// 3. Create an object admin out of the class Admin:
// § Set its name to "Balthazar" and say hello to the user.

//user class
class User {
  //class constructor // EMPTY Constructor
  constructor() {
    //initialise the userName
    this._userName = ""; //initialise EMPTY string
  }

  // set method
  set userName(userName) {
    this._userName = userName;
  }
}

// admin class that inherits from the User class
class Admin extends User {
  // expressYourRole() method
  expressYourRole() {
    return "Admin";
  }

  // sayHello() method
  sayHello() {
    return `Hello admin, ${this._userName}`;
  }
}

// create an Admin instance (object)
const admin = new Admin();

// Show info to the user
console.log(admin.sayHello());

// Set the username to ''
admin.userName = "Balthazar";
// Show info to the user
console.log(admin.sayHello());

admin.userName = "John";
// Show info to the user
console.log(admin.sayHello());
