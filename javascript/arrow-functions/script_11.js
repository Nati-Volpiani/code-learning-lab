const employees = [{ name: "Ana", age: 25 }, { name: "Bruno", age: 17 }, { name: "Carla", age: 30 }];

const employeeNames = employees.map((employee) => {
    return employee.name
})

console.log(employeeNames);


// Expected: employeeNames returns ['Ana', 'Bruno', 'Carla']


const employeeNames2 = employees.map((employee) => employee.name)

console.log(employeeNames2);