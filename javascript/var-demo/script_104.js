const arrayColours = ['green', 'blue' ,'pink', 'orange']

function mostrar(arrayColours) {
    
    if (arrayColours[3] === 'orange') {
        console.log(arrayColours[3])
        return arrayColours[2]
    }
}

const result = mostrar(arrayColours)
console.log(result);


console.log(arrayColours[0]);