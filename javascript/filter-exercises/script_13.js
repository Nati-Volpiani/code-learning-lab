const students = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Carla" },
    { id: 5, name: "Ana" }
];

const selectedNames = students.filter(function(n){
    return n.name !== "Ana" && n.id > 2
})

console.log(selectedNames);
console.log(students);