/*
2. Užduotis
Panaudodami Frankfurter.app API sukurkite JS programą kuri atliktų valiutos kurso keitimą. 
API aprašas pateikiamas čia: https://www.frankfurter.app/docs/ . 
Iškviečiant Jūsų aplikaciją turime nurodyti į kokią valiutą norime konvertuoti ir kokią sumą 
(konvertavimas visą laiką bus vykdomas iš EUR į kažką). Jūsų aplikacija turi išvesti valiutos kursą 
(kiek kainuoja iškeisti vieną EUR į tą valiutą) ir kiek gausime nurodytos valiutos už pateiktą sumą. 
Pavyzdžiui jei programą iškviestumėme taip:

node currency.js NOK 150
Programa turėtų išvesti:
NOK kursas: 11.5
150 EUR => 1725 NOK
*/

async function currencyExchange(currency, amount) {
    const tmp = await fetch('https://api.frankfurter.app/latest');
    const getApi = await tmp.json();
    const getRates = getApi.rates;

    const currencyList = await fetch('https://api.frankfurter.app/currencies');
    const getList = await currencyList.json();

    if (getRates[currency]) {
        const converted = (amount * getRates[currency]).toFixed(3);
        console.log(`${amount} EUR => ${Number(converted)} ${currency}`);
    }
    else {
        const allCurrencies = Object.keys(getList).join(', ');
        console.log(`Jusu norimos valiutos nebuvo rasta musu sarase. \nTaciau galite rinktis viena is siu valiutu: \n${allCurrencies}`)
    }
}

currencyExchange(process.argv[2], process.argv[3]);
