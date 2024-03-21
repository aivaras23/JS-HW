let mas = [];
for (let i = 1; i < 10; i++) {
    mas.push(i);
}

let suma = (x, y) => {
    console.log(x + y);
}

mas.forEach((x, i) => {
    console.log(`${i} => ${x}`);
});

console.clear();

let temp = [5, 6, 2, 3, 4, 6, 7];
let sum = 0;
let kiekis = 0;
temp.forEach((x) => {
    sum += x;
    kiekis++;
})
console.log(`Vidurkis: ${sum / kiekis}`);

console.clear();

let men = [[1, 2, 3, 4, 1, 3, 4], [3, 5, 6, 7, 2, 6, 7], [3, 2, 4, 5, 6, 7, 8]];
let sum1 = 0;
let kiekis1 = 0;
men.forEach((sav) => {
    let savSuma = 0;
    let savKiekis = 0;
    sav.forEach((diena) => {
        savSuma += diena;
        savKiekis++;
    })
    sum1 += savSuma;
    kiekis1 += savKiekis;
    console.log(`Savaites vidurkis: ${savSuma / savKiekis}`)
})
console.log(`${sum1 / kiekis1}`)
