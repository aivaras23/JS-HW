/*
Duomenų faile pateikiamas dvimačio masyvo 4,4 duomenys. Pavyzdžiui:

1 2 2 5
5 1 4 2
2 2 1 3
2 8 9 6

Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:

0 2 2 0
5 0 0 2
2 0 0 3
0 8 9 0
*/

const fs = require('fs');
const data = fs.readFileSync('./js2/data.csv').toString().split('\r\n');

const getNums = data.map(a => a.split(' ').map(Number));

for (let i = 0; i < getNums.length; i++) {
    getNums[i][i] = 0; // istrizaine is kairio visurtinio kampo
    // getNums[i][getNums.length - i - 1] = 0;
    getNums[getNums.length - 1 - i][i] = 0; // istrizaine is desines visurtinio kampo
}

const result = getNums.map(l => l.join(' ')).join('\r\n');
console.log(result);
