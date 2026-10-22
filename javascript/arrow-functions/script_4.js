const isPositive = (number) => {
    return number > 0 
}

console.log(isPositive(2));
console.log(isPositive(0));
console.log(isPositive(-1));

// Expected: isPositive(2) returns true, isPositive(0) returns false, isPositive(-1) returns false


const isPositive2 = (number) => number > 0

console.log(isPositive2(2));
console.log(isPositive2(0));
console.log(isPositive2(-1));