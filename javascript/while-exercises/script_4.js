const ages = [12, 25, 17, 30, 8, 45];

let i = 0;

const agesLength = ages.length

let adultsCount = 0

while (i < 6 ) {
    if ( ages[i] > 18 || ages[i] === 18 )
       adultsCount = adultsCount + 1
    
    i++
}
console.log(adultsCount)