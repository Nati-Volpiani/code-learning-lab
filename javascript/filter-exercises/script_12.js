const products = [
    { id: 1, name: "Chair" },
    { id: 2, name: "Table" },
    { id: 3, name: "Chair" },
    { id: 4, name: "Lamp" }
];

const selectedProduct = products.filter(function(product){
    return product.name === "Chair"
})

console.log(selectedProduct);
console.log(products);