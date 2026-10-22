const albums = [
    { id: 1, name: "Thriller" },
    { id: 2, name: "1989" },
    { id: 3, name: "Divide" },
    { id: 4, name: "1989" },
    { id: 5, name: "Lemonade" },
];

let i = 0;

const albumsLength = albums.length

const selectedAlbums = []

do {

    if (albums[i].id !== 2 && albums[i].name.length > 5) {

        selectedAlbums[selectedAlbums.length] = albums[i]
    }
    i++
} while (i < albumsLength);

console.log(selectedAlbums);

// Expected: keep albums with id different from 2 and name length greater than 5
