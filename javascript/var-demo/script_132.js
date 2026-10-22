travel()
function travel() {
    console.log('primero saco el pasaje')
}

const Argentina = ['Neuquén', 'Mendoza', 'Salta', 'Misiones']

function keepTravelValue(Argentina) {
    let keepIndex = 0
    const keepValue = Argentina[keepIndex]

    return function playTravel() {
        console.log(keepValue)
    
    if (keepValue === 'Neuquén') {
        return 'si es Neuquén'
    }
    if (keepValue !== 'Mendoza') {
        return 'sí se cumple la condición, pero no voy a ver este string en consola'
        return 'si se cumplieron las condiciones'
    }
    }
}

const keepKeep = keepTravelValue(Argentina);
const keepFunc = keepKeep()
console.log(keepFunc);
