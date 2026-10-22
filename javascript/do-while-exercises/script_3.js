const temperatures = [-5, 3, 0, -12, 8, -1, 20];

let i = 0;

const temperaturesLengt = temperatures.length

const selectedTemperatures = []

do {

    if ( temperatures[i] < 0 || temperatures[i] === 0 ) {
        selectedTemperatures[selectedTemperatures.length] = temperatures[i]

    }

    i++
} while (i < temperaturesLengt);

console.log(selectedTemperatures);

// Expected: keep temperatures less than 0 or equal to 0