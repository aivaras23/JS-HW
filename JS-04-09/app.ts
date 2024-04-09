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
            console.log('Sudaryti trikampio neimanoma')
        }
    }

    public toString() {
        return `Krašinė A:${this.edgeA} Kraštinė B:${this.edgeB} Kraštinė C:${this.edgeC}`
    }

    public getPerimeter() {
        return `Trikampio perimetras: ${this.edgeA + this.edgeB + this.edgeC}`
    }

    public getArea() {
        const A = this.edgeA;
        const B = this.edgeB;
        const C = this.edgeC;
        const semiP = (A + B + C) / 2;
        const plotas = Math.sqrt(semiP * (semiP - A) * (semiP - B) * (semiP - C));
        return `Trikampio plotas: ${plotas.toFixed(2)}`
    }

 
}

let newTriangle = new Triangle(5,7,8);
let newTriangle2 = new Triangle(7,9,12);

console.log(newTriangle.toString());
console.log(newTriangle.getPerimeter());
console.log(newTriangle.getArea());





/*
   public largerTriangle(t:Triangle) {
  
    }
    */