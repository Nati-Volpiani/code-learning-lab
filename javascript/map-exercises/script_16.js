const students = [
  { id: 1, name: "Ana", grade: 7 },
  { id: 2, name: "Luis", grade: 4 },
  { id: 3, name: "Marta", grade: 9 }
];


const boostedGrades = students.map(function(s){
    return s.grade + 1
})

console.log(students);
console.log(boostedGrades);