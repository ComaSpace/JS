function isOlympicYear(year) {
    return year % 4 === 0;
}

function getOlympicNumber(year) {
    return ((year - 1896) / 4) + 1;
}

const year = process.argv[2];

if (isOlympicYear(year)) {
    const olympicNumber = getOlympicNumber(year);
    console.log(`The year ${year} is an Olympic year. It's number ${olympicNumber}.`);
} else {
    console.log(`The year ${year} is not an Olympic year.`);
}
