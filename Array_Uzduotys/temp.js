/*Užduotis 1
Faile pateiktos dienos oro temperatūros.Parašykite programą kuri surastų ir išvestų 
didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros
*/

const fs = require('fs');


const temperatures = fs.readFileSync('temp.txt').toString()
    .split(' ')
    .map(Number);


const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

const maxDays = [];
temperatures.forEach((temp, index) => {
    if (temp === maxTemp) {
        maxDays.push(index + 1);
    }
});

const minDays = [];
temperatures.forEach((temp, index) => {
    if (temp === minTemp) {
        minDays.push(index + 1);
    }
});

console.log('Maximum temperature:', maxTemp);
console.log('Day with maximum temperature:', maxDays.join(', '));
console.log('Minimum temperature:', minTemp);
console.log('Day with minimum temperature:', minDays.join(', '));
