//Ejercicio

//Escribí una función llamada describe que reciba 4 parámetros: title, director,
//  year y genre.

//La función debe:

//Mostrar los 4 valores en consola
//Devolver el que vos elijas
//Después llamá a la función directamente con los argumentos que quieras y guardá
//  el resultado en una variable. Mostrá esa variable en consola.

function describe(title, director, year, genre) {
    console.log(title, director, year, genre);
    return year
}
let keep = describe('The Imitation Game', 'Morten Tyldum', 2014,
    'drama,suspenso histórico');
console.log(keep);
