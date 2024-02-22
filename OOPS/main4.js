// 3. Inheritance

// Inheritance allows a class to inherit properties and methods from another class. It promotes code reusability and establishes a relationship between the parent (superclass) and child (subclass) classes.




// Define a class named Animal
class Animal {
    // Constructor for Animal class, takes 'name' as a parameter
    constructor(name) {
      // Initialize the 'name' property for the instance with the provided parameter
      this.name = name;
    }
  
    // Method for making a generic animal sound
    animalSound() {
      // Log a message indicating that the animal makes a sound
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Define a class named Dog that extends Animal
  class Dog extends Animal {
    // Override the animalSound method in the Dog class
    animalSound() {
      // Log a message indicating that the dog barks
      console.log(`${this.name} barks.`);
    }
  }

  // Define a class named Cat that extends Animal
  class Cat extends Animal {
    // Override the animalSound method in the Cat class
    animalSound() {
      // Log a message indicating that the cat meows
      console.log(`${this.name} meows.`);
    }
  }
  

// Create a new instance of the Dog class with the name 'Alfie'
const alfieDog = new Dog('Alfie');
alfieDog.animalSound();

// Create a new instance of the Cat class with the name 'Micike'
const micikeCat = new Cat('Micike');
micikeCat.animalSound();
