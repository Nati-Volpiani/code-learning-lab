const names = ["Ana", "BRUNO", "Alberto", "Carla", "ANDREA"]

const lowerNames = names.map(function(ln){

    return ln.toLowerCase() 

})

const namesWithA = lowerNames.filter(function(a){

return a[0] === "a"


})

console.log(namesWithA);

// Expected: converts each name to lowercase via map, then filters the ones starting with "a" (ana, alberto, andrea)
