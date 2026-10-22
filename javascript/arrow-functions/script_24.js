const numbers = [3, 8, 15, 22, 5];

const result = numbers.filter((n) => {
    return n > 10
}).map((n) => {
    return n + 1
});

console.log(result);

//Expected: result returns [16, 23]

const result2 = numbers.filter((n) => n > 10).map((n) => n + 1)

console.log(result2);