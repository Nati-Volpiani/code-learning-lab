const products = [{ name: "Chair", stock: 5 }, { name: "Table", stock: 0 }, { name: "Lamp", stock: 12 }];

const inStock = (product) => {
    return product.stock > 0
};

const availableProducts = products.filter(inStock); //callback

console.log(availableProducts);

//Expected: availableProducts returns [{name: 'Chair', stock: 5}, {name: 'Lamp', stock: 12}]


const inStock2 = (product) => product.stock > 0

const availableProducts2 = products.filter(inStock2);

console.log(availableProducts2)