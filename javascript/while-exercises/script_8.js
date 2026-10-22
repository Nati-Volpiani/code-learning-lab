const words = ["hello", "sun", "computer", "yes", "programming"];

let i = 0

const wordsLength = words.length

const w = []

while (i < wordsLength) {

    if (words[i].length > 5) {
        w[w.length] = words[i]
    }
    i++
}

console.log(w);