const gratitude = ['thank you', 'gracias', 'merci', 'grazie', 'arigato', 'shukran'];
console.log(gratitude);
function findGratitude(gratitudeWord, gratitudePosition) {

    let foundGratitude = 'encontré gratitude'
    let foundPosition = 'encontré position'

    const gratitudeLength = gratitude.length

    gratitude[6] = 'obrigado';

    console.log(gratitudeLength);
    console.log(gratitude.length);

    for (let i = 0; i < gratitudeLength; i++) {
        console.log(i, 'no hay break, loop sigue hasta que termina')
        if (gratitude[i] === gratitudeWord && gratitude[i] === gratitudePosition) {
            foundGratitude = gratitude[i];
            foundPosition = i
        }
    }



    return [foundGratitude, foundPosition];

}

const [gratitudeFound, positionFound] = findGratitude('grazie', 'grazie');
console.log(gratitudeFound, 'se cumple la condición');
console.log(positionFound, 'también se cumple la condición');


console.log(gratitude);
findGratitude();
