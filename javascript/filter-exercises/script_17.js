const cities = [
    { id: 1, name: "Rome" },
    { id: 2, name: "Lima" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Oslo" },
    { id: 5, name: "Cairo" },
    { id: 6, name: "Miami" }
];

const selectedCities = cities.filter(function(c){
    return c.id > 2 && c.id < 5
})

console.log(selectedCities);
console.log(cities);