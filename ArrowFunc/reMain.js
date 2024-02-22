// Q1 Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below:

let greet = name => "Hi " + name + "!";

console.log(greet("John"));
console.log(greet("James"));

// greet("John"); //"Hi John!"
// greet("James"); //"Hi James!"

// Q2 Convert the function isEven() into an equivalent arrow function.

// function isEven(num) {
//   return num % 2 === 0;
// }

// //anonymise leave function name and use only "name =>" instead 
// let isEven = (num) => num % 2 === 0;

//remove parameter and () 
let isEven = num => num % 2 === 0;

console.log(isEven(8));
console.log(isEven(49));

// Q3 Convert the following JavaScript function declaration to arrow function syntax:

// function counterFunc(counter) {
//   if (counter > 100) {
//     counter = 0;
//   } else {
//     counter++;
//   }

//   return counter;
// }

// anonymize + remove ()
let counterFunc = counter => {
    if (counter > 100) {
        counter = 0;
      } else {
        counter++;
      }
      
      return counter;
    }

console.log(counterFunc(101));  // will be 0
console.log(counterFunc(50));   // will add +1

// Q4 Write an arrow function for the following JavaScript function:

// function nameAge(name, age) {
//   console.log("Hello " + name);
//   console.log("You are " + age + " years old");
// }
// let anonymize BUT keep (for parameters)
// const nameAge = (name, age) => {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
// }

// ver 2 I used 1 console.log with new line { console.log "Hello" + name + "!" + "\n" + "You are " + age + " years old"}
const nameAge = (name, age) => {
    console.log("Hello " + name + "!" +
    "\n" + "You are " + age + " years old")
}

(nameAge("Alexij", 45));

// Q5 Write the arrow function for the following:

// function printOnly() {
//   console.log("printing");
// }

let printOnly = () => console.log("printing");

printOnly();

// Q6 Write the arrow function for the following:

// function sum(num1, num2) {
//     return num1 + num2
// }


// remove return and {}brackets
let sum = (num1, num2) => num1 + num2;

console.log(sum(541, 2859))
console.log(sum(541, -2859))