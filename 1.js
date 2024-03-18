function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

const sideA = parseFloat(process.argv[2]);
const sideB = parseFloat(process.argv[3]);
const sideC = parseFloat(process.argv[4]);

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);

console.log("The area of the triangle is: " + triangleArea);
