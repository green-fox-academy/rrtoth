// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

'use strict';

class Station {
    gasAmount: number;

    constructor(gasAmount: number = 1000) {
        this.gasAmount = gasAmount;
    }

    public refill(Car) {
        this.gasAmount -= Car.capacity;
        Car.gasAmount = Car.capacity;
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let car1 = new Car;
let station1 = new Station;

station1.refill(car1);

console.log(car1)
console.log(station1)