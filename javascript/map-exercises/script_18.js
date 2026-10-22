const players = [
  { id: 1, name: "Ana", score: 150 },
  { id: 2, name: "Luis", score: 90 },
  { id: 3, name: "Marta", score: 200 }
];

const playerSummaries = players.map(function(p){
    return p.name + ": " +  p.score + " points"
})

console.log(players);
console.log(playerSummaries);