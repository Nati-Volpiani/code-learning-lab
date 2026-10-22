const albums = [
    { id: 1, name: "Thriller" },
    { id: 2, name: "1989" },
    { id: 3, name: "Divide" },
    { id: 4, name: "1989" },
    { id: 5, name: "Lemonade" }
];

let i = 0;

const albumsLength = albums.length

const selectedsAlbums = []

while (i < albumsLength) {
    if (albums[i].id !== 2 && albums[i].name.length > 5){
        selectedsAlbums[selectedsAlbums.length] = albums[i]
    }
    i++
}
console.log(selectedsAlbums);