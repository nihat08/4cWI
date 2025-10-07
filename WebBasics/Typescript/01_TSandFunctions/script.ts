interface Car{
    brand: string;
    model: string;
    price: number;
    year: number
}

const cars: Car[] = [
  { brand: "Toyota", model: "Corolla", price: 23000, year: 2022 },
  { brand: "BMW", model: "3 Series", price: 42000, year: 2023 },
  { brand: "Tesla", model: "Model 3", price: 45000, year: 2024 },
  { brand: "Ford", model: "Mustang", price: 55000, year: 2021 },
  { brand: "Volkswagen", model: "Golf", price: 27000, year: 2020 }
];

function getTotalPrice(cars:Car[]):number{
  let total=0;
  for(let car of cars){
    total+=car.price;
  }
  return total;
}
const totalPrice = getTotalPrice(cars);
console.log("Total:", totalPrice, "€");


function printCars(cars:Car[]):void {
    console.log("List of all cars:");
    for(let car of cars){
        console.log(`${car.brand} ${car.model} ${car.price} ${car.year} `);
        
    }
}
printCars(cars);


function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
  let expensiveCars: Car[] = [];
  for (let car of cars) {
    if (car.price > minPrice) {
      expensiveCars.push(car);
    }
  }
  return expensiveCars;
}
const expensive = getExpensiveCars(cars, 40000);
console.log(expensive);




