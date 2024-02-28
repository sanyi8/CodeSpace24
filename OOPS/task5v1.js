// Coding Task 5 - Abstraction
// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

// 1. Create an abstract class with the name of User:

// Add to the class, a property with the name of username.
// Add to the class, an abstract method with the name of stateYourRole().
// Add to the class, the setter and getter methods to set and get the username.

// 2. Create an Admin class that inherits the User abstract class:

// Add to the class a method stateYourRole() and let it return the string "admin".

// 3. Create another class, Viewer that inherits the User abstract class:

// Add to the class a method stateYourRole() and let it return the string "viewer".

// 4. Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".

// 5. Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer".

class User {
    // c;ass constructor
    constructor(userName) {
        //prevet to create object from
        if (this.constructor === User) {
            throw new TypeError("Cannot instantiate an Abstract class");
        }

        this._userName = userName;
    }

    //getter method
    get userName() {
        return this._userName;
    }

    //setter method
    set userName(userName) {
        this._userName = userName;
    }

    // Abstract method
    stateYourRole() {
        // Prevent to be called directly
        throw new Error("You need to implement the method first");

    }
}
  //Class Admin
  class Admin extends User {
    // class constructor
    constructor(userName) {
        // call the superclass constructor
        super(userName);
    }

    //override method
    stateYourRole() {
        return "Admin";
    }

  }


//Class Viewer
class Viewer extends User {

    // class constructor
    constructor(userName) {

        // call the superclass constructor
        super(userName);
    }

    //override method
    stateYourRole() {
        return "Viewer";
    }
}


// Create an Admin object
const admin = new Admin("Balthazar");

console.log(admin.userName);
console.log(admin.stateYourRole());

// Create an Viewer object
const viewer = new Viewer("Melchior");

console.log(viewer.userName);
console.log(viewer.stateYourRole());
