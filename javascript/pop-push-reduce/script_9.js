const distances = [5, 10, 3, 8];

const totalWent = distances.reduce((accumulator, currentValue) => {
return accumulator + currentValue
},0); 

console.log(totalWent);

// Expected: totalWent = 26 (total distance traveled)
