const numbers = [5, 12, 18, 25, 9, 30, 15];

const selectedNumbers = numbers.filter(function(n){
    return n > 10 && n < 20
})

console.log(selectedNumbers);
console.log(numbers);