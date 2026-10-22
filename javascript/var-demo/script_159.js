const saludos = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Konnichiwa', 'Marhaba']

const idioma = ['English', 'Spanish', 'French', 'Italian', 'Japanese', 'Arabic']


function findByGreeting(arrayElementos, word, index = 'undefined') {

    let saveElement = ''
    let saveIndex = 0
    const saludosLength = arrayElementos.length

//si recibo el  índex, significa que ya recorrí el array saludos
    if (index !== 'undefined' && word === 'undefined')  { 
        saveElement = arrayElementos[index]
        return [saveElement]
    }

// si no recibo el index tengo que buscar el saludo para poder obtener el idioma
    for (let i = 0; i < saludosLength; i++) {
        if (saludos[i] === word) {
            saveElement = saludos[i]
            saveIndex = i
            break;
        }
    }

    return [saveElement, saveIndex]
}

const [element1, indexPositionArray] = findByGreeting(saludos, 'Bonjour');
console.log('este es el valor del elemento del array', element1);
console.log('este es el índice del elemento del array', indexPositionArray);
const [element2, indexPositionArray2] = findByGreeting(idioma, 'undefined', indexPositionArray);
console.log('el idioma del saludo es:', element2)
//const valueGreetins = findByGreeting(saludos, 'Bonjour');