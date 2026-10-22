const scores = [100, 85, 100, 90, 100, 75];

const selectedScores = scores.filter(function(s){
    return s === 100
})

console.log(selectedScores);
console.log(scores)