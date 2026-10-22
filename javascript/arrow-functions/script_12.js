const scores = [45, 92, 78, 15, 88];

const passingScores = scores.filter((score) => {
    return score >= 60
})

const totalPassing = passingScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(passingScores);
console.log(totalPassing);

// Expected: passingScores returns [92, 78, 88], totalPassing returns 258

const passingScores2 = scores.filter((score) => score >= 60)

const totalPassing2 = passingScores2.reduce((accumulator, currentValue) => accumulator + currentValue)


console.log(passingScores2);
console.log(totalPassing2);