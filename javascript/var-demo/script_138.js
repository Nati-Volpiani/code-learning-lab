const lóbulos = ['frontal', 'parietal', 'temporal', 'occipital']

const brain = procesar(lóbulos)
const value = brain()
console.log(value)

function procesar(lóbulos) {
    let index = 1
    const valueIndex = lóbulos[index]
    return function integrar() {
        console.log(valueIndex)
        if (valueIndex === 'parietal') {
            return 'si, es parietal. se cumple la condición'
        }
        if (valueIndex !== 'frontal') {
            return 'se cumple la condicion'
            return 'últimos 2 return no son válidos'
        }
    }
}

//regular()
const regular = function () {
    console.log('error')
}

regular()