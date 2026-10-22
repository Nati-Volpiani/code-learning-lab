const colors = ["red", "green", "blue", "yellow", "red", "purple", "blue"];

const selectedColors = colors.filter(function(c){
    return c === "red" || c === "blue"
})

console.log(selectedColors);
console.log(colors);