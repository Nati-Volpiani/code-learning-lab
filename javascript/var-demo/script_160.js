const saludos = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Konnichiwa', 'Marhaba']

function findByGreeting(arrayElementos, word) {

    let saveElement = 'no encontré el saludo'
    let saveIndex = undefined
    const saludosLength = arrayElementos.length

    for (let i = 0; i < saludosLength; i++) {
        if (saludos[i] === word) {
            saveElement = saludos[i]
            saveIndex = i
            break;
        }
    }

    return [saveElement, saveIndex]
}

const [element1, indexPositionArray] = findByGreeting(saludos, 'Adios');
console.log('este es el valor del elemento del array', element1);
console.log('este es el índice del elemento del array', indexPositionArray);

