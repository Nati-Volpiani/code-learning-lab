const lóbulos = ['frontal', 'parietal', 'temporal', 'occipital']

const brain = procesar(lóbulos)

const value = brain()
console.log(value)

function procesar(lóbulos) {
    let index = 0
    const valueIndex = lóbulos[index]
    return function execute() {
        console.log(valueIndex)
        if (valueIndex === 'frontal') {
            return 'si, se cumple la condición'
        }
        if (valueIndex !== 'parietal') {
            return 'si, se cumple la condición pero no retorno esto'
            return 'no retorno esto'
        }
    }
}

// regular() hoisting / function expression

const regular = function() {
    console.log('secondary function')
}

regular()