const temps = [30, 12, 25];

const toFahrenheit = (celsius) => celsius * 9 / 5 + 32;

let i = 0;

const fahrenheitTemps = [];

while (i < temps.length) {

    fahrenheitTemps.push(toFahrenheit(temps[i]))

    i++

};

console.log(fahrenheitTemps);

// Expected: fahrenheitTemps returns [86, 53.6, 77]


const toFahrenheit2 = (celsius) => {
    return celsius * 9 / 5 + 32;
}
    let j = 0;
    const fahrenheitTemps2 = [];

    while (j < temps.length) {
        fahrenheitTemps2.push(toFahrenheit2(temps[j]))

        j++
    }


console.log(fahrenheitTemps2);