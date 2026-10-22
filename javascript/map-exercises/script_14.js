const books = [
  { id: 1, title: "Dune", pages: 412 },
  { id: 2, title: "It", pages: 1138 }
];

const bookSummaries = books.map(function(b){
   return b.title  + " - " +  b.pages  + " pages"
})

console.log(books);
console.log(bookSummaries);