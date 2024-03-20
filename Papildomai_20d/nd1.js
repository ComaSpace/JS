/* Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek iš viso šiame masyve 
yra lyginių ir nelyginių skaičių.Išveskite visus lyginius ir nelyginius skaičius.

Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

Programa turi išvesti:

Lyginiai skaičiai: 8 2
Nelyginiai skaičiai: 5 7 3
*/

const fs = require("fs");
const input = fs.readFileSync("skaiciai.csv").toString().split(" ").map(Number);

let evenCount = 0;
let oddCount = 0;

const evenNumbers = [];
const oddNumbers = [];

input.forEach(num => {
    if (num % 2 === 0) {
        evenCount++;
        evenNumbers.push(num);
    } else {
        oddCount++;
        oddNumbers.push(num);
    }
});

console.log(`Total even numbers: ${evenCount}`);
console.log(`Total odd numbers: ${oddCount}`);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);


