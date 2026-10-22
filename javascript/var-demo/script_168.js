const water = ['water', 'agua', 'eau', 'acqua', 'mizu', 'ma/ a'];

function findWater(waterWord, excludeWord) {

    let foundWater = 'no encontré nada'
    let foundIndex = 'tampoco encontré nada'

    const waterLength = water.length

    for (let i = 0; i < waterLength; i++) {
        if (water[i] === waterWord && water[i] !== excludeWord) {
            foundWater = water[i]
            foundIndex = i
            break;
            
            
        }
    }
    return [foundWater, foundIndex];
}

const [wordFound, positionFound] = findWater('agua', 'agua');
console.log(wordFound, '--');
console.log(positionFound, '--')