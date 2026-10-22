const products = [{ name: "Chair", price: 80 },
{ name: "Pen", price: 2 },
{ name: "Table", price: 150 },
{ name: "Notebook", price: 5 }
];

const expensiveProducts = products.filter(function (p) {

    return p.price > 50

})

let i = 0;

const expensiveNames = []

while (i < expensiveProducts.length) {
    expensiveNames.push(expensiveProducts[i].name)
    i++
}

console.log(expensiveNames);

// Expected: filters products with price > 50, then builds an array with just their names via while + push (Chair, Table)
