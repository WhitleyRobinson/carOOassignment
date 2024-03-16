// Part I

class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//let myFirstVehicle = new Vehicle("Toyota", "Tacoma", 2010);
//myFirstVehicle.honk();

//const result = myFirstVehicle;
//const result = myFirstVehicle.honk();
//console.log(result)

//let myFirstVehicle = new Vehicle("Toyota", "4runner", 2020);
//myFirstVehicle.toString();

//const result = myFirstVehicle;
//console.log(result)

//const result = myFirstVehicle.toString();
//console.log(result)

// Part II

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//let myFirstCar = new Car ("Mazda", "RX8", 2007);
//myFirstCar.toString(); 

//const result = myFirstCar;
//const result = myFirstCar.toString();
//const result = myFirstCar.honk();
//const result = myFirstCar.numWheels;
//console.log(result)

// Part III

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Harley Davidson", "SoftTail", 2024);

//const result = myFirstMotorcycle;
//const result = myFirstMotorcycle.toString();
//const result = myFirstMotorcycle.honk();
//const result = myFirstMotorcycle.revEngine();
//const result = myFirstMotorcycle.numWheels;
//console.log(result)

// Part IV

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

let garage = new Garage(2);

//const result = garage.vehicles;
//const result = garage.add(new Car("Hyundai", "Elantra", 2015));
//const result = garage.vehicles;
//const result = garage.add("Taco");
//const result = garage.add(new Motorcycle("Honda", "NightHawk", 2000));
//const result = garage.vehicles;
//const result = garage.add(new Motorcycle("Honda", "NightHawk", 2001));
const result = garage.add(new Car("Hyundai", "Elantra", 2018))
console.log(result)


