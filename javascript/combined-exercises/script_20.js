const employees = [
    { name: "Ana", salary: 2500 },
    { name: "Bruno", salary: 4000 },
    { name: "Carla", salary: 3200 }
];

const eligibleEmployees = employees.filter(function (e) {

    return e.salary >= 3000

})

const raisedSalaries = eligibleEmployees.map(function (s) {

    return s.salary * 1.1

})

let i = 0;

do {
    console.log(raisedSalaries[i])
    i++
} while (i < raisedSalaries.length)

// Expected: filters employees with salary >= 3000, applies a 10% raise via map, then prints each new salary via do while (4400, 3520.0000000000005)
