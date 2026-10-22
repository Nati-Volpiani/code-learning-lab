const lóbulos = ['frontal', 'parietal', 'temporal', 'occipital']

const brain = procesar(lóbulos);
const value = brain();

console.log(value);

function procesar(lóbulos) {
    let index = 3
    const keepValue = lóbulos[index]
    return function descodificar() {
        console.log(keepValue)
        if (keepValue === 'occipital') {
            return 'se cumple la condición'
        }
        if (keepValue !== 'temporal') {
            return 'se cumple la condición'
            return 'no hay return'
        }
    }
}

//reconocer();

const reconocer = function() {
    console.log('reference error')
}

reconocer();