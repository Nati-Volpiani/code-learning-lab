const numbers = [5, 10, 15, 20, 25, 30, 35];

const getNumbers = numbers.filter(function(n) {
    return n > 10;
})

console.log(getNumbers);
console.log(numbers);

// Expected: keep numbers greater than 10
