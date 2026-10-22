const goodbyes = ['goodbye', 'chau', 'au revoir', 'ciao', 'sayonara', 'ma´ a salama'];

function findGoodbye(goodbyeWord, goodbyePosition) {

    let foundGoodbye = '------'
    let foundPosition = '------'

    let goodbyeLength = goodbyes.length

    for (let i = 0; i < goodbyes.length; i++)  { 
        console.log(i);
        if (goodbyes[i] === goodbyeWord && goodbyes[i] !== goodbyePosition) {
            foundGoodbye = goodbyes[i];
            foundPosition = i
            break;

        }
    }
    return [foundGoodbye, foundPosition] 
}
const [farewellFound, positionFound]= findGoodbye('goodbye', 'chau');
console.log(farewellFound, 'se cumple la condición');
console.log(positionFound, 'también se cumple la condición');