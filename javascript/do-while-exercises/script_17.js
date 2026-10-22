const cities = [
    { id: 1, name: "Rome" },
    { id: 2, name: "Lima" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Oslo" },
    { id: 5, name: "Cairo" },
    { id: 6, name: "Miami" }
];

let i = 0;

const citiesLength = cities.length

const selectedCities = []

do {

    if ( cities[i].id > 2 && cities[i].id < 5 ) {

        selectedCities[selectedCities.length] = cities[i]
    }
    i++
} while ( i < citiesLength );

console.log(selectedCities);

// Expected: keep cities with id greater than 2 and less than 5
