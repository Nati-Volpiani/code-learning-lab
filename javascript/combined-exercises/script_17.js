const words = ["hi", "sun", "coffee", "go", "elephant"]

const longWords = words.filter(function (w) {

    return w.length > 3

})

let i = 0;

const upperWords = []

do {

    upperWords.push(longWords[i].toUpperCase())
    i++

} while ( i < longWords.length )  

    console.log(upperWords);
    
    // Expected: filters words longer than 3 letters, then builds a new array with each one uppercased via do while + push (COFFEE, ELEPHANT)
