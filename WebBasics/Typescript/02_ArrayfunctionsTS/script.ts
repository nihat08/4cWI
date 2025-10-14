{interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const people: Person[] = [
  { firstName: "Emma", lastName: "Johnson", age: 28 },
  { firstName: "Liam", lastName: "Smith", age: 34 },
  { firstName: "Elivia", lastName: "Brown", age: 22 },
  { firstName: "Noah", lastName: "Williams", age: 41 },
  { firstName: "Eva", lastName: "Jones", age: 19 },
  { firstName: "Ethan", lastName: "Garcia", age: 37 },
  { firstName: "Sophia", lastName: "Miller", age: 25 },
  { firstName: "Mason", lastName: "Davis", age: 31 },
  { firstName: "Isabella", lastName: "Martinez", age: 29 },
  { firstName: "James", lastName: "Rodriguez", age: 45 },
];

//map
const result = people.map((person: Person) => person.firstName);
console.log("Map: ", result);

//Filter
const filtered: Person[]=people.filter((person:Person)=>person.age > 30);
console.log("Filter: ", filtered);

//Sort
const sorted: Person[]=people.sort((a,b) =>a.age - b.age);
console.log("Sort: ", sorted);

//Find
const found: Person|undefined=people.find((person:Person)=>person.firstName.startsWith("E"));
console.log("Find: ", found);

//Reduce
const reduced = people.reduce((sum,person)=>sum+person.age,0)/people.length;
console.log("Reduce: ", "Avg: ", reduced);

//Some
const some = people.some((person: Person) => person.age > 60);
console.log("Some: ", some);

//Every
const every = people.every((person: Person) => person.age > 18);
console.log("Every: ", every);






}
