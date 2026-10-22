let velocidad = 4 // variable global // el numero 4 es el valor inicial de la variable global velocidad //

function acelerar(valor) { // el nombre de la funcion es acelerar //
    velocidad = 5; // el numero 5 es el nuevo valor de la variable global velocidad //

    return velocidad; // retur devuelve el nuevo valor de la variable global velocidad //
} // la llave de cierre indica el final de la funcion acelerar //
let valor = acelerar() // la variable valor se crea para almacenar el resultado de la //
//  funcion acelerar que es el nuevo valor de la variable velocidad (que es 5) //
console.log(valor); // se imprime en la consola el valor de la variable "valor" que es el resultado de //
// la funcion acelerar (que es 5) //