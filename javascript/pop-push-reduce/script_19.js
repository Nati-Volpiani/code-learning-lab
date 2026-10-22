const opinions = [
  { subject: "Math", score: 8 },
  { subject: "History", score: 6 },
  { subject: "Art", score: 9 },
];

const scores = opinions.map(function(s){
    return s.score
})

const totalThought = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0);

console.log(totalThought);

// Expected: totalThought = 23