const numbers = [3, 8, 12, 5, 20, 7]

const evenNumbers = numbers.filter(function (e) {

    return e % 2 === 0

})

let i = 0;

const halvedNumbers = []

while (i < evenNumbers.length) {

    halvedNumbers.push(evenNumbers[i] / 2)
    i++
    
}

console.log(halvedNumbers);

// Expected: filters even numbers, then builds a new array with each one halved via while + push (4, 6, 10)
