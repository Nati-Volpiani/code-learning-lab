const items = ["cat", "elephant", "dog", "hippopotamus", "ant", "car", "butterfly"];


const shortWords = items.filter(function(w){
    return w.length < 4 || w.length > 8
})

console.log(shortWords);
console.log(items);