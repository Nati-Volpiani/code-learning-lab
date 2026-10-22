const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Konnichiwa', 'Marhaba']

const languages = ['English', 'Spanish', 'French', 'Italian', 'Japanese', 'Arabic']


function findRelations(greetingsWord, languagesWord) {

    let foundGreetings = 'no encontré lenguaje'
    let foundLanguages = 'no encontré idioma'

    const greetingsLength = greetings.length
    const languagesLength = languages.length

for (let indexG = 0; indexG < greetingsLength; indexG++) {
    if (greetings[indexG] === greetingsWord) {
    foundGreetings = greetings[indexG] }
}
for (let indexL = 0; indexL < languagesLength; indexL++) {
   if  (languages[indexL] === languagesWord) {
    foundLanguages = languages[indexL]
   }
}
return [foundGreetings, foundLanguages]
}

const [greetingFound, languageFound] = findRelations('Hola', 'Spanish');
console.log(greetingFound,'encontré saludo')
console.log(languageFound, 'encontré lenguaje')
