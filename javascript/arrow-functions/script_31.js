const cart = [
    { name: "Shirt", price: 25 },
    { name: "Shoes", price: 60 },
    { name: "Hat", price: 15 }
];

const total = cart.filter((item) =>
    item.price > 20).map((item) => ({ name: item.name, price: item.price * 0.95 })).reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)


console.log(total);

const total2 = cart.filter((item) => {
    return item.price > 20
}).map((item) => {
    return { name: item.name, price: item.price * 0.95 }
}).reduce((accumulator, currentValue) => { return accumulator + currentValue.price}, 0)

console.log(total2);