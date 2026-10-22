const pets = [2, 1, 3];

const totalHad = pets.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(pets);
console.log(totalHad);

// Expected: totalHad = 6