const prices = [10, 25, 5, 40];

const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);