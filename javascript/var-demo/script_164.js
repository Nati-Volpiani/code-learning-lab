//Como no hay break, el if se sigue evaluando en cada vuelta, y cada vez que se cumple, pisa el resultado anterior. 

const goodbyes = ['goodbye', 'chau', 'au revoir', 'arrivederci', 'sayonara', 'ma´a salama']

function findGoodbye(goodbyeWord, goodbyeWordPosition) {

    let foundGoodbye = 'no encontré la palabra'
    let foundPosition = 'no encontré la posición'

    const goodbyesLength = goodbyes.length

    for (let i = 0; i < goodbyesLength; i++) {
        if (goodbyeWord === goodbyes[i] || goodbyeWordPosition !== goodbyes[i]) {
            foundGoodbye = goodbyes[i];
            foundPosition = i
        }
    }
    return [foundGoodbye, foundPosition];
}

const [farewellFound, positionFound] = findGoodbye('adios', 'sayonara');
console.log(farewellFound, 'no cumple la condición');
console.log(positionFound, 'tampoco cumple la condicion');

