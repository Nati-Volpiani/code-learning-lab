const employees = [

    { id: 1, name: "Laura" },
    { id: 2, name: "Marcos" },
    { id: 3, name: "Sofia" },
    { id: 4, name: "Diego" }
]

let i = 0;

const employeesLength = employees.length

const selectedEmployees = []

while (i < employeesLength) {

    if (employees[i].id > 2) {

        selectedEmployees[selectedEmployees.length] = employees[i]

    }
    i++
}

console.log(selectedEmployees);
