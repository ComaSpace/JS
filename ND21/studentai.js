/* Faile studentai.json pateikiamas JSON formatu studentų sąrašas (masyvas), 
jų duomenys ir pažymiai. Nuskaitykite duomenis iš masyvo, suskaičiuokite ir 
išveskite:
1. Studentų kiekį
2. Studentų amžiaus vidurkį
3. Studentų pažangumo vidurkį (visų pažymių vidurkį)
4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
Jonas Jonaitis 5.5
Petras Petraitis 9.3
*/


const fs = require("fs");
const data = fs.readFileSync("studentai.json");
const students = JSON.parse(data);

const totalAge = students.reduce((acc, student) => acc + student.amzius, 0);
const averageAge = totalAge / students.length;

let totalGrade = 0;
students.forEach((student) => {
    const gradeSum = student.pazymiai.reduce((acc, grade) => acc + grade);
    totalGrade += gradeSum / student.pazymiai.length;
});
const averageGrade = totalGrade / students.length;

console.log("Studentų sąrašas ir vidurkiai:");
students.forEach((student) => {
    const gradeSum = student.pazymiai.reduce((acc, grade) => acc + grade);
    const averageStudentGrade = gradeSum / student.pazymiai.length;
    console.log(`${student.vardas} ${student.pavarde} ${averageStudentGrade.toFixed(2)}`);
});


console.log(`1. Studentų kiekis: ${students.length}`);
console.log(`2. Studentų amžiaus vidurkis: ${averageAge}`);
console.log(`3. Studentų pažangumo vidurkis: ${averageGrade.toFixed(2)}`);
