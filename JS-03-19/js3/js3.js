const fs = require('fs');

const getArr = fs.readFileSync('./js3/mas.csv').toString().split('\r\n');

const newArr = getArr.map((arr) => arr.split(' '));

const newRow1 = newArr.map(([row1]) => row1);
const newRow2 = newArr.map(([, row2]) => row2);
const newRow3 = newArr.map(([, , row3]) => row3);
const newRow4 = newArr.map(([, , , row4]) => row4);

const reversedSeq = [];
reversedSeq.push(newRow1, newRow2, newRow3, newRow4);


reversedSeq.map((l) => {
    let result = l.map(x => x + ' ').join('');
    console.log(result);
});

/*
2 variantas
reversedSeq.forEach((line) => {
    let out = '';
    line.forEach((el) => {
        out += el + ' ';
    })
    let result = out;
    console.log(result);
})
*/
