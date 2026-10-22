const greeting = ['hello', 'hi', 'hola', 'bonjour', 'ciao', 'Konnichiwa', 'Marhaba'];


function greet(element1, element2) {

    let greetingElement1 = 'si falla, mostrar hola'
    let greetingElement2 = 'si falla mostrá chau'

    const greetingLength = greeting.length

    for (let i = 0; i < greetingLength; i++) {
        if (greeting[i] === element1 && greeting[i] !== element2) {
            greetingElement1 = greeting[i]
            greetingElement2 = i
        }
    }

    return [greetingElement1, greetingElement2];

}

const [value1, value2] = greet('bonjour', 'adios');
console.log(value1, 'si se cumple');
console.log(value2, 'tambien se cumple'); 

