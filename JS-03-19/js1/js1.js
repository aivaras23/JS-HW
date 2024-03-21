const fs = require('fs');

let data = fs.readFileSync('./js1/orai.csv').toString().split(' ').map(Number);
min = Math.min(...data);
max = Math.max(...data);
console.log(`Maziausia temperatura: ${min} ; Didziausia temperatura: ${max}`)


