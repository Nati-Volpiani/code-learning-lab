const employees = [{ name: "Ana", salary: 3000 }, { name: "Bruno", salary: 1800 }, { name: "Carla", salary: 4200 }];

const eligibleEmployees = employees.filter((employee) => {
    return employee.salary >= 2000
});

const raisedEmployees = eligibleEmployees.map((employee) => {
    return { name: employee.name, salary: employee.salary * 1.1 }
});

const totalPayroll = raisedEmployees.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.salary
},0);

console.log(totalPayroll);

// Expected: totalPayroll returns 7920


const eligibleEmployees2 = employees.filter((employee) => employee.salary >= 2000)

const raisedEmployees2 = eligibleEmployees2.map((employee) => ({ name: employee.name, salary: employee.salary * 1.1 }))

const totalPayroll2 = raisedEmployees2.reduce((accumulator, currentValue) => accumulator + currentValue.salary,0)

console.log(eligibleEmployees2);
console.log(raisedEmployees2);
console.log(totalPayroll2);