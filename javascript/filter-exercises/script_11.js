const employees = [
    { id: 1, name: "Laura" },
    { id: 2, name: "Marcos" },
    { id: 3, name: "Sofia" },
    { id: 4, name: "Diego" }
];

const selectedId = employees.filter(function(employee){
    return employee.id > 2
})

console.log(selectedId);
console.log(employees);