const numbers = [1, 2, 3, 4];

const total = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
})

console.log(total);

// Expected: total returns 10

const total2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(total2);