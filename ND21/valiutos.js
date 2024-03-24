/* Panaudodami Frankfurter.app API sukurkite JS programą kuri atliktų valiutos kurso
keitimą.API aprašas pateikiamas čia: https://www.frankfurter.app/docs/ . 
Iškviečiant Jūsų aplikaciją turime nurodyti į kokią valiutą norime konvertuoti 
ir kokią sumą (konvertavimas visą laiką bus vykdomas iš EUR į kažką). 
Jūsų aplikacija turi išvesti valiutos kursą (kiek kainuoja iškeisti vieną EUR į 
tą valiutą) ir kiek gausime nurodytos valiutos už pateiktą sumą. Pavyzdžiui 
jei programą iškviestumėme taip:

node currency.js NOK 150
Programa turėtų išvesti:
NOK kursas: 11.5
150 EUR => 1725 NOK
*/


async function convertCurrency(amount) {
    try {
        const response = await fetch(`https://api.frankfurter.app/latest?from=EUR&to=NOK`);
        const data = await response.json();

        const rate = data.rates.NOK;
        const convertedAmount = amount * rate;

        console.log(`NOK kursas: ${rate}`);
        console.log(`${amount} EUR => ${convertedAmount} NOK`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const amount = parseFloat(process.argv[2]);

convertCurrency(amount);

