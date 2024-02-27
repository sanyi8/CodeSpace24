// In this task you will extend the previous one with the help of some guiding topics.

// Your 'User' class should look like this:

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   hello() {
//     return "hello";
//   }  
// }
// Get and Set Methods 

// Add the class constructor.
// Add the getters and setters methods after the class constructor.
// Change your hello() method to return 'Hello World!'.
// Add the following:
// 1. Create an user object called user that will represent the User class.
// 2. Use the setters methods to set the firstName and lastName instance variables of your user object.
// 3. Use getters methods to retrieve the firstName and lastName Strings from the user object and add a blank space in between.

// Your program output should now look like this:

// Hello World!
// My name is firstName lastSurname

class User {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    // Add the getters and setters methods after the class constructor.
    get fullName() {
      return this._firstName + " " + this._lastName;
    }
  
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    hello() {
      return "Hello World!";
    }
  }
  
  // Create the user object using the constructor
  const user = new User();
  
  // Set the first and last names using the setter
  user.fullName = "John Doe";
  
  // Access the full name using the getter
  console.log(user.hello());
  console.log("My name is " + user.fullName);

  