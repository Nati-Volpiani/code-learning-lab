const tasks = [15, 30, 10, 5];

const totalTook = tasks.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue
},0);

console.log(totalTook);

// Expected: totalTook = 60