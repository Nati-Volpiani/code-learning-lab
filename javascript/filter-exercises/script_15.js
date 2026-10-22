const books = [
    { id: 1, name: "Dune" },
    { id: 2, name: "1984" },
    { id: 3, name: "Emma" },
    { id: 4, name: "It" },
    { id: 5, name: "Foundation" },
];

const selectedId = books.filter(function(b){
    return b.id === 1 || b.id === 5
})

console.log(selectedId);
console.log(books);