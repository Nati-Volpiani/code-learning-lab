const scores = [45, 82, 90, 33];

const passingScores = scores.filter((s) => s >= 50);

console.log(passingScores);

// Expected: passingScores returns [82, 90]

const passingScores2 = scores.filter((s) => {
    return s >= 50
})

console.log(passingScores2);