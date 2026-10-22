const scores = [85, -1, 92, 78, -1, 65, -1, 90];

let i = 0;

const scoresLength = scores.length

const selectedScores = []

do {

    if ( scores[i] !== -1) {
        selectedScores[selectedScores.length] = scores[i]
    }
    i++
}

while ( i < scoresLength);

console.log(selectedScores);

// Expected: keep scores different from -1