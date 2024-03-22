/*
1. Užduotis
Faile studentai.json pateikiamas JSON formatu studentų sąrašas (masyvas), jų duomenys ir pažymiai. Nuskaitykite duomenis iš masyvo, 
suskaičiuokite ir išveskite:
1. Studentų kiekį
2. Studentų amžiaus vidurkį
3. Studentų pažangumo vidurkį (visų pažymių vidurkį)
4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
Jonas Jonaitis 5.5
Petras Petraitis 9.3
*/

const fs = require('fs');
const data = fs.readFileSync('./js1/studentai.json').toString();
const studentai = JSON.parse(data);

// 1. Studentu kiekis
console.log(`Studentu kiekis: ${studentai.length}`);
console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);

// 2. Studentu amziaus vidurkis
let ageAvg = 0;
for (const student of studentai) {
    ageAvg += student.amzius / studentai.length;
}
console.log(`Studentu amziaus vidurkis: ${ageAvg}`);
console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);

// 3. Studentu pazymiu vidurkis
let gradeLength = 0;
let gradeSum = 0;
let gradeAvg = 0;
for (const student of studentai) {
    gradeLength += student.pazymiai.length;
    gradeSum += student.pazymiai.reduce((a, b) => a + b);
    gradeAvg = (gradeSum / gradeLength).toFixed(1);
}
console.log(`Visu studentu pazymiu vidurkis: ${gradeAvg}`);
console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);

// 4. Studentu sarasas/vidurkis
const sarasas = [];
for (const student of studentai) {
    sarasas.push(student.vardas);
    sarasas.push(student.pavarde);
    sarasas.push((student.pazymiai.reduce((a, b) => a + b) / student.pazymiai.length).toFixed(1));
}

for (let i = 0; i < sarasas.length; i += 3) {
    const name = sarasas[i];
    const surname = sarasas[i + 1];
    const avg = sarasas[i + 2];
    console.log(`${name} ${surname} ${avg}`);
}
