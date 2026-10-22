const events = [25, 40, 15, 20];

const totalCame = events.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(totalCame);

// Expected: totalCame = 100