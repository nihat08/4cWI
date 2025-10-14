import { Car } from "./Car";
import { Engine } from "./Engine";
import { Owner } from "./Owner";

let engine:Engine=new Engine("Toyota", 105, "Gasoline");
let owner:Owner = new Owner("Markus", "Müller", 47);

let car:Car=new Car(engine, owner);

console.log(owner.getFirst(), engine.getHp());
