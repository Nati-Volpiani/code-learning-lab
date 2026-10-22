const arrayColores = ['verde', 'turquesa', 'azul', 'marron', 'violeta']

function paint(arrayColores) {
    console.log(arrayColores[0]);
    console.log(arrayColores[3]);
    return arrayColores
}
let result = paint(arrayColores)
console.log(result);


const camionetas = 'Toyota'

//condición si es extrictamente igual
if (camionetas === 'Toyota') {
    console.log('si existe', camionetas)
}

//si no es la condición que pregunto no va a entrar
if (camionetas !== 'Toyota') {
    console.log('no existe', camionetas)
}