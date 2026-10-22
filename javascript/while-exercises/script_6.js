const temperatures = [-5, 10, 0, -2, 8, -10, 3];

let i = 0;

const temperaturesLength = temperatures.length

let negativeCount = 0

while (i < temperaturesLength) {
    if (temperatures[i] < 0) {
        negativeCount = negativeCount + 1
    }

    i++
    
}
console.log(negativeCount);

