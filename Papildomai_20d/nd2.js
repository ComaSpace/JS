/* Duomenų faile pateikiamas dvimačio masyvo 4, 4 duomenys.Pavyzdžiui:
1 2 2 5
5 1 4 2
2 2 1 3
2 8 9 6

Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:
0 2 2 0
5 0 0 2
2 0 0 3
0 8 9 0

*/

const fs = require("fs");

const data = fs.readFileSync("data.csv").toString().split("\n");
const n = data.length;

for (let i = 0; i < n; i++) {
    let row = data[i].split(" ").map(Number);
    let newRow = [];
    for (let y = 0; y < n; y++) {
        if (i === y || y === n - i - 1) {
            newRow.push(0);
        } else {
            newRow.push(row[y]);
        }
    }
    console.log(newRow.join(" "));
}
