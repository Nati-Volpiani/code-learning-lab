const prices = [10, 25, 5, 40];

const doubledPrices = prices.map((price)=> {
    return price * 2
})

console.log(doubledPrices);

// Expected: doubledPrices returns [20, 50, 10, 80]

const doubledPrices2 = prices.map((price) => price * 2 )

console.log(doubledPrices2)