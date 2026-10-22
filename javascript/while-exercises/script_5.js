const words = ["cat", "elephant", "dog", "hippopotamus", "ant"];

let i = 0

const wordsLength = words.lengt

let longWordsCount = 0


while (i < 5) {
if (words[i].length > 4) {
    longWordsCount = longWordsCount + 1
}
i++

}
console.log(longWordsCount)