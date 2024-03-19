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


// const h = Number(process.argv[2]);
// const m = Number(process.argv[3]);
// const s = Number(process.argv[4]);

// function plusSecond(h, m, s) {
//     if (h > 23 || m > 59 || s > 59) {
//         return `Netinkamai nurodytas laikas.`;
//     }
//     if (s < 59) {
//         s++;
//     } else {
//         if (m < 59) {
//             s = 0;
//             m++;
//         } else {
//             if (h < 23) {
//                 s = 0;
//                 m = 0;
//                 h++
//             } else {
//                 s = 0;
//                 m = 0;
//                 h = 0;
//             }
//         }
//     }

//     return `${h} ${m} ${s}`;
// }

// console.log(plusSecond(h, m, s));



// let hour = Number(process.argv[3]);
// let min = Number(process.argv[4]);
// let sec = Number(process.argv[5]);
// sec++
// if (sec === 60) {
//     min++
//     sec = 0;
// }
// if (min === 60) {
//     hour++
//     min = 0;
// }
// if (hour == 24) {
//     hour = 0
// }
// console.log(`It is: ${hour}h:${min}min:${sec}s`);