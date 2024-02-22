class Circle {

    // Class constructor
    constructor(radius) {
        this._radius = radius;
    }

    // Getter method for radius 
    // if you have more contructor properties youd need same getters and setters
    get radius() {
        return this._radius;
    }

    // Setter method for radius
    set radius(radius) {
        this._radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea() {
        // Fix the syntax to '** 2' for squaring the radius, and return the calculated area
        return Math.PI * this._radius ** 2;
    }
}

// Create an instance of the Circle class with radius 2
const myCircle = new Circle(2);

// Access and print the radius using the getter method
console.log("Radius: ", myCircle.radius);

// Calculate and print the area using the calculateArea method
console.log("Area: ", myCircle.calculateArea());

// USE CONSTRACTOR WITH NEW VALUES
// Create a new instance of the Circle class with radius 5
const newCircle = new Circle(5);

// Access and print the new radius using the getter method
console.log("New Radius: ", newCircle.radius);

// Calculate and print the new area using the calculateArea method
console.log("New Area: ", newCircle.calculateArea());