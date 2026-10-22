const words = ["hello", "how", "are", "you"];

const totalSaid = words.reduce((accumulator, currentValue) => { 
    return accumulator + " " + currentValue
},"");

console.log(totalSaid);


// Expected: totalSaid = " hello how are you" (words joined with reduce)
