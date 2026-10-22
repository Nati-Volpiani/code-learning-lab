const dishes = [
    { id: 1, name: "Soup" },
    { id: 2, name: "Pasta" },
    { id: 3, name: "Sandwich" },
    { id: 4, name: "Sandwich" },
    { id: 5, name: "Rice" },
    { id: 6, name: "Casserole" }
];

let i = 0;

const dischesLength = dishes.length;

const selectedDishes = [];

while (i < dischesLength) {
    if (dishes[i].id > 2 && dishes[i].name.length > 5) {
        selectedDishes[selectedDishes.length] = dishes[i]
    }
    i++
}

console.log(selectedDishes);
