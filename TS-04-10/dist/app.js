"use strict";
const vardas = document.getElementById('vardas');
const pavarde = document.getElementById('pavarde');
const atlyginimas = document.getElementById('atlyginimas');
const employeeList = document.getElementById('employeeList');
const addBtn = document.getElementById('addBtn');
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
        return (this.atlyginimas * 0.20).toFixed(2);
    }
    psd() {
        return (this.atlyginimas * 0.0698).toFixed(2);
    }
    vsd() {
        return (this.atlyginimas * 0.1252).toFixed(2);
    }
}
let newDarbuotojas = new Darbuotojas('Jonas', 'Jonaitis', 1600);
// console.log(newDarbuotojas.gpm());
// console.log(newDarbuotojas.psd());
// console.log(newDarbuotojas.vsd());
const darbuotojuArr = [];
// darbuotojuArr.push(new Darbuotojas('Ona','Onaite',1600));
// darbuotojuArr.push(new Darbuotojas('Antantas','Antanaitis',2000));
// darbuotojuArr.push(new Darbuotojas('Petras','Petraitis',1400));
// HTML DOM
const employees = () => {
    const getName = vardas.value;
    const getPavarde = pavarde.value;
    const getAtlyginimas = atlyginimas.valueAsNumber;
    const naujasDarbuotojas = new Darbuotojas(getName, getPavarde, getAtlyginimas);
    darbuotojuArr.push(naujasDarbuotojas);
    employeeList.innerHTML = '';
    darbuotojuArr.forEach((darbuotojas, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${darbuotojas._vardas} ${darbuotojas._pavarde} ${darbuotojas._atlyginimas}€ <br> GPM:${darbuotojas.gpm()} PSD:${darbuotojas.psd()} VSD:${darbuotojas.vsd()}`;
        employeeList.appendChild(li);
        const dltBtn = document.createElement('button');
        dltBtn.textContent = 'Ištrinti';
        dltBtn.classList.add('delete-button');
        dltBtn.onclick = () => {
            darbuotojuArr.splice(index, 1);
            li.remove();
        };
        li.appendChild(dltBtn);
    });
};
addBtn.onclick = employees;
//this expression is not constructable type 'string' has no construst signatures
