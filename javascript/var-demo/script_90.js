const saveName = function (name) {

    return function getName() {
        return name
    }

}

const result1 = saveName("Ana");
const result2 = saveName("Carlos");
console.log(result1()); // closure  separado 
console.log(result2()); // closure separado
console.log(result1());
console.log(result2());
