const products = [

    { id: 1, name: "Chair" },
    { id: 2, name: "Table" },
    { id: 3, name: "Chair" },
    { id: 3, name: "Lamp" }
];

let i = 0;

const productsLength = products.length

const selectedProducts = []

while (i < productsLength) {

    if (products[i].name === "Chair") {

        selectedProducts[selectedProducts.length] = products[i]

    }

    i++

}

console.log(selectedProducts);