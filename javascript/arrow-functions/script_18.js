const students = [{ name: "Ana", grade: 85 }, { name: "Bruno", grade: 55 }, { name: "Carla", grade: 92 }];

const passingStudents = students.filter((student) => {
    return student.grade >= 60
});

const totalGrades = passingStudents.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.grade
},0);

console.log(totalGrades);


//Expected: totalGrades returns 177

//El 0 es el valor inicial del accumulator. Sin él, el accumulator arranca valiendo el primer elemento del array, y si ese elemento es un objeto, la suma no funciona
const passingStudents2 = students.filter((student) => student.grade >= 60)

const totalGrades2 = passingStudents2.reduce((accumulator, currentValue) => accumulator + currentValue.grade, 0 )

console.log(passingStudents2);
console.log(totalGrades2);