function getFood(food) {

    return function showFood(food2) {
        return food + food2
    }
}
const myFood = getFood('pizza');
console.log(myFood('fish'));

