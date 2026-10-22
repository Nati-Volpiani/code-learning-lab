const students = [

    { id: 1, name: "Ana" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Carla" },
    { id: 5, name: "Ana" }
]

let i = 0;

const studentsLength = students.length

const selectedStudents = []

while (i < studentsLength) {

    if (students[i].name !== "Ana" && students[i].id > 2) {

        selectedStudents[selectedStudents.length] = students[i]

    }
    i++
}

console.log(selectedStudents);