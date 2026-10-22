const books = [

    { id: 1, name: "Dune" },
    { id: 2, name: "1984" },
    { id: 3, name: "Emma" },
    { id: 4, name: "It" },
    { id: 5, name: "Foundation" }
];

let i = 0; 

const booksLength = books.length

const selectedBooks = [] 

while ( i < booksLength ) {

    if (books[i].id === 1 || books[i].id === 5){

        selectedBooks[selectedBooks.length] = books[i]

    }

i++

}

console.log(selectedBooks);



