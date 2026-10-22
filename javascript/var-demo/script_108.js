const arrayNumeros = [10,25,30,45]

const chequear = function(arrayNumeros) {
    if (arrayNumeros[1] === 25) {
        console.log(arrayNumeros[1])
        return arrayNumeros[3]
    }
}

const resultado = chequear(arrayNumeros)
console.log(resultado)
console.log(arrayNumeros[0])

//3 EJERCICIOS SCOPE-3 DE CLOSURE- 3 DE FUNCIONES CON RETURN- 3 CON ARRAY-