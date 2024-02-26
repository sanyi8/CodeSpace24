class Circle {
    //Class constructor - Instance variables
    constructor(radius) {
        this.radius = radius;
    }

    // getters methods (functions)  I will get the radius with this
    get radius() {
        return this._radius;
    }
    
    // setters methods      I will add the value to the constructor with this bit
    set radius(radius) {
        this._radius = radius;
    }

    // Methods
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

}

const myCircle = new Circle(2);
console.log("Radius: ", myCircle.radius);
console.log("Area: ", myCircle.calculateArea());

// changing the radius value

myCircle.radius = 5;        // we just pass on the new value
console.log("New radius: ", myCircle.radius);
console.log("New area: ", myCircle.calculateArea());


// The use of an underscore (_) at the beginning of the variable name (_radius) is a common convention in JavaScript to indicate that the variable is intended to be private or internal to the class. It's a way of signaling to other developers that they should not directly access or modify this variable from outside the class.