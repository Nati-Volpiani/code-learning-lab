function saludar()  {
    console.log('good morning');
}
console.log(saludar()); //cuando el engine no encuentra return, lo devuelve de manera implicita con undefined


function saludar2() {
    console.log('good afternoon'); 
}
console.log(saludar2()); // cuando el engine no encuntra el return, devuelve undefined.

function tomar() {
    console.log('rivo'); 
}
console.log(tomar()); // siempre hay return en una funcion. Si está escrita, engine devuelve un valor, si no está escrita, engine devuelve de manera implíta; "undefined"

function caminar(kilometros) {
    console.log(5)
}
console.log(caminar());// cuando el engine no encuentra escrito el return en el cuerpo de la funcion, lo devuelve de manera implicita con undefined

function viajar() {
console.log('Neuquen')
}
console.log(viajar()); // si en el cuerpo de la funcion no existe el retorno de x valor, el engine de JavaScript devuelve undefined

function cook() {
    console.log('dinner');
}
console.log(cook); // como no existe el return en el cuerpo de esta funcion, JavaScript devuelve undefined

function configureRobot() {
    console.log(clean);
}
console.log(configureRobot()); // si en el cuerpo de la funcion no está escrito el return, el engine me devuelve undefined
