const points = [10, 20, 15];

const totalGot = points.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(totalGot);

// Expected: totalGot = 45
