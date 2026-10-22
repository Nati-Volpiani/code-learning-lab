const instrumentos = ['violín','arpa','piano','acordeón']

let index = 2

const keepValue = instrumentos[index]

if (keepValue === 'piano') {
    console.log('si, es piano')
}

if (keepValue !== 'arpa') {
    console.log('no es arpa, se cumple la condición')
}

//"Un closure ocurre cuando una función anidada usa una variable de la función que la contiene, y esa variable sigue estando disponible para la función anidada aunque la función que la contiene ya haya terminado de ejecutarse."