"use strict";
class Darbuotojas {
    constructor(vardas, pavarde, atlyginimas) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.atlyginimas = atlyginimas;
    }
    set _vardas(v) {
        this.vardas = v;
    }
    set _pavarde(p) {
        this.pavarde = p;
    }
    set _atlyginimas(a) {
        this.atlyginimas = a;
    }
    get _vardas() {
        return this.vardas;
    }
    get _pavarde() {
        return this.pavarde;
    }
    get _atlyginimas() {
        return this.atlyginimas;
    }
    gpm() {
        return `gyventojo pajamų mokestis(GPM): ${(this.atlyginimas * 0.20).toFixed(2)}`;
    }
    psd() {
        return `privalomusis sveikatos draudimas(PSD): ${(this.atlyginimas * 0.0698).toFixed(2)}`;
    }
    vsd() {
        return `valstybinis socialinis draudimas(VSD): ${(this.atlyginimas * 0.1252).toFixed(2)}`;
    }
}
let newDarbuotojas = new Darbuotojas('Jonas', 'Jonaitis', 1600);
console.log(newDarbuotojas.gpm());
console.log(newDarbuotojas.psd());
console.log(newDarbuotojas.vsd());
const darbuotojuArr = [];
darbuotojuArr.push(new Darbuotojas('Ona', 'Onaite', 1600));
darbuotojuArr.push(new Darbuotojas('Antantas', 'Antanaitis', 2000));
darbuotojuArr.push(new Darbuotojas('Petras', 'Petraitis', 1400));
console.log(darbuotojuArr);
