const tasks = [true, false, true, true];

const totalDid = tasks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(totalDid);

// Expected: totalDid = 3 (number of true values in tasks)
