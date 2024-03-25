class Fraction {
    #sveikojiDalis;
    #skaitiklis;
    #daliklis;

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }

    setSveikojiDalis(sveikojiDalis) {
        this.#sveikojiDalis = sveikojiDalis;
    }

    getSveikojiDalis() {
        return this.#sveikojiDalis;
    }

    setSkaitiklis(skaitiklis) {
        this.#skaitiklis = skaitiklis;
    }

    getSkaitiklis() {
        return this.#skaitiklis;
    }

    setDaliklis(daliklis) {
        this.#daliklis = daliklis;
    }

    getDaliklis() {
        return this.#daliklis;
    }

    toString() {
        return `${this.#sveikojiDalis} ${this.#skaitiklis}/${this.#daliklis}`;
    }

    pridetiInt(sveikasisSkaicius) {
        this.#sveikojiDalis += sveikasisSkaicius;
    }

    prideti(sveikasisSkaicius, skaitiklis, vardiklis) {
        this.#sveikojiDalis += sveikasisSkaicius;
        this.#skaitiklis = this.#skaitiklis * vardiklis + skaitiklis;
        this.#daliklis *= vardiklis;
        this.suprastinti();
    }

    pridetiTrupmena(trupmena) {
        const bendrasVardiklis = this.#daliklis * trupmena.#daliklis;
        this.#sveikojiDalis += trupmena.#sveikojiDalis;
        this.#skaitiklis = this.#skaitiklis * (bendrasVardiklis / this.#daliklis) + trupmena.#skaitiklis * (bendrasVardiklis / trupmena.#daliklis);
        this.#daliklis = bendrasVardiklis;
        this.suprastinti();
    }

    toDouble() {
        return (this.#sveikojiDalis * this.#daliklis + this.#skaitiklis) / this.#daliklis;
    }

    suprastinti() {
        const bendrasDaliklis = this.#daliklis;
        let bendrasSkaitiklis = this.#sveikojiDalis * this.#daliklis + this.#skaitiklis;
        let bendrasSveikojiDalis = 0;
        if (bendrasSkaitiklis >= bendrasDaliklis) {
            bendrasSveikojiDalis = Math.floor(bendrasSkaitiklis / bendrasDaliklis);
            bendrasSkaitiklis %= bendrasDaliklis;
        }
        const bendrasDaliklisGcd = this.gcd(bendrasSkaitiklis, bendrasDaliklis);
        this.#sveikojiDalis = bendrasSveikojiDalis;
        this.#skaitiklis = bendrasSkaitiklis / bendrasDaliklisGcd;
        this.#daliklis = bendrasDaliklis / bendrasDaliklisGcd;
    }

    gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }
}


const fraction = new Fraction(1, 2, 5);
console.log(fraction.toString());
fraction.pridetiInt(2);
console.log(fraction.toString());
fraction.prideti(1, 1, 2);
console.log(fraction.toString());
const kitasFraction = new Fraction(0, 3, 4);
fraction.pridetiTrupmena(kitasFraction);
console.log(fraction.toString());
console.log(fraction.toDouble()); 
