var Triangle = /** @class */ (function () {
    function Triangle(sideA, sideB, sideC) {
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
        if (!this.isValidTriangle()) {
            throw new Error("Invalid triangle sides: The sum of any two sides must be greater than the third side.");
        }
    }
    Triangle.prototype.setSideA = function (value) {
        if (this.isValidNewSide(value)) {
            this._sideA = value;
        }
        else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    };
    Triangle.prototype.getSideA = function () {
        return this._sideA;
    };
    Triangle.prototype.setSideB = function (value) {
        if (this.isValidNewSide(value)) {
            this._sideB = value;
        }
        else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    };
    Triangle.prototype.getSideB = function () {
        return this._sideB;
    };
    Triangle.prototype.setSideC = function (value) {
        if (this.isValidNewSide(value)) {
            this._sideC = value;
        }
        else {
            throw new Error("Invalid side length: The sum of the other two sides must be greater than the new side.");
        }
    };
    Triangle.prototype.getSideC = function () {
        return this._sideC;
    };
    Triangle.prototype.isValidTriangle = function () {
        return this._sideA + this._sideB > this._sideC &&
            this._sideA + this._sideC > this._sideB &&
            this._sideB + this._sideC > this._sideA;
    };
    Triangle.prototype.isValidNewSide = function (newSide) {
        var sumOfOtherSides = this._sideA + this._sideB + this._sideC - newSide;
        return sumOfOtherSides > newSide;
    };
    Triangle.prototype.toString = function () {
        return "Triangle with sides: ".concat(this._sideA, ", ").concat(this._sideB, ", ").concat(this._sideC);
    };
    Triangle.prototype.getPerimeter = function () {
        return this._sideA + this._sideB + this._sideC;
    };
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
    };
    Triangle.prototype.largerTriangle = function (t) {
        return this.getArea() > t.getArea();
    };
    return Triangle;
}());
var triangles = [];
triangles.push(new Triangle(3, 4, 5));
triangles.push(new Triangle(5, 12, 13));
triangles.push(new Triangle(7, 8, 9));
var totalArea = 0;
triangles.forEach(function (triangle) {
    console.log(triangle.toString());
    totalArea += triangle.getArea();
});
console.log("Total area of all triangles: ".concat(totalArea));
