function sayValue() {
    let number = 60
       return function sayNumber() {
        console.log(50)
    return number
    }
}

let values = sayValue();
console.log(values);
console.log(values());


function sayValue() {       // definición — no corre nada
    let number = 60
    return function sayNumber() {   // definición de sayNumber — tampoco corre nada
        console.log(50)
        return number
    }
}

let values = sayValue();    // ← ACÁ ocurre la invocación de sayValue
console.log(values);    // no hay () después de values — NO es una invocación

console.log(values());  // ← ACÁ ocurre la invocación de sayNumber

//cuando invoco la funcion (), el motor ejecuta el código que hay adentro

//Invocar = escribir el nombre de la función con ()
//Ejecutar = el motor corre el código de adentro