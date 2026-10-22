const products = [
  { id: 1, name: "Chair", price: 100 },
  { id: 2, name: "Table", price: 250 }
];

const discountedProducts = products.map(function(p){
return { name: p.name, discountedPrice: p.price * 0.9 }

})

console.log(products);
console.log(discountedProducts);