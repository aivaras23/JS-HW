class Triangle {
    constructor(
        public edgeA:number, 
        public edgeB:number, 
        public edgeC:number) {
   
    }
    private set _edgeA(_edgeA:number) {
        this.edgeA = _edgeA
    }
    private set _edgeB(_edgeB:number) {
        this.edgeB = _edgeB
    }
    private set _edgeC(_edgeC:number) {
        this.edgeC = _edgeC
    }
    get _edgeA():number {
        return this.edgeA;
    }
    get _edgeB():number {
        return this.edgeA;
    }
    get _edgeC():number {
        return this.edgeA;
    }

    public checkTriangle() {
        if((this.edgeA + this.edgeB) > this.edgeC) {
            console.log('Sudaryti trikampį įmanoma');
        }
        else {
            console.log('Sudaryti trikampio neimanoma');
        }
    }

    public toString() {
        return `Kraštinė A = ${this.edgeA}\nKraštinė B = ${this.edgeB}\nKraštinė C = ${this.edgeC}`
    }

    public getPerimeter() {
        return `Trikampio perimetras: ${this.edgeA + this.edgeB + this.edgeC}`
    }

    public getArea():number {
        const A = this.edgeA;
        const B = this.edgeB;
        const C = this.edgeC;
        const semiP = (A + B + C) / 2;
        const plotas = Math.sqrt(semiP * (semiP - A) * (semiP - B) * (semiP - C));
        return plotas;
    }

    public largerTriangle(t:Triangle) {
        const one = this.getArea();
        const two = t.getArea();

        if(one >= two) {
            return true;
        }
        else {
            return false;
        }
    }
 
}

let newTriangle = new Triangle(12,9,15);
let newTriangle2 = new Triangle(16,12,19);

console.log(newTriangle.checkTriangle());
console.log(newTriangle.toString());
console.log(newTriangle.getPerimeter());
console.log(`Trikampio plotis: ${newTriangle.getArea()}`);

console.log(newTriangle2.checkTriangle());
console.log(newTriangle2.toString());
console.log(newTriangle2.getPerimeter());
console.log(`Trikampio plotis: ${newTriangle2.getArea()}`);
console.log(`Ar pirmas trimapis didesnis: ${newTriangle.largerTriangle(newTriangle2)}`);


const trianglesArr:Triangle[] = [];

trianglesArr.push(new Triangle(13,12,14));
trianglesArr.push(new Triangle(9,10,7));
trianglesArr.push(new Triangle(10,10,13));


let totalArea = 0;
for(const triangle of trianglesArr) {
    const area = triangle.getArea();
    totalArea += area;
}
 console.log(`Visu trikampiu plotu suma: ${totalArea.toFixed(2)}`)

