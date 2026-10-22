const orders = [
  { id: 1, product: "Chair", quantity: 3, unitPrice: 50 },
  { id: 2, product: "Table", quantity: 1, unitPrice: 200 }
];

const orderTotals = orders.map(function(o){
    return o.quantity * o.unitPrice
})

console.log(orders);
console.log(orderTotals);