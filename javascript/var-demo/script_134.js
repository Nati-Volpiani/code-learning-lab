colorear();

function colorear() {
    console.log('coloreo página 1')
}

const colores = ['red', 'blue', 'sky blue']

function draw(colores) {
    let index = 1
    const keepValue = colores[index]
    return function playDraw() {
        console.log(keepValue)
        if (keepValue === 'blue') {
            return 'si es blue, se cumple la condición'
        }
        if (keepValue !== 'red')
            return 'se cumple la condición. pero no se va a retornar esto'
        return 'no retorno nada'

    }
}

const keepFuncDraw = draw(colores)
const keepValue = keepFuncDraw()
console.log(keepValue);