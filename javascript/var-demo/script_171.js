const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Konnichiwa', 'Marhaba'];

const language = ['English', 'Spanish', 'French', 'Italian', 'Japanese', 'Arabic'];

function findRelations(greetingWord) {

    let foundGreeting = 'no encontré saludo'
    let foundLanguage = 'no encontré lenguaje'

    const greetingsLength = greetings.length
    const languagesLength = language.length

    for (let index = 0; index < greetingsLength; index++) {
        if (greetings[index] === greetingWord) {
             
            foundGreeting = greetings[index];
            foundLanguage = language[index];
            return [foundGreeting, foundLanguage]
        }
    }
    
}

const [greetingFound, languageFound] = findRelations('Konnichiwa')
console.log(greetingFound, 'encontré saludo');
console.log(languageFound, 'encontré lenguaje');