const pasos = 500
let viaje = 400
let camino = 600

let viaje = function volar() {
    console.log(viaje);
}

viaje();

function mostrarValorCamino() {
    console.log(camino);
}

mostrarValorCamino();

const pasos = function mostrarValorPasos()  {
    console.log(pasos);
}

pasos();

// Uncaught --> script_34.js:5 
//  SyntaxError: Identifier
//  'viaje' has already been declared