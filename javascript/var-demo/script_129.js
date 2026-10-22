const planetas = ['Júpiter','Saturno','Urano','Neptuno']

let posición = 0

const valorEncontrado = planetas[posición]

if (valorEncontrado === 'Júpiter') {
    console.log('Si, es Júpiter')
}

if (valorEncontrado !== 'júpiter') {
    console.log('está mal escrito, se cumple la condición')
}