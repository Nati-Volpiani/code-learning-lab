function getAnimal() {
    let animal = 'cat'
    return function showAnimal() {
        return animal
    }
}
const myAnimal = getAnimal();
console.log(myAnimal);
//--> punto y coma ; indica que termina la sentencia
console.log(myAnimal());
