//hoisting
//array+closure+if



saludar();

function saludar() {
    console.log('hola')
}

const saludos = ['holas', 'holis', 'hello', 'hi']

function decirSaludo(saludos) {
    let indexSaludos = 3
    const keepValue = saludos[indexSaludos]
    
    return function guardarSaludo() {
        console.log(indexSaludos)
        if (keepValue === 'hi') {
            return 'si es hi, se cumple la condición'

        }
    
    
        if (keepValue !== 'hello') {
            return 'no es hello, se cumple la condición'
            return 'sí se cumplieron las condiciones'
        }

    }
}

const keepFunc = decirSaludo(saludos);
function playKeepFunc(func) {
console.log(func()); 
}
//console.log(keepFunc());

playKeepFunc(keepFunc)



