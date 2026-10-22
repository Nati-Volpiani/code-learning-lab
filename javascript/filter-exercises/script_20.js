const albums = [
    { id: 1, name: "Thriller" },
    { id: 2, name: "1989" },
    { id: 3, name: "Divide" },
    { id: 4, name: "1989" },
    { id: 5, name: "Lemonade" },
];

const selectedAlbums = albums.filter(function(a){
    return a.id !== 2 && a.name.length > 5
})

console.log(selectedAlbums);
console.log(albums);
