const words = ["cat", "elephant", "sun", "butterfly", "dog", "mountain"]

const longWords = words.filter(function(w){

return w.length > 4

})

let i = 0

do {
    console.log(longWords[i]);
    i++
} while ( i < longWords.length );

// Expected: filters words longer than 4 letters, then prints each one via do while (elephant, butterfly, mountain)
