const numbers = [2, 6, 3, 8, 4, 10]

const filteredNumbers = numbers.filter(function(n){

    return n > 5

})

const squaredNumbers = filteredNumbers.map(function(nm){

return nm * nm

})

let i = 0;

do {
    console.log(squaredNumbers[i])
    i++
} while ( i < squaredNumbers.length);


// Expected: filters numbers greater than 5, squares them via map, then prints each one via do while (36, 64, 100)
