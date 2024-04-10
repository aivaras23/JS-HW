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
        return `gyventojo pajamų mokestis(GPM): ${(this.atlyginimas * 0.20).toFixed(2)}`;
    }
    public psd() {
        return `privalomusis sveikatos draudimas(PSD): ${(this.atlyginimas * 0.0698).toFixed(2)}`;
    }
    public vsd() {
        return `valstybinis socialinis draudimas(VSD): ${(this.atlyginimas * 0.1252).toFixed(2)}`;
    }
}

let newDarbuotojas = new Darbuotojas('Jonas','Jonaitis',1600);
console.log(newDarbuotojas.gpm());
console.log(newDarbuotojas.psd());
console.log(newDarbuotojas.vsd());

const darbuotojuArr:Darbuotojas[] = [];

darbuotojuArr.push(new Darbuotojas('Ona','Onaite',1600));
darbuotojuArr.push(new Darbuotojas('Antantas','Antanaitis',2000));
darbuotojuArr.push(new Darbuotojas('Petras','Petraitis',1400));

console.log(darbuotojuArr);




