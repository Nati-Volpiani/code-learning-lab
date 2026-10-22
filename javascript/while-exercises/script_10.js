const scores = [85, -1, 92, 78, -1, 65, -1, 90];

let i = 0;

const scoresLength = scores.length

const validScores = []

while (i < scoresLength) {

    if (scores[i] !== -1) {
        validScores[validScores.length] = scores[i]
    }

    i++

}

console.log(validScores);