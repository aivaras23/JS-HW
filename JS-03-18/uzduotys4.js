/*
Užduotis 4 (For):
Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, 
jei jo skaitmenų, pakeltų 3-uoju laipsniu, suma lygi pačiam skaičiui. 
Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999.
*/

function isArmstrong(num) {
    const splitNum = String(num).split('').map(Number);
    const trec = splitNum.map(n => n * n * n);
    let sum = trec.reduce((a, b) => a + b);
    return sum === num;
}

for (let num = 100; num <= 999; num++) {
    if (isArmstrong(num)) {
        console.log(num);
    }
}


