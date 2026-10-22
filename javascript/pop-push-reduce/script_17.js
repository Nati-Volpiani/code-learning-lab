const birthdays = [2, 1, 3, 4];

const totalGave = birthdays.reduce((accumulator, currentValue) => {
return accumulator + currentValue
},0);

console.log(totalGave);

// Expected: totalGave = 10