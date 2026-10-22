//retorno implícito

const numbers = [2, 5, 9, 3];

const doubledOld = numbers.map((n) => {
  return n * 2;
});

const doubledNew = numbers.map((n) => n * 2);

console.log(doubledOld);
console.log(doubledNew);

const doubledOld2 = numbers.map((n) => n * 2)

const doubledNew2 = numbers.map((n) => {
  return n * 2
})

console.log(doubledOld2);
console.log(doubledNew2);