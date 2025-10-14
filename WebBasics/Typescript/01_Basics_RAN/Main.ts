import { Car } from "./Car.ts";

const car1: Car = new Car("green");

console.log(car1.getColor());

car1.setColor("black");
console.log(car1.getColor());