const numbers = [3, 6, 9];

const double = (number) => {
    return number * 2
};

let i = 0
const doubledNumbers = [];

while ( i < numbers.length ) {

  doubledNumbers.push(double(numbers[i]))

    i++
}

console.log(doubledNumbers);

// Expected: doubledNumbers returns [6, 12, 18]

const double2 = (number) => number * 2

let j = 0
const doubledNumbers2 = [];

while ( j < numbers.length ) {

  doubledNumbers2.push(double2(numbers[j]))

  j++

}

console.log(doubledNumbers2);