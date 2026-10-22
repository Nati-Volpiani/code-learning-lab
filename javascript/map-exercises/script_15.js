const movies = [
  { id: 1, title: "Matrix", rating: 8.7 },
  { id: 2, title: "Cars", rating: 6.5 },
  { id: 3, title: "Inception", rating: 8.8 }
];

const isWellRated = movies.map(function(m){
    return m.rating >= 8
})

console.log(movies);
console.log(isWellRated);