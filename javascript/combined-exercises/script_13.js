const products = [
    { price: 20, quantity: 3 },
    { price: 50, quantity: 1 },
    { price: 15, quantity: 10 },
    { price: 5, quantity: 2 }
];

const totals = products.map(function(p){

return p.price * p.quantity

})

const bigTotals = totals.filter(function(tm){

return tm > 100

})

let i = 0;

do {
    console.log(bigTotals[i])
    i++
} while ( i < bigTotals.length)

    // Expected: computes totals via map, filters totals greater than 100, then prints each one via do while (150)
