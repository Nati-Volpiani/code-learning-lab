const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(function(n) {
    return n * 2
}); 

let i = 0;
do { 
    console.log(doubledNumbers[i]);
    i++;
} while ( i < doubledNumbers.length);