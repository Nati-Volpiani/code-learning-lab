const numeros = [6,27,37]
//const impide reasignar la variable, pero no 
// impide mutar el contenido del array al que
//  apunta
function cambiarValor() {
    numeros[0] = 100 
}

cambiarValor();
console.log(numeros);

//al invocar la funcion antes de mostrar en
//consola  los valores de los elementos del 
// array en el scope global, mostrará los 
// valores con la mutación de valor del elemento.
// porque al invocar primero la funcion, 
// en esa instancia, engine lee el array con los 
// elementos y sus valores, y luego ve la funcion 
// y lo que hay en el cuerpo de la funcion, que 
// es donde se da la mutación. entonces muestra 
// los valores actualizados.