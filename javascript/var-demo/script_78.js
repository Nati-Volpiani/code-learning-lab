function getColor() {
    let color = 'sky blue'
    return function setColor() {
        return color
    }
}
const variusColors = getColor();
console.log(variusColors());

//linea 1 creo una función con el identificador getColor
//línea 2 creé una variable let y le asigné un valor string
//linea 3 retorno y creo otra funcion con identificador setColor
//linea 4 retorno el valor de la variable color creada y asignada en el scope externo.
//línea 5 cierro scope interno
//linea 6 cierro scope externo
//linea 7 en scope global creo una variable constante y guardo el valor de la funcion adetro, e invoco
//  la funcion getColor
//línea 8 estoy invocando la funcion que guardé en la variable variusColors