// 1.     Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą
//  iš masyvo išrenka ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą
//  sąlygą.

function filtruotiElementus(masyvas, salyga) {
    const naujasMasyvas = [];

    for (let i = 0; i < masyvas.length; i++) {
        if (salyga(masyvas[i])) {
            naujasMasyvas.push(masyvas[i]);
        }
    }

    return naujasMasyvas;
}

const pradinisMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lyginiaiSkaičiai = filtruotiElementus(pradinisMasyvas, elementas => elementas % 2 === 0);
console.log(lyginiaiSkaičiai);

const didesniUžPenkis = filtruotiElementus(pradinisMasyvas, elementas => elementas > 5);
console.log(didesniUžPenkis);

console.log('------------------');

// 2.     Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis.
// Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.

function findUniqueValues(array) {
    const uniqueValues = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueValues.includes(array[i])) {
            uniqueValues.push(array[i]);
        }
    }

    return uniqueValues;
}

const array = [1, 2, 3, 4, 1, 2, 5, 6, 7, 3, 8, 9, 10, 7];
const uniqueValues = findUniqueValues(array);
console.log(uniqueValues);

console.log('---------------------');


// 3.     Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją,
//  grąžintų objekto gylį(kiek giliausiai objektas turi įdėtinius objektus).



// 4.     Masyvo Atvirkštinis: Turite skaičių masyvą.Naudodami for ciklą, sukurkite
// naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}


const originalArray = [1, 2, 3, 4, 5];

console.log(reverseArray(originalArray));

console.log('------------------');


// 5.     Raktų Filtravimas Objekte: Turite objektą su daugybe savybių.Sukurkite
// funkciją, kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas
// savybės, kurios tenkina tam tikrą sąlygą.

/*
const newArray = Object.keys(prekesEur).map((key) => [key, prekesEur[key]]);
 
console.log(newArray);
 
const newArray = Object.entries(prekesEur);
console.log(newArray);
*/



// 6.     Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai.Naudodami
// for in ciklą, apskaičiuokite visų objekto savybių sumą.

function calculateObjectSum(objektas) {
    let suma = 0;

    for (let key in objektas) {
        suma += objektas[key];
    }
    return suma;
}

const exampleObject = {
    skaicius1: 10,
    skaicius2: 20,
    skaicius3: 30
};

console.log(calculateObjectSum(exampleObject));

console.log('------------------');


// 7.     Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais.Naudodami
// for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.

const array1 = [1, 'hello', true, null, undefined, 5, 'world', false, 10];
const count = {};

for (let i = 0; i < array1.length; i++) {
    const type = typeof array1[i];
    if (!count[type]) {
        count[type] = 0;
    }
    count[type]++;
}

console.log('Element counts by type:', count);

console.log('-------------------');



// 8.     Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą(raktai ir reikšmės)
//  konvertuotų į masyvą, kur kiekvienas elementas būtų[raktas, reikšmė] pora.

function objectToArr(obj) {
    const result = [];

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

const object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

console.log(objectToArr(object));

console.log('-----------------');


// 9.     Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, kurio
//  raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu.

function DynamicOb(n) {
    const x = {};
    for (let i = 1; i <= n; i++) {
        x[i] = i * i;
    }
    return x;
}

const n = 5;
console.log(DynamicOb(n));


console.log('--------------------');


// 10.  Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų
// savybės(pvz., vardas, amžius, miestas).Sukurkite funkciją, kuri naudojant for in
// ciklą, pakeistų tam tikrų savybių reikšmes, jeigu jos tenkina nurodytą sąlygą
// (pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).


function modifyUserProperties(users, condition) {
    for (let user in users) {
        if (users.hasOwnProperty(user)) {
            if (condition(user)) {
                users[user].pilnametis = false;
            }
        }
    }
    return users;
}

const users = {
    user1: { vardas: 'Jonas', amzius: 25, miestas: 'Vilnius' },
    user2: { vardas: 'Tomas', amzius: 16, miestas: 'Kaunas' },
    user3: { vardas: 'Karolina', amzius: 20, miestas: 'Klaipėda' }
};

function condition(user) {
    return users[user].amzius < 18;
}

const modifiedUsers = modifyUserProperties(users, condition);
console.log(modifiedUsers);

