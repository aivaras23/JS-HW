/*
Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek iš viso šiame masyve yra lyginių ir nelyginių skaičių. 
Išveskite visus lyginius ir nelyginius skaičius.

Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

Programa turi išvesti:

Lyginiai skaičiai: 8 2
Nelyginiai skaičiai: 5 7 3
*/

const fs = require('fs');
const data = fs.readFileSync('./js1/data.csv').toString().split(' ').map(Number);

const evenArr = [];
const oddArr = [];
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        evenArr.push(data[i]);
    }
    else {
        oddArr.push(data[i]);
    }
}

console.log(`Lyginiai skaiciai: ${evenArr.join(' ')}\nNelyginiai skaiciai: ${oddArr.join(' ')}`)