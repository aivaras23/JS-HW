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
        return plotas;
    }
    largerTriangle(t) {
        const one = this.getArea();
        const two = t.getArea();
        if (one >= two) {
            return true;
        }
        else {
            return false;
        }
    }
}
let newTriangle = new Triangle(22, 19, 25);
let newTriangle2 = new Triangle(16, 12, 19);
console.log(newTriangle2.checkTriangle());
console.log(newTriangle.toString());
console.log(newTriangle.getPerimeter());
console.log(`Trikampio plotis: ${newTriangle.getArea()}`);
console.log(newTriangle2.toString());
console.log(newTriangle2.getPerimeter());
console.log(`Trikampio plotis: ${newTriangle2.getArea()}`);
console.log(`Ar pirmas trimapis didesnis: ${newTriangle.largerTriangle(newTriangle2)}`);
const trianglesArr = [];
trianglesArr.push(new Triangle(13, 12, 14));
trianglesArr.push(new Triangle(9, 10, 7));
trianglesArr.push(new Triangle(10, 10, 13));
let totalArea = 0;
for (const triangle of trianglesArr) {
    const area = triangle.getArea();
    totalArea += area;
}
console.log(`Visu trikampiu plotu suma: ${totalArea.toFixed(2)}`);
