function rideBicycle(km1, km2, km3) {

    return function showKilometer() {
        return km1 + km2 + km3
    }
}
const myKilometer = rideBicycle(20, 30, 40);
console.log(myKilometer());

// qué es el clousure ?
//es cuando una función recuerda las variables del scope donde
//  fue creada, incluso después de que esa función exterior
//  ya terminó de ejecutarse.

//Fede lo describió así: guarda en memoria el valor de una 
// variable que fue creada en un scope externo.
//  Eso es exactamente lo que pasa.

// "Un closure es cuando una función guarda en memoria las 
// variables del scope externo donde fue creada, para poder
//  usarlas después, incluso cuando ese scope ya no está activo."