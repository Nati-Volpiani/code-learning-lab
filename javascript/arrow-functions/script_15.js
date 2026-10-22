const temperatures = [22, -5, 18, -3, 30];

const negativeTemps = temperatures.filter((temp) => {
    return temp < 0
});

const absoluteTemps = negativeTemps.map((temp) => { 
    return temp * -1
})

console.log(absoluteTemps);

// Expected: absoluteTemps returns [5, 3]

const negativeTemps2 = temperatures.filter((temp) => temp < 0 )

const absoluteTemps2 = negativeTemps2.map((temp) => temp * -1)

console.log(negativeTemps2);
console.log(absoluteTemps2);
