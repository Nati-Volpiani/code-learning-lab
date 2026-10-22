const words = ["hello", "sun", "computer", "yes", "programming"];

const selectedWords = words.filter(function(w) {
 return w.length > 5; 
})

console.log(selectedWords);
console.log(words);