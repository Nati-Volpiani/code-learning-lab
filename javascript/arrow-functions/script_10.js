const employees = [{ name: "Ana", age: 25 }, { name: "Bruno", age: 17 }, { name: "Carla", age: 30 }];

const adults = employees.filter((employee)=> {
    return employee.age >= 18
})

console.log(adults);

// Expected: adults returns [{name: 'Ana', age: 25}, {name: 'Carla', age: 30}]

const adults2 = employees.filter((employee) => employee.age >= 18 )

console.log(adults2);