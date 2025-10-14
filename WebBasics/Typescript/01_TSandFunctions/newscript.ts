

const cars2: Car[] = [
  { brand: "Toyota", model: "Corolla", price: 23000, year: 2022 },
  { brand: "BMW", model: "3 Series", price: 42000, year: 2023 },
  { brand: "Tesla", model: "Model 3", price: 45000, year: 2024 },
  { brand: "Ford", model: "Mustang", price: 55000, year: 2021 },
  { brand: "Volkswagen", model: "Golf", price: 27000, year: 2020 }
];

//Calculate total price
const totalPrice = cars2.reduce((sum,car)=> sum+car.price,0);
console.log("Reduce: ", "Insg:", totalPrice, "€");



//Print list of cars
const result = cars2.map((car: Car)=>{
return `${car.brand} ${car.model} ${car.year} ${car.price}€`;
});
console.log("Map: ", result);


//Filter expensive cars
const filtered: Car[] = cars2.filter((car: Car)=>car.price > 40000);
console.log("Filter: ", filtered);



