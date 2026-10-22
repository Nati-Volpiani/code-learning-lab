function getFood(food) {

    return function showFood() {
        return food
    }
}
const myFood = getFood('pizza');
console.log(myFood());