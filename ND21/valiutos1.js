async function convertCurrency(amount) {
    const response = await fetch(`https://api.frankfurter.app/latest?from=EUR&to=NOK`);
    const data = await response.json();

    const rate = data.rates.NOK;
    const convertedAmount = amount * rate;

    console.log(`NOK kursas: ${rate}`);
    console.log(`${amount} EUR => ${convertedAmount} NOK`);
}

const amount = parseFloat(process.argv[2]);

convertCurrency(amount);
