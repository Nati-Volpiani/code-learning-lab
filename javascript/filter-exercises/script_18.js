const dishes = [
    { id: 1, name: "Soup" },
    { id: 2, name: "Pasta" },
    { id: 3, name: "Sandwich" },
    { id: 4, name: "Rice" },
    { id: 5, name: "Casserole" }
];

const selectedDishes = dishes.filter(function(d){
    return d.id > 2 && d.name.length > 5
})

console.log(selectedDishes);
console.log(dishes);