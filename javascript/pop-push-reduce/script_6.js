const results = [true, true, true];

const wereAllTrue = results.reduce((acc, curr) => {
    return acc && curr === true 
},true);

console.log(wereAllTrue);

// Expected: true (all elements in results are true)
