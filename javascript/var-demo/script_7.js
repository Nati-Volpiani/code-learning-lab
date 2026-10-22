let Velocidad = 1 //valor de variable global 1
 // velocidad es el nombre de la variable global 
// let es la palabra reservada para declarar la variable //

function aumentarVelocidad() { // function es la palabra 
// reservada para declarar la funcion 
    // aumentarVelocidad es el nombre de la funcion 
    Velocidad = 2; // Velocidad es la variable global 
    // que se modifica dentro de la funcion aumentarVelocidad 
    console.log(Velocidad); //  console.log imprime el nuevo
    //  valor de la variable global Velocidad que es 2 
}

function acelerar() { 
    let Velocidad = 3; // let es la palabra reservada para 
    // declarar la variable local Velocidad dentro de 
    // la funcion acelerar. con let se crea una nueva
    //  variable local Velocidad que no afecta a la variable global 
   // Velocidad //
    console.log(Velocidad);
}

function frenar() {
    let Velocidad = 0;
    let Esperando = 'La carroza'
    console.log(Velocidad);
    if(true) {
        let Nombre = 'Francesco'
        console.log(Nombre);
    }
    
}

aumentarVelocidad();
acelerar();
frenar();
console.log(Esperando);