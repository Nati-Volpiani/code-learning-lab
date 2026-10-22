const ages = [12, 17, 21, 15, 30, 8];

const greaterThan10 = ages.filter(function(n) { // --> callback
    return n > 10;
})

console.log(greaterThan10); // mostrará: [12, 17, 21, 15, 30];
console.log(ages); // no se modifica: [12, 17, 21, 15, 30, 8];