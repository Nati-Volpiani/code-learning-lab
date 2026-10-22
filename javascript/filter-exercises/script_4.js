const scores = [85, -1, 92, 78, -1, 65, -1, 90];

const validScores = scores.filter(function (s) {
    return s !== -1
})

console.log(validScores);
console.log(scores);