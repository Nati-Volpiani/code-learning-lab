const prices = [15, 30, 45];

const sum = (accumulator, currentValue)  => {
    return accumulator + currentValue
}

const total = prices.reduce(sum, 0);

console.log(total);

//Expected: total returns 90

const sum2 = (accumulator, currentValue) => accumulator + currentValue
const total2 = prices.reduce(sum2, 0)
console.log(total2)