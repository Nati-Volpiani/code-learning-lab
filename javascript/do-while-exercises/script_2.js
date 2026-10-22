const words = ["hello", "sun", "computer", "yes", "programming"];


let i = 0;
const selectedWords = []
do {
    if ( words[i].length > 5) {
        selectedWords[selectedWords.length] = words[i]
    }
    i++
}
while (i < words.length) 


console.log(selectedWords);

// Expected: keep words with length greater than 5