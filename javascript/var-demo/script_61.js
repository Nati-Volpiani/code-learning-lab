//Ejercicio

//Creá una variable constante llamada song. Dentro guardá una función llamada describe que reciba 5 parámetros:
//  title, artist, album, year y genre.

//La función debe:

//Mostrar los 5 valores en consola
//Devolver solo uno — el que vos elijas
//Después llamá a la función con los argumentos que quieras y guardá el resultado en una variable. 
// Mostrá esa variable en consola.

const song = function describe(title, artist, album, year, genre) {
    console.log(title, artist, album, year, genre)
    return artist
}
let keep = song('Claro de Luna' , 'Beethoven' , 'Sonata para piano' , 1801 , 'Masculino' );
console.log(keep);