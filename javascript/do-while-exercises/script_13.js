const students = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Carla" },
    { id: 5, name: "Ana" }
];

let i = 0;

const studentsLength = students.length

const selectedStudents = []

do {

    if (students[i].name !== "Ana" && students[i].id > 2) {

        selectedStudents[selectedStudents.length] = students[i]
    }
    i++
} while (i < studentsLength)

console.log(selectedStudents);

// Expected: keep students whose name is not "Ana" and id greater than 2