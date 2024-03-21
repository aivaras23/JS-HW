/*
Užduotis 2 (IF - 1):
Pirmosios vasaros olimpinės žaidynės įvyko 1896 m. 
Atėnuose. Po to jos vyko arba turėjo vykti kas ketveri metai, 
t.y. 1900 m. – antrosios, 1904 m. – trečiosios ir t.t. 
Neįvykusioms žaidynėms skiriamas eilės numeris, o jų metai vis tiek laikomi olimpiniais. 
Žinomi metai M. Nustatykite olimpinių žaidimų numerį, jei metai yra olimpiniai arba pasakykite, 
kad metai ne olimpiniai. Programa turi paprašyti įvesti metus, ir išvesti ar tai buvo olimpiniai 
metai ar ne, jei tai buvo olimpiniai metai programa turi taip pat išvesti ir numerį.
*/

const getNumber = Number(process.argv[2]);
let counter = 0;
let isOlympicYear = false;

for (let i = 1896; i <= 2024; i = i + 4) {
    counter++;
    if (getNumber === i) {
        isOlympicYear = true;
        break;
    }
}

if (isOlympicYear) {
    console.log(`${getNumber} yra ${counter} olimpiniai metai`)
}
else {
    console.log(`${getNumber} nera olimpiniai metai`)
}
