const temperatures = [-5, 3, 0, -12, 8, -1, 20];

let i = 0;

const temperaturesLength = temperatures.length

const negativeTemperatures = []

while (i < temperaturesLength) {

    if (temperatures[i] < 0) {
        negativeTemperatures[negativeTemperatures.length] = temperatures[i]
    }
    i++
}

console.log(negativeTemperatures);