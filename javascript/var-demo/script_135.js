//function expression
//hoisting

//viajar();

const viajar = function () {
    console.log('function expression')
}
viajar();

const provincias = ['Chubut', 'Río Negro', 'Tierra del Fuego', 'Misiones']

function playViajar(provincias) {
    let index = 2
    const keepValue = provincias[index]

    return function keepPlayViajar() {
        console.log(keepValue)

        if (keepValue === 'Tierra del Fuego') {
            return 'si es Tierra del Fuego'
        }
        if (keepValue !== 'Chubut')
            return 'se cumple la condición, pero no retorno esto'
        return 'se cumple la condición pero no retorno esto'
    }
}

const keepValuePlayTravel = playViajar(provincias);
const keepVar = keepValuePlayTravel()
console.log(keepVar)