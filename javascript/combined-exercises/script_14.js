const employees = [
    { name: "Ana", age: 17 },
    { name: "Bruno", age: 22 },
    { name: "Carla", age: 15 },
    { name: "Diego", age: 30 }
];

const adultEmployees = employees.filter(function (e) {

    return e.age >= 18

})

const adultNames = adultEmployees.map(function (n) {

    return n.name

})

let i = 0;

while (i < adultNames.length) {

    console.log(adultNames[i])
    i++

}

// Expected: filters employees 18+, extracts their names via map, then prints each one via while (Bruno, Diego)
