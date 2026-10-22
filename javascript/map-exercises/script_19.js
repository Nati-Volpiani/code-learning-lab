const cars = [
  { id: 1, brand: "Toyota", year: 2015 },
  { id: 2, brand: "Ford", year: 2022 }
];

const carAges = cars.map(function(c){
    return 2026 - c.year
})

console.log(cars);
console.log(carAges);