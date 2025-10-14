interface Person {
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

const result: any[] = people.map((person: Person) => {
  return { name: person.firstName, surname: person.lastName };
});

console.log(result);

const filtered: Person[] = people.filter((person: Person) =>
  person.firstName.startsWith("E")
);
console.log("filtered:", filtered);

const found: Person | undefined = people.find((person: Person) =>
  person.firstName.startsWith("E")
);
console.log("found:", found);