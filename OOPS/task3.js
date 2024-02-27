class User {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._username = ""; // Add username property
    }
  
    // Add a setter method for the username
    set username(username) {
      this._username = username;
    }
  
    get fullName() {
      return this._firstName + " " + this._lastName;
    }
  
    hello() {
      return "Hello World!";
    }
  }
  
  class Admin extends User {
    expressYourRole() {
      return "Admin";
    }
  
    sayHello() {
      return "Hello admin, " + this._username; // Use username property
    }
  }
  
  // Create an object admin from the Admin class
  const admin = new Admin();
  
  // Set the name to "Balthazar"
  admin.fullName = "Balthazar";
  
  // Set the username
  admin.username = "BalthazarUsername";
  
  // Say hello to the user
  console.log(admin.sayHello()); // Output: Hello admin, BalthazarUsername
  