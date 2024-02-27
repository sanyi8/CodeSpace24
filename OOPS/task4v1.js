// In order to implement the polymorphism principle, you will create a User class that commits the classes that inherit from it to calculate the number of scores that a user has depending on the number of articles that he has authored or edited.

// On the basis of the User class, we are going to create the Author and Editor classes, and both will calculate the number of scores with the method calcScores(), although the calculated value will differ between the two classes.

// This is the skeleton for the User class:

// Example:

// class User {
//   constructor() {
//     this.numberOfArticles = 0;
//   }
// }

class User {
  constructor() {
    this._numberOfArticles = 0;     //initialise private variable
  }

  // get method
  get numberOfArticles() {
    return this._numberOfArticles;
  }

  //setter method
  set numberOfArticles(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }

  // calcScores() method
  calcScores() {        //this will be used in subclasses
    // to be changed in the sub class
  }
}

// 3. Create an Author class that inherits from the User class.

// In the Author create a calcScores() method that returns the number of scores from the following calculation:

// numberOfArticles * 10 + 20

// Create Author class (object)
class Author extends User {
  // Override method
  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

//   4. Create an Editor class that inherits from the User class.

// In the Editor create a calcScores() method that returns the number of scores from the following calculation:

// numberOfArticles * 6 + 15

// Editor class
class Editor extends User {
  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

//   5. Create an Author instance (object)
const author = new Author();

// set then number of articles,
author.numberOfArticles = 8;

// print this author`s scores
console.log("Author`s scores: " + author.calcScores());


// create and Editor instance (object)
const editor = new Editor();

// set the number of articles

editor.numberOfArticles = 15;

// print editors score to user
console.log("Editor`s score: " + editor.calcScores());