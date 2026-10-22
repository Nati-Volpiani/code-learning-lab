//let i = 0 → inicialización: se ejecuta una sola vez, al arrancar el loop.
//i < gratitudeLength → la condición: se revisa antes de cada vuelta.
//i++ → el incremento: se ejecuta después de cada vuelta.

//"El incremento (i++) reasigna la variable i, sumándole 1 a su valor actual — es un atajo de i = i + 1.
//  Se ejecuta después de cada vuelta del cuerpo del loop, y el loop entero se sigue repitiendo mientras
//  la condición dé true; en el momento en que la condición da false, el for se corta y no hay más vueltas
//  ni más incrementos."

const gratitude = ['thank you', 'gracias', 'merci', 'grazie', 'arigato', 'shukran'];

function findGratitude(gratitudeWord, gratitudePosition) {

    let foundGratitude = 'encontré gratitude'
    let foundPosition = 'encontré position'


    const gratitudeLength = gratitude.length

    for (let i = 0; i < gratitudeLength; i++) {
        console.log(i, 'no hay break, loop sigue hasta que termina')
        if (gratitude[i] === gratitudeWord && gratitude[i] === gratitudePosition) {
            foundGratitude = gratitude[i];
            foundPosition = i
        }
    }


    // return [gratitudeWord, gratitudePosition];
    return [foundGratitude, foundPosition];

}

const [gratitudeFound, positionFound] = findGratitude('grazie', 'grazie');
console.log(gratitudeFound, 'se cumple la condición');
console.log(positionFound, 'también se cumple la condición');