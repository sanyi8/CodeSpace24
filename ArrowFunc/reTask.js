// T1 Write a function expression called reverseString(). It should accept a single argument representing a person's name. It should return a reverse string as shown below:

// reverseString("John");
// reverseString("James");

// Output
// nhoJ
// semaJ

let reverseString = name => name.split('').reverse().join('');

console.log(reverseString("John"));
console.log(reverseString("James"));  

// T2 Write a function expression called reverseArray(). It should accept an array as a single argument. It should return a reversed array and it should work for any data type.

// reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// reverseArray(["I", "like", "JavaScript"]);
// Output

// [5, 4, 3, 2, 1]
// ["JavaScript", "like", "I"]

// let reverseArray = Array => Array.reverse();

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(["I", "like", "JavaScript"]));

// T3

// Write a function expression called mostExpensiveItem(). It should accept an array of items as a single argument. It should return the item that has the most cost tied up, calculated by the amount in stock * price.

// Test Data

// [
//    { item: "irn bru", price: 3.25, stock: 50 },
//    { item: "fanta", price: 3.98, stock: 45 },
//    { item: "diet coke", price: 4.40, stock: 38 }, 
//    { item: "7up", price: 3.99, stock: 42 }, 
// ]
// Output

// { item: 'fanta', price: 3.98, stock: 45 }

// version 1

const mostExpensiveItem = function(items) {
    // Calculate the cost for each item
    for (const item of items) {
      item.cost = item.price * item.stock;
    }
  
    // Sort the items based on cost in descending order
    const sortedItems = items.sort(function(a, b) {
      return b.cost - a.cost;
    });
  
    // Return the most expensive item (first item in the sorted array)
    return sortedItems[0];
  };
  
  // Test Data
  const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 },
    { item: "7up", price: 3.99, stock: 42 },
  ];
  
  // Output
  console.log(mostExpensiveItem(items));
  
  
// version 2

// const mostExpensiveItem = array => {
//     // create an empty object to be able to compare
//     let highestNumberObject = {};
//     // cost tied up on most expensive item
//     let mostExpensiveItemCost = 0;

//     // For loop to loop through the array of items
//     for (let i = 0; i < array.length; i++) {
//         // Calculate the cost tied up on a single item
//         costTiedUpSingleItem = array[i].price * array[i].stock;

//         // Check the most expensive item
//         if (costTiedUpSingleItem > mostExpensiveItemCost) {
//             mostExpensiveItemCost = costTiedUpSingleItem;
//             mostExpensiveItemObj = array[i];
//         }
//     }

//     return mostExpensiveItemObj;

// };


