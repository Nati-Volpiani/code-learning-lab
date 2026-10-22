const movies = [
    { id: 1, name: "Inception" },
    { id: 2, name: "Titanic" },
    { id: 3, name: "Titanic" },
    { id: 4, name: "Coco" },
    { id: 5, name: "Titanic" }
];

let i = 0;

const moviesLength = movies.length

const selectedMovies = []

do {

    if ( movies[i].name !== "Titanic" ) {

        selectedMovies[selectedMovies.length] = movies[i]
    }
    i++
} while ( i < moviesLength );

console.log(selectedMovies);

// Expected: exclude movies named "Titanic"