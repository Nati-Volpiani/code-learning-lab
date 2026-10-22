const machines = [50, 30, 20, 40];

const totalMade = machines.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue
},0);

console.log(totalMade);

// Expected: totalMade = 140
