const numbers = [12, 20, 30, 40, 50];

const numbersGreaterThanTen = numbers.filter(function(n){
    return n > 10
   
});

const doubledNumbersGreaterThanTen = numbersGreaterThanTen.map(function(n) {
  return n * 2;
});

console.log(doubledNumbersGreaterThanTen);


// Expected: keep numbers greater than 10, then double them
