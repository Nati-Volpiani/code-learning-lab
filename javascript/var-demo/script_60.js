// Ejercicio

//Creá una variable constante llamada movie. Dentro guardá una función llamada describe
//que reciba 4 parámetros: title, director, year y genre.

//La función debe:

//Mostrar los 4 valores en consola
//Devolver solo title
//Después llamá a la función con los argumentos que quieras y guardá el resultado en una
//  variable. Mostrá esa variable en consola.

const movie = function describe(title , director , year , genre) {
    console.log(title , director , year , genre);
    return title
}
let keep = movie('Frida rompe las bolas' , 'Frida' , 2026 , 'Feminine')
console.log(keep);