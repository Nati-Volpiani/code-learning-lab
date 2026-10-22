const numbers = [2, 4, 6];

const square = (number) => {
    return number * number
};

let i = 0;

const squaredNumbers = []

do {

    squaredNumbers.push(square(numbers[i]))
    i++

} while (i < numbers.length);

console.log(squaredNumbers);

// Expected: squaredNumbers returns [4, 16, 36]

const square2 = (number) => number * number 

let j = 0;
const squaredNumbers2 = [];

do {

    squaredNumbers2.push(square2(numbers[j]))
    j++
}
while ( j < numbers.length);

console.log(squaredNumbers2);