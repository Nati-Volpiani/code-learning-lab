const ages = [12, 17, 21, 15, 30, 8];

let i = 0;

const greaterThan10 = []
do {
    
if (ages[i] > 10) {
    greaterThan10[greaterThan10.length] = ages[i]
}
    i++
} while (i < ages.length);


console.log(greaterThan10);

// Expected: keep numbers greater than 10
