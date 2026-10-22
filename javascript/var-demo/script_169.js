const yes = ['yes', 'sí', 'oui', 'sì', 'hai', 'naam'];

function findYes(firstOption, secondOption) {

    let foundYes = 'bla bla'
    let foundPosition = 'bla bla bla'

    const yesLength = yes.length

    for (let index = 0; index = yesLength; index++) {
        if (yes[index] === firstOption || yes[index] === yes[index]) {
            foundYes = yes[index]
            foundPosition = index
            return [foundPosition, foundYes];
        }
    }
}

const [positionFound, yesFound] = findYes('oui', 'hai');
console.log(positionFound, 'sisisi');
console.log(yesFound,'se cumple');