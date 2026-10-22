const birdsPerDay = [3, 7, 2, 5];

const totalSaw = birdsPerDay.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(totalSaw);

// Expected: totalSaw = 17