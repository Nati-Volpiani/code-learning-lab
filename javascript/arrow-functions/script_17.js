const words = ["cat", "elephant", "dog", "hippopotamus"];

const longWords = words.filter((word) => {
    return word.length > 4
});

const upperWords = longWords.map((word) => {
    return word.toUpperCase()
})

console.log(upperWords);

// Expected: upperWords returns ['ELEPHANT', 'HIPPOPOTAMUS']

const longWords2 = words.filter((word) => word.length > 4)

const upperWords2 = longWords2.map((word) => word.toUpperCase())

console.log(upperWords2);