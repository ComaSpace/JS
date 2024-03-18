function isArmstrongNumber(num) {
    const a = Math.floor(num / 100);
    const b = Math.floor((num % 100) / 10);
    const c = num % 10;

    return a ** 3 + b ** 3 + c ** 3 === num;
}

const givenNumber = parseInt(process.argv[2]);

if (givenNumber >= 100 && givenNumber <= 999) {
    if (isArmstrongNumber(givenNumber)) {
        console.log(`${givenNumber} is an Armstrong number.`);
    } else {
        console.log(`${givenNumber} is not an Armstrong number.`);
    }
} else {
    console.log("Please provide a valid number between 100 and 999 as input.");
}
