const answers = [true, true, false, true];

const totalKnew = answers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(totalKnew);

// Expected: totalKnew = 3 (number of true values in answers)