const numbers = [1, 2, 3, 4, 5];

const tripledNumbers = numbers.map(function (n) {

    return n * 3

})

let i = 0

while (i < tripledNumbers.length) {

    console.log(tripledNumbers[i])
    i++

}

// Expected: triples each number via map, then prints each one via while (3, 6, 9, 12, 15)
