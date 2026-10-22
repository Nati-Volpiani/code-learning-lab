const products = [
  { id: 1, name: "Chair", price: 100 },
  { id: 2, name: "Table", price: 250 }
];

const productPrices = products.map(function(p){
    return p.price
})

console.log(products);
console.log(productPrices);