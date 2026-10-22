let Velocidad = 1 //SCOPE ROOT
let V = 'V'
const velocidadMaxima = 120 //SCOPE ROOT
const velocidadMedia = 80
const velocidadMinima = 0

function aumentarVelocidad() {
    // EL SCOPE DE AUMENTAR VELOCIDAD EN ESTE CASO DISPONE DEL SCOPE
    //  GLOBAL DE VELOCIDAD
    Velocidad = velocidadMaxima; 
    console.log(Velocidad);
}

function acelerar() {
    Velocidad = velocidadMedia;
    console.log(Velocidad);
}

function frenar() {
    Velocidad = velocidadMinima;
    console.log(Velocidad);
    
}
function separar() {
V = 'V'; 

console.log(V);
}
aumentarVelocidad();
acelerar();
frenar();
console.log(V);