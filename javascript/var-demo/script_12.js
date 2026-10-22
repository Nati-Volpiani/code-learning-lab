let auto = 5

const auto1 = 10 //const es la palabra reservada
//  para declarar una variable constante, una variable que no puede ser reasignada
// su valor es fijo y no puede ser modificado despues de su declaracion, 
// si se intenta modificar el valor de unavariable declarada con
// const se producira un error en tiempo de ejecucion.
const auto2 = 15
const auto3 = 20

function usar() {
    auto = 'usar --> 7';
    console.log(auto)
    return auto;  // el valor de retorno 
    // de la funcion usar es el nuevo valor de la variable global auto que es 'usar --> 7' //
}

function usar2() {
    auto = 'usar2 --> 15' ;
    console.log(auto);
}

function usar3() {
    let auto = 'usar3 --> 6';
    console.log(auto);
}
usar();
usar2();
usar3();
console.log(auto);
console.log(usar); // muestra el codigo de la funcion usar porque //
// no se esta llamando a la funcion usar, solo se imprime su codigo porque no//
// llame a la funcion usar con parentesis () // 
// ejemplo //
console.log(usar()); // muestra el resultado de la funcion usar porque al 
// usar () se esta llamando a la funcion usar  y se ejecuta su codigo, 
// lo que hace que se modifique el valor de la variable global auto a 'usar --> 7
// y luego se imprime ese nuevo valor de la variable global auto
//  que es 'usar --> 7 (function usar) //