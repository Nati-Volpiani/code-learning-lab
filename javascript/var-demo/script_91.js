// un closure nuevo nace cada vez que se ejecuta la función externa, sin importar en cuántas variables guardes después el resultado.const saveAnimal = function(animal) {
 const saveAnimal = function(animal) {
    return function getAnimal() {
        return animal
    }
 }
const myPet = saveAnimal("dog");
const samePet = myPet;

console.log(myPet());
console.log(samePet());
