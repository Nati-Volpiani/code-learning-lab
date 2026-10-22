const isEven = (number) => {
    return number % 2 === 0
}

console.log(isEven(6));
console.log(isEven(3));

// Expected: isEven(6) returns true, isEven(3) returns false

const isEven2 = (number) => number %  2 === 0

console.log(isEven2(6));
console.log(isEven2(3));
