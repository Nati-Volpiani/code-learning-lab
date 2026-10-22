const orders = [
    { item: "Book", price: 20, qty: 2 },
    { item: "Pen", price: 3, qty: 10 },
    { item: "Bag", price: 45, qty: 1 }];

const total = orders.filter((order) => {
    return order.qty >= 2
}).map((order) => {
    return order.price * order.qty
}).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(total);

// Expected: total returns 70

const total2 = orders.filter((order) =>
     order.qty >= 2).map((order) => 
    order.price * order.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(total2);