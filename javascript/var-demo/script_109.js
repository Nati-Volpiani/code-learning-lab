//SCOPE

const ciudad = 'Villa Carlos Paz'

function mostrarCiudad() {
    console.log(ciudad);
    if (ciudad !== 'Córdoba') {
        console.log(ciudad)
    }
}

mostrarCiudad();

//si la funcion no es invocada, no va a  pasar el valor 
// que queres que muestre console.log

//el mostrarCiudad(); llama a la funcion y el console.log 
// va a mostrar ese valor en consola cuando se ejecuta la funcion,
//  pero no lo va a retornar