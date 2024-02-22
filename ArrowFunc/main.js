// Activity - Arrow Functions

/*

//LINK  https://moodle.edinburghcollege.ac.uk/course/view.php?id=107780#section-6
// Q1 Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below:

let greet = name => "Hi " + name + "!";

console.log(greet("John"));
console.log(greet("Sandor"));       


// Q2 Convert the function isEven() into an equivalent arrow function.

let isEven = num => num % 2 === 0;

console.log(isEven(4)); //true. 4 is an even number
console.log(isEven(11897)); //false. 5 is not an even number    */

// Q3 Convert the following JavaScript function declaration to arrow function syntax:
/*
let counterFunc = counter =>  {
if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  
  return counter;
};

console.log(counterFunc(101));  // will be 0
console.log(counterFunc(50));   // will add +1  */

// Q4 Write an arrow function for the following JavaScript function:
/*
let nameAge = (name, age) => {    
    console.log("Hello " + name);
  console.log("You are " + age + " years old");
};

nameAge("John", 50);    */

// Q5 Write the arrow function for the following:
//  (empty argument)
/*
let printOnly = () => console.log("printing")
printOnly();    */

// Q6 Write the arrow function for the following:
/*
let sum = (num1, num2) => num1 + num2;
console.log(sum(10,20))         */

// Task 1
// Write a function expression called reverseString(). It should accept a single argument representing a person's name. It should return a reverse string as shown below:

let reverseString = name => name.split('').reverse().join('');

console.log(reverseString("John"));
console.log(reverseString("Kardos Sandor"));    



// Coding Task 2
// Write a function expression called reverseArray(). It should accept an array as a single argument. It should return a reversed array and it should work for any data type.


let reverseArray = Array => Array.reverse();

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["I", "like", "JavaScript"]));

//  Coding Task 3
//  Write a function expression called mostExpensiveItem(). It should accept an array of items as a single argument. It should return the item that has the most cost tied up, calculated by the amount in stock * price.

const item = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ];

const mostExpensiveItem = array => {
    // create an empty object to be able to compare
    let highestNumberObject = {};
    // cost tied up on most expensive item
    let mostExpensiveItemCost = 0;

    // For loop to loop through the array of items
    for (let i = 0; i < array.length; i++) {
        // Calculate the cost tied up on a single item
        costTiedUpSingleItem = array[i].price * array[i].stock;

        // Check the most expensive item
        if (costTiedUpSingleItem > mostExpensiveItemCost) {
            mostExpensiveItemCost = costTiedUpSingleItem;
            mostExpensiveItemObj = array[i];
        }
    }

    return mostExpensiveItemObj;

};

console.log(mostExpensiveItem(items));
