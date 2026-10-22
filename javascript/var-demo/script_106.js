const arrayEdades = [15, 22, 34, 41]

function comprobar(arrayEdades) {

    if (arrayEdades[2] === 34) {
        console.log(arrayEdades[2]) // consola->34
        return arrayEdades[0] //retorna solo indice 0 ->15
    }
}

const resultado = comprobar(arrayEdades) 
console.log(resultado); // consola->15


console.log(arrayEdades[3]); // consola-> 41