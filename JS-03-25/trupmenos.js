
class Trupmena {
    #sveikojiDalis;
    #skaitiklis;
    #daliklis;
    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }

    set sveikojiDalis(sveikojiDalis) {
        this.#sveikojiDalis = sveikojiDalis;
    }
    get sveikojiDalis() {
        return this.#sveikojiDalis;
    }

    set skaitiklis(skaitiklis) {
        this.#skaitiklis = skaitiklis;
    }
    get skaitiklis() {
        return this.#skaitiklis;
    }

    set daliklis(daliklis) {
        this.#daliklis = daliklis;
    }
    get daliklis() {
        return this.#daliklis;
    }

    toString() {
        return `${this.#sveikojiDalis} ${this.#skaitiklis}/${this.#daliklis}`
    }

    pridetiInt() {
        return `${this.#sveikojiDalis + (this.#skaitiklis / this.#daliklis)}`
    }

    prideti() {
        const x1 = this.#sveikojiDalis;
        const x2 = this.#skaitiklis;
        const x3 = this.#daliklis;
        const calc = x1 * x3 + x2;
        if (calc > x3) {
            const sveikoji = Math.floor(calc / x3);
            const liekana = calc % x3;
            if (liekana === 0) {
                return `${sveikoji}`
            }
            return `${sveikoji} ${liekana}/${x3}`;
        }
    }

    pridetiTrupmena(ankstesne) {
        const x1 = this.sveikojiDalis;
        const x2 = this.skaitiklis;
        const x3 = this.daliklis;

        const y1 = ankstesne.sveikojiDalis;
        const y2 = ankstesne.skaitiklis;
        const y3 = ankstesne.daliklis;

        const calcDabartine = x1 * x3 + x2;
        const calcAnkstesne = y1 * y3 + y2;

        const skaitiklisRes = calcDabartine * y3 + calcAnkstesne * x3;
        const daliklisRes = x3 * y3;

        console.log(daliklisRes);

        if (skaitiklisRes >= daliklisRes) {
            const sveikoji = Math.floor(skaitiklisRes / daliklisRes);
            const liekana = skaitiklisRes % daliklisRes;
            if (liekana === 0) {
                return `${sveikoji}`;
            }
            return `${sveikoji} ${liekana}/${daliklisRes}`;
        }
    }

    toDouble() {
        return this.sveikojiDalis + (this.#skaitiklis / this.#daliklis);
    }



}

const a = new Trupmena(1, 3, 5);
const b = new Trupmena(2, 8, 5);

console.log(b.toString()); // --> 2 8/5
console.log(b.pridetiInt()); // --> 3.6
console.log(b.prideti()); // --> 3 3/5
console.log(b.toDouble()) // -> 3.6

console.log(a.pridetiTrupmena(b)) // ->> 5 5/25
