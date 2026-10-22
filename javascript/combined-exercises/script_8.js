const numbers = [5, 10, 15, 20, 25];
let i = 0;
const printNumbersGreaterThanTen = numbers.filter (function(n) {
 return n > 10
})

while ( i < printNumbersGreaterThanTen.length) {
    console.log(printNumbersGreaterThanTen[i])
    i++
}

// Expected: filter numbers greater than 10, then print each one using a while loop
