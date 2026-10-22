const products = [
  { name: "Chair", price: 50 },
  { name: "Table", price: 120 },
  { name: "Lamp", price: 30 },
];

const expensiveProducts = products.filter(function(p){
    return p.price > 40
})

const totalFound = expensiveProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
},0);

console.log(totalFound);

// Expected: totalFound = 170 (sum of price for products over 40)