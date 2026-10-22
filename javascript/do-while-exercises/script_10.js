const scores = [100, 85, 100, 90, 100, 75];

let i = 0;

const scoresLength = scores.length

const selectedScores = []

do {

    if ( scores[i] === 100 ) {

        selectedScores[selectedScores.length] = scores[i]
    }
    i++
} while ( i < scoresLength );

console.log(selectedScores);

// Expected: keep scores equal to 100