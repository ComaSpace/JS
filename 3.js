const hours = parseInt(process.argv[2]);
const minutes = parseInt(process.argv[3]);
const seconds = parseInt(process.argv[4]);

let newSeconds = seconds + 1;

let newMinutes = minutes;
if (newSeconds === 60) {
    newSeconds = 0;
    newMinutes += 1;
}

let newHours = hours;
if (newMinutes === 60) {
    newMinutes = 0;
    newHours += 1;
}

if (newHours === 24) {
    newHours = 0;
}

console.log(`${newHours} hours, ${newMinutes} minutes, and ${newSeconds} seconds.`);
