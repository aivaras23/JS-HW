/*
Užduotis 1 (Veiksmai):
Sukurkite programą trikampio plotui rasti. 
Trikampio kraštinės įvedamos klaviatūra, o programa turi išvesti rezultatą.
Duomenys įvedami kaip parametrai: a, b ir c.
*/

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(+area.toFixed(3));