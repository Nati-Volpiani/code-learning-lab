const items = ["cat", "elephant", "dog", "hippopotamus", "ant", "car", "butterfly"];

let i = 0;

const itemsLength = items.length

const shortWords = []

do {

    if ( items[i].length < 4 || items[i].length > 8 ) {

        shortWords[shortWords.length] = items[i]
    }
    i++
} while ( i < itemsLength )

    console.log(shortWords);

// Expected: keep words with length less than 4 or greater than 8