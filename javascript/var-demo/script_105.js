const arrayFrutas = ['manzana', 'banana', 'pera', 'uva'] 

function revisar(arrayFrutas) { 

    if (arrayFrutas[1] !== 'pera') {  // true
        console.log(arrayFrutas[1]) // banana
        return arrayFrutas[3] //uva (lo que devuelve)
    }
}

const resultado = revisar(arrayFrutas) //argumento
console.log(resultado); // [3] uva


console.log(arrayFrutas[0]); //manzana
