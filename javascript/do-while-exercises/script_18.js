const dishes = [

    { id:1, name: "Soup" },
    { id: 2, name: "Pasta" },
    { id: 3, name: "Sandwich" },
    { id: 4, name: " Rice" },
    { id: 5, name: "Casserole" }
];

let i = 0;

const dishesLength = dishes.length

const selectedDishes = []

do { 
    if ( dishes[i].id > 2 && dishes[i].name.length > 5 ) {

        selectedDishes[selectedDishes.length] = dishes[i]
    } 
    i++
} while ( i < dishesLength );

console.log(selectedDishes);


// Expected: keep dishes with id greater than 2 and name length greater than 5
