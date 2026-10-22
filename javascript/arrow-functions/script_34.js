const words = ["sun", "elephant", "cat", "notebook"];

const isLong = (w) => w.length > 4;
const longWords = words.filter(isLong);

console.log(longWords);

// Expected: longWords returns ['elephant', 'notebook']


const isLong2 = (w) => {
    return w.length > 4;
}

const longWords2 = words.filter(isLong2);

console.log(longWords2);