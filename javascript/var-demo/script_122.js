//ejercicios de .length (cuándo usarlo y cuándo no)

function contarElementos(lista) {
    return lista.length
}

const tareas = ['contar','sumar','dividir','multiplicar']
const cantidadTareas = contarElementos(tareas);
console.log(cantidadTareas);