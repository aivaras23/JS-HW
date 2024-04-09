"use strict";
class Triangle {
    constructor(edgeA, edgeB, edgeC) {
        this.edgeA = edgeA;
        this.edgeB = edgeB;
        this.edgeC = edgeC;
    }
    set _edgeA(_edgeA) {
        this.edgeA = _edgeA;
    }
    set _edgeB(_edgeB) {
        this.edgeB = _edgeB;
    }
    set _edgeC(_edgeC) {
        this.edgeC = _edgeC;
    }
    get _edgeA() {
        return this.edgeA;
    }
    get _edgeB() {
        return this.edgeA;
    }
    get _edgeC() {
        return this.edgeA;
    }
    checkTriangle() {
        if ((this.edgeA + this.edgeB) > this.edgeC) {
            console.log('Sudaryti trikampį įmanoma');
        }
        else {
            console.log('Sudaryti trikampio neimanoma');
        }
    }
    toString() {
        return `Krašinė A:${this.edgeA} Kraštinė B:${this.edgeB} Kraštinė C:${this.edgeC}`;
    }
    getPerimeter() {
        return `Trikampio perimetras: ${this.edgeA + this.edgeB + this.edgeC}`;
    }
    getArea() {
        const A = this.edgeA;
        const B = this.edgeB;
        const C = this.edgeC;
        const semiP = (A + B + C) / 2;
        const plotas = Math.sqrt(semiP * (semiP - A) * (semiP - B) * (semiP - C));
        return `Trikampio plotas: ${plotas.toFixed(2)}`;
    }
}
let newTriangle = new Triangle(5, 7, 8);
let newTriangle2 = new Triangle(7, 9, 12);
console.log(newTriangle.toString());
console.log(newTriangle.getPerimeter());
console.log(newTriangle.getArea());
/*
   public largerTriangle(t:Triangle) {
  
    }
    */ 
