const vardas = <HTMLInputElement> document.getElementById('vardas');
const pavarde = <HTMLInputElement> document.getElementById('pavarde');
const atlyginimas = <HTMLInputElement> document.getElementById('atlyginimas');

const employeeList = <HTMLUListElement> document.getElementById('employeeList')!;

const addBtn = document.getElementById('addBtn')!;




class Darbuotojas {
    constructor(
        public vardas:string,
        public pavarde:string,
        public atlyginimas:number) {
    }

    set _vardas(v:string) {
        this.vardas = v;
    }
    set _pavarde(p:string) {
        this.pavarde = p;
    }
    set _atlyginimas(a:number) {
        this.atlyginimas = a;
    }

    get _vardas():string {
        return this.vardas;
    }
    get _pavarde():string {
        return this.pavarde;
    }
    get _atlyginimas():number {
        return this.atlyginimas;
    }

    public gpm() {
        return (this.atlyginimas * 0.20).toFixed(2);
    }
    public psd() {
        return (this.atlyginimas * 0.0698).toFixed(2);
    }
    public vsd() {
        return (this.atlyginimas * 0.1252).toFixed(2);
    }
}

let newDarbuotojas = new Darbuotojas('Jonas','Jonaitis',1600);
// console.log(newDarbuotojas.gpm());
// console.log(newDarbuotojas.psd());
// console.log(newDarbuotojas.vsd());

const darbuotojuArr:Darbuotojas[] = [];

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
    darbuotojuArr.forEach((darbuotojas, index:number) => {
        const li = document.createElement('li');
        li.innerHTML = `${darbuotojas._vardas} ${darbuotojas._pavarde} ${darbuotojas._atlyginimas}€ <br> GPM:${darbuotojas.gpm()} PSD:${darbuotojas.psd()} VSD:${darbuotojas.vsd()}`;
        employeeList.appendChild(li);

        const dltBtn = document.createElement('button');
        dltBtn.textContent = 'Ištrinti';
        dltBtn.classList.add('delete-button');
        dltBtn.onclick = () => {
            darbuotojuArr.splice(index, 1);
            li.remove();
        }
        li.appendChild(dltBtn);
        
    })
    
}

addBtn.onclick = employees;




