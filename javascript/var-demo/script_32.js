const nombre = 'Natalia'
let apellido = 'Volpiani'
let otro = nombre

const nombre = function mostrar() {
    console.log(nombre)
}
function mostrar() {
    console.log(nombre);
}

nombre();
mostrar(); 

// Uncaught --> script_32.js:5
//  SyntaxError: Identifier 
// 'nombre' has already been declared (at script_32.js:5:7)