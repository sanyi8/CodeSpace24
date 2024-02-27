// In this task your are required to create a user application.

// Let's write a user class with the tools we have just acquired. This class will contain the first and  last name of each user and will be able to say hello to anyone who uses our application.

// Instructions:

// Write the class User and add the properties.
// Add the method that says hello.
// Create the first instance, and call it user1. Use the new keyword to create an object from the class.
// Set the values for the first and last name to user1.

// firstName = 'John'
// lastName = 'Doe'

// Get the user first and last name, and print it to the screen.
// Use the hello() method with the first and last name variables in order to say hello to the user:

// Expected result:
// hello, John Doe

// Add another object, call it user2, give it a first name of 'Jane' and last name of 'Doe', then say hello to the user.

// Expected result:
// hello, John Doe
// hello, Jane Doe

//class with properties
class User {

  //Encapsulation class constructor
  constructor(firstName, lastName) {

    //initialise / declared class properties/ attributes
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //hello method
  hello() {
    console.log(`hello, ${this.firstName} ${this.firstName}`);
  }
}

// Create user1 Instance (object).
// Use the new keyword to create an object from the class.

const user1 = new User("John", "Doe");

//Get user1 first and last name and say hello
user1.hello();

// do the same for user2
const user2 = new User("Jane", "Doe");

// Get user2 fist and last name and say
user2.hello();