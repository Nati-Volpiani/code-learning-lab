const employees = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Marta" }
];

const employeeNames = employees.map(function(e){
    return e.name
})

console.log(employeeNames);
console.log(employees);