const movies = [

    { id: 1, name: "Inception" },
    { id: 2, name: "Titanic" },
    { id: 3, name: "Titanic" },
    { id: 4, name: "Coco" },
    { id: 5, name: "Titanic" }
];

let i = 0 

const moviesLength = movies.length

const selectedMovies = []

while ( i < moviesLength ) {

    if ( movies[i].name !== "Titanic" ) {

        selectedMovies[selectedMovies.length] = movies[i]
    }
    i++

}

console.log(selectedMovies);