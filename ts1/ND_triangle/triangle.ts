class Triangle {
    private _sideA: number;
    private _sideB: number;
    private _sideC: number;

    constructor(sideA: number, sideB: number, sideC: number) {
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
        if (!this.isValidTriangle()) {
            throw new Error("Invalid triangle sides: The sum of any two sides must be greater than the third side.");
        }
    }

    public setSideA(value: number): void {
        if (this.isValidNewSide(value)) {
            this._sideA = value;
        } else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    }

    public getSideA(): number {
        return this._sideA;
    }

    public setSideB(value: number): void {
        if (this.isValidNewSide(value)) {
            this._sideB = value;
        } else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    }

    public getSideB(): number {
        return this._sideB;
    }

    public setSideC(value: number): void {
        if (this.isValidNewSide(value)) {
            this._sideC = value;
        } else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    }

    public getSideC(): number {
        return this._sideC;
    }

    private isValidTriangle(): boolean {
        return this._sideA + this._sideB > this._sideC &&
            this._sideA + this._sideC > this._sideB &&
            this._sideB + this._sideC > this._sideA;
    }

    private isValidNewSide(newSide: number): boolean {
        const sumOfOtherSides = this._sideA + this._sideB + this._sideC - newSide;
        return sumOfOtherSides > newSide;
    }

    public toString(): string {
        return `Triangle with sides: ${this._sideA}, ${this._sideB}, ${this._sideC}`;
    }

    public getPerimeter(): number {
        return this._sideA + this._sideB + this._sideC;
    }

    public getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
    }

    public largerTriangle(t: Triangle): boolean {
        return this.getArea() > t.getArea();
    }
}

let triangles: Triangle[] = [];
triangles.push(new Triangle(3, 4, 5));
triangles.push(new Triangle(5, 12, 13));
triangles.push(new Triangle(7, 8, 9));

let totalArea: number = 0;
triangles.forEach((triangle) => {
    console.log(triangle.toString());
    totalArea += triangle.getArea();
});
console.log(`Total area of all triangles: ${totalArea}`);
