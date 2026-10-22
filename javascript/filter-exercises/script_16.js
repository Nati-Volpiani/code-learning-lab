const movies = [
    { id: 1, name: "Inception" },
    { id: 2, name: "Titanic" },
    { id: 3, name: "Titanic" },
    { id: 4, name: "Coco" },
    { id: 5, name: "Titanic" }
];

const selectedMovies = movies.filter(function(m){
    return m.name !== "Titanic"
})

console.log(selectedMovies);
console.log(movies);