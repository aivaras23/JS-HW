const fs = require('fs');

const getNumbers = fs.readFileSync('./js2/numbers.csv').toString().split(' ').map(Number);
const obj = {};
for (let i = 0; i < getNumbers.length; i++) {
    let number = getNumbers[i];
    if (obj[number]) {
        obj[number]++;
    } else {
        obj[number] = 1;
    }
}
console.log(obj);
