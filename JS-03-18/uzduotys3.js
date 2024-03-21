/*
Užduotis 3 (IF - 2):
Elektroninis laikrodis rodo laiką: valandas, minutes ir sekindes 
(įvedami skaičiai h, m, s). Kiek laiko laikrodis rodys po sekundės? 
(Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai (h,m,s).
*/

let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);
s++;

if (s === 60) {
    s = 0;
    m++;
    if (m === 60) {
        m = 0;
        h++;
    }
    if (h === 24) {
        h = 0;
    }
}
console.log(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);




