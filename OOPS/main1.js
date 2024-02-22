class Car {
    //Instance variables
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    //drive method
    drive() {
        console.log("Vroom");
    }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make);
myCar.drive();