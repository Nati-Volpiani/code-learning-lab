const products = [
    { id: 1, name: "Chair" },
    { id: 2, name: "Table" },
    { id: 3, name: "Chair" },
    { id: 4, name: "Lamp" }
];

let i = 0;

const productsLength = products.length

const selectedProducts = []

do {

    if (products[i].name === "Chair") {

        selectedProducts[selectedProducts.length] = products[i]
    }
    i++
} while (i < productsLength)

console.log(selectedProducts);

// Expected: keep products with name "Chair"