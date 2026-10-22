const students = [
    { name: "Ana", score: 55 },
    { name: "Bruno", score: 70 },
    { name: "Carla", score: 62 },
    { name: "Diego", score: 40 }
];

const passedStudents = students.filter(function (s) {

    return s.score >= 60

})

const finalScores = passedStudents.map(function (f) {

    return f.score + 5

})

let i = 0;

while (i < finalScores.length) {

    console.log(finalScores[i])
    i++

}

// Expected: filters students with score >= 60, adds 5 bonus points via map, then prints each final score via while (75, 67)
