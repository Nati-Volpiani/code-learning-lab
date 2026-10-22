const prices = [100, 250, 400, 75, 300];

const discountedPrices = prices.map(function(p){
    return p * 0.9 
})

console.log(discountedPrices);
console.log(prices);