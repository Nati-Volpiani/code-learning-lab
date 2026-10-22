let saludo = 'hola'
let otroSaludo = 'chau'

let otroSaludo = function decir() {
    console.log(otroSaludo)
}

function mostrar() {
    saludo = 'chauchau';
console.log(saludo)
}

mostrar()

// Uncaught --> script_37.js:4
//  SyntaxError: Identifier
//  'otroSaludo' has already been declared (at script_37.js:4:5)