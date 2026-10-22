const ages = [12, 17, 21, 15, 30, 8];

let i = 0;

const agesLength = ages.length

const greaterThan10 = [];

while (i < agesLength) {
    
    if (ages[i] > 10) {
        greaterThan10[greaterThan10.length] = ages[i];
        
    }

    i++
}

console.log(greaterThan10);