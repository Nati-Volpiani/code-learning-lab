function rideBicycle(km1,km2,km3) {
    return function showKilometer() {
       return km1 + km2 + km3
    }
}
const myKilometer = rideBicycle(20, 30, 40);
console.log(myKilometer());