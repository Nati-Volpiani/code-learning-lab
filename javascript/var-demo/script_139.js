const lóbulos= ['frontal', 'parietal', 'temporal', 'occipital']

const brain = procesar(lóbulos);
const value = brain();
console.log(value)


function procesar(lóbulos) {
    let index = 2
    const keepValue = lóbulos[index]
    return function interpretar() {
        console.log(keepValue)
        if (keepValue === 'temporal') {
            return 'si, y se cumple la condición'
        }
        if (keepValue !== 'parietal') {
            return 'se cumple la condición'
            return 'no se retorna'
        }
    }
}

//almacenar()

const almacenar = function() {
    console.log('reference error')
}

almacenar();