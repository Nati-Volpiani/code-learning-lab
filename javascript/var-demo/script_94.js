function sayGoodBye(value) {
    return value
}
const result1 = sayGoodBye('adios adios') //devuelve el valor del return: adios adios
console.log(result1);


function sayGoodMoorning(value) {
    return value
}
const result2 = sayGoodMoorning('buen día') //devuelve el valor del return: buen día
console.log(result2);


function sayGoodNight(value) {
    console.log('buenas noches')
}
console.log(sayGoodNight()); //devuelve valor de return: undefined


function talk(value) {
    return value
}
const result3 = talk('healthy diet') //devuelve el valor de return healthy diet
console.log(result3);


function sleep(value) {
    console.log('take a nap')
}
console.log(sleep); // devuelve el cuerpo de la funcion


function learn(value) {
    console.log('English')
}
console.log(learn()); //devuelve el valor del return: undefined


function study(value) {
    return value
}
const result4 = study('JavaScript') // devuelve el valor del return: JavaScript
console.log(result4);


//como en el cuerpo de la funcion no existe el return, el engine de JavaScript devuelve undefined.
// las funciones devuelven el valor de return y sino implicitamente JavaScript devuelve undefined.